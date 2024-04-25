import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import PreviewPopup from './PreviewPopup';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import * as XLSX from 'xlsx';

interface ResultsTableProps {
  selectedFile: File | null;
  onTableDataChange: (data: any[]) => void;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ selectedFile, onTableDataChange }) => {
  const [data, setData] = useState<any[]>([]);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [openDialog, setOpenDialog] = useState(false);

  // Define handlePreview function to handle the Preview button click
  const handlePreview = (row: any) => {
    setOpenDialog(true);
    setSelectedRow(row);
  };

  // Define handleDownload function to handle the Download button click
  const handleDownload = (row: any) => {
    setSelectedRow(row);
    setOpenDialog(true);
    setTimeout(() => {
      const container = document.getElementById("report-display-outer-wrap");
      if (container) {
        html2canvas(container).then((canvas) => {
          const imgData = canvas.toDataURL('image/jpeg', 1);
          const pdf = new jsPDF();
          // const pdfWidth = pdf.internal.pageSize.getWidth();
          // const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
          const pdfWidth = 210;
          const pdfHeight = 297;
          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
          pdf.save('downloaded-file.pdf'); 
          // Specify the name of the downloaded PDF file
        });
      }
    }, 1000);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryString = event.target?.result;
        if (typeof binaryString === 'string') {
          // Set rows
          const workbook = XLSX.read(binaryString, { type: 'binary' });
          const worksheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[worksheetName];
          const parsedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          let tableData = parsedData.slice(1);
          const headers: any = parsedData[0];
          tableData = tableData.map((row: any, index: number) => {
            const obj: any = {};
            headers.forEach((header: string, index: number) => {
              obj[header] = row[index];
            });
            obj["id"] = index;
            return obj
          });
          setData(tableData);
          onTableDataChange(tableData);

          // Set headers
          const tableHeaders = headers.map((header: string) => {
            const obj: any = {};
            obj["field"] = header;
            // TODO: When using actual form, you will need to split the name below using delimiter selected to get the actual header name
            obj["headerName"] = header;
            obj["width"] = 120;
            return obj;
          });
          tableHeaders.push({
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params: any) => (
              <div>
                <button onClick={() => handlePreview(params.row)} className="mr-5 text-primary">Preview</button>
                <button onClick={() => handleDownload(params.row)} className="text-success">Download</button>
              </div>
            )
          });
          setColumns(tableHeaders);
        }
      };
      reader.readAsBinaryString(selectedFile);
    }
  }, [selectedFile, onTableDataChange]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 50 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 50]}
        checkboxSelection={false}
      />
      <PreviewPopup
        open={openDialog}
        onClose={handleCloseDialog}
        rowData={selectedRow}
      />
    </div>
  )
}

export default ResultsTable;