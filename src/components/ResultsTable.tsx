import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import PreviewPopup from './PreviewPopup';
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import eventBus from '../utils/eventBus';
import * as XLSX from 'xlsx';

interface ResultsTableProps {
  rows: any[];
  selectedFile: File | null;
  onTableDataChange: (data: any[]) => void;
  onDownloadAll: (rows: any[]) => void;
}

interface ColumnWidths {
  [key: string]: number;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ selectedFile, rows, onTableDataChange, onDownloadAll }) => {
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
        domtoimage.toPng(container)
        .then(function (dataUrl) {
          let img = new Image();
          img.src = dataUrl;
          const pdf = new jsPDF();
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = 297;
          pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
          pdf.save('downloaded-file.pdf');
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
      }
    }, 1000);
  };

  const downloadAllFiles = (rows: any[]) => {
    const zip = new JSZip();
    let count = 0;
    console.log("Downloading all files now...", rows.length);

    rows.forEach((row, index) => {
      setSelectedRow(row);
      setOpenDialog(true);
      setTimeout(() => {
        const container = document.getElementById("report-display-outer-wrap");
        console.log(container);
        if (container) {
          domtoimage.toPng(container)
          .then(function (dataUrl) {
            let img = new Image();
            img.src = dataUrl;
            const pdf = new jsPDF();
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = 297;
            pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
            const pdfBlob = pdf.output('blob');

            // Add the PDF to the zip file
            zip.file(`report-${index + 1}.pdf`, pdfBlob);

            count++;
            console.log(count);
            console.log(rows.length);
            if (count === rows.length) {
              // All PDFs have been added, generate the zip file
              zip.generateAsync({ type: 'blob' }).then((content) => {
                saveAs(content, 'reports.zip');
              });
            }
          })
          .catch(function (error) {
              console.error('oops, something went wrong!', error);
          });
        }
      }, 500);
    });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    const columnWidths: ColumnWidths = {
      "Name": 200,
      "Class": 70,
      "Date": 120,
      "Term": 70,
      "Enrolment": 90,
      "Age": 60,
      "Sex": 60,
      "LIN": 50,
      "English_HW": 100,
      "English_BOT": 100,
      "English_MOT": 100,
      "English_EOT": 100,
      "English_Achievement": 160,
      "English_Comment": 140,
      "Math_HW": 100,
      "Math_BOT": 100,
      "Math_MOT": 100,
      "Math_EOT": 100,
      "Math_Achievement": 160,
      "Math_Comment": 140,
      "Literacy_I_HW": 120,
      "Literacy_I_BOT": 120,
      "Literacy_I_MOT": 120,
      "Literacy_I_EOT": 120,
      "Literacy_I_Achievement": 180,
      "Literacy_I_Comment": 160,
      "Literacy_II_HW": 120,
      "Literacy_II_BOT": 120,
      "Literacy_II_MOT": 120,
      "Literacy_II_EOT": 120,
      "Literacy_II_Achievement": 180,
      "Literacy_II_Comment": 160,
      "Local_Language_HW": 160,
      "Local_Language_BOT": 160,
      "Local_Language_MOT": 160,
      "Local_Language_EOT": 160,
      "Local_Language_Achievement": 220,
      "Local_Language_Comment": 200,
      "CPA_HW": 100,
      "CPA_BOT": 100,
      "CPA_MOT": 100,
      "CPA_EOT": 100,
      "CPA_Achievement": 160,
      "CPA_Comment": 140,
      "Total_HW": 100,
      "Total_BOT": 100,
      "Total_MOT": 100,
      "Total_EOT": 100,
      "Total_Achievement": 160,
      "Total_Comment": 140,
      "Religious_Subject": 140,
      "Religious_HW": 120,
      "Religious_BOT": 120,
      "Religious_MOT": 120,
      "Religious_EOT": 120,
      "Religious_Achievement": 160,
      "Religious_Comment": 140,
      "PE_HW": 100,
      "PE_BOT": 100,
      "PE_MOT": 100,
      "PE_EOT": 100,
      "PE_Achicevement": 160,
      "PE_Comment": 140,
      "Science_HW": 100,
      "Science_BOT": 100,
      "Science_MOT": 110,
      "Science_EOT": 100,
      "Science_Comment": 140,
      "SST_HW": 100,
      "SST_BOT": 100,
      "SST_MOT": 100,
      "SST_EOT": 100,
      "SST_Comment": 120,
      "Music_HW": 100,
      "Music_BOT": 100,
      "Music_MOT": 100,
      "Music_EOT": 100,
      "Music_Comment": 120,
      "Writing_HW": 100,
      "Writing_BOT": 100,
      "Writing_MOT": 100,
      "Writing_EOT": 100,
      "Writing_Comment": 140,
      "Division_HW": 100,
      "Division_BOT": 100,
      "Division_MOT": 100,
      "Division_EOT": 100,
      "Division_Comment": 140,
      "Blank_HW": 100,
      "Blank_BOT": 100,
      "Blank_MOT": 100,
      "Blank_EOT": 100,
      "Blank_Comment": 120,
      "Fees_Balance": 140,
      "Fees_Day": 140,
      "Fees_Boarder": 140,
      "Pupil_Conduct": 200,
      "General_Conduct": 200,
      "Class_Teacher_Comment": 200,
      "Class_Teacher_Name": 200,
      "Class_Teacher_Signature": 200,
      "Head_Teacher_Comment": 200,
      "Head_Teacher_Name": 200,
      "Head_Teacher_Signature": 200,
      "Balance_Term": 200,
      "Next_Term_Fees": 200,
      "Requirements": 200,
      "Next_Term_Begins": 200,
      "Next_Term_Ends": 200
    };
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
            obj["width"] = columnWidths[header];
            return obj;
          });
          tableHeaders.unshift({
            field: 'actions',
            headerName: 'Actions',
            width: 170,
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

    const clearTableData = () => {
      setData([]);
      setColumns([]);
    };

    if (rows.length > 0) {
      downloadAllFiles(data);
    }
    eventBus.on('reportTypeEvent', clearTableData);
    return () => {
      eventBus.off('reportTypeEvent', clearTableData);
    };
  }, [selectedFile, rows, onTableDataChange]);

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