import React, {useEffect, useState} from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as XLSX from 'xlsx';

interface ResultsTableProps {
  selectedFile: File | null;
  onTableDataChange: (data: any[]) => void;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ selectedFile, onTableDataChange }) => {
  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<GridColDef[]>([]);

  // Define handlePreview function to handle the Preview button click
  const handlePreview = (row: any) => {
    // Handle preview for the selected row
    console.log('Preview:', row);
    // Add your preview logic here
  };

  // Define handleDownload function to handle the Download button click
  const handleDownload = (row: any) => {
    // Handle download for the selected row
    console.log('Download:', row);
    // Add your download logic here
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
            ),
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
    </div>
  )
}

export default ResultsTable;