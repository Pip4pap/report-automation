import React, { useEffect, useState, useCallback } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import PreviewPopup from './PreviewPopup';
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import eventBus from '../utils/eventBus';
import * as XLSX from 'xlsx';

interface ResultsTableProps {
  selectedFile: File | null;
  onTableDataChange: (data: any[]) => void;
}

interface ColumnWidths {
  [key: string]: number;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ selectedFile, onTableDataChange }) => {
  const [data, setData] = useState<any[]>([]);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [headerErrors, setHeaderErrors] = useState<string[]>([]);
  const [missingHeaders, setMissingHeaders] = useState<string[]>([]);

  // Define expected headers based on the application requirements
  const getExpectedHeaders = () => {
    const baseHeaders = [
      'Name', 'Class', 'Date', 'Term', 'Enrolment', 'Age', 'Sex', 'LIN'
    ];
    
    const subjectColumns = ['HW', 'BOT', 'MOT', 'EOT'];
    const subjectCommentColumns = ['Achievement', 'Comment'];
    
    // Subject-specific headers for P4-P7 reports
    const subjectHeaders = [
      'English', 'Math', 'Science', 'SST', 'Music', 'Writing'
    ];
    
    // Thematic headers for P1-P3 reports
    const thematicHeaders = [
      'Literacy_I', 'Literacy_II', 'Local_Language', 'CPA', 'Religious', 'PE'
    ];
    
    const additionalHeaders = [
      'Division_HW', 'Division_BOT', 'Division_MOT', 'Division_EOT',
      'Total_HW', 'Total_BOT', 'Total_MOT', 'Total_EOT', 'Total_Achievement', 'Total_Comment',
      'Fees_Balance', 'Fees_Day', 'Fees_Boarder',
      'Pupil_Conduct', 'General_Conduct',
      'Class_Teacher_Comment', 'Class_Teacher_Name', 'Class_Teacher_Signature',
      'Head_Teacher_Comment', 'Head_Teacher_Name', 'Head_Teacher_Signature',
      'Balance_Term', 'Next_Term_Fees', 'Requirements',
      'Next_Term_Begins', 'Next_Term_Ends', 'Religious_Subject'
    ];
    
    let expectedHeaders = [...baseHeaders];
    
    // Add subject-based headers
    subjectHeaders.forEach(subject => {
      subjectColumns.forEach(column => {
        expectedHeaders.push(`${subject}_${column}`);
      });
      subjectCommentColumns.forEach(column => {
        expectedHeaders.push(`${subject}_${column}`);
      });
    });
    
    // Add thematic headers
    thematicHeaders.forEach(subject => {
      subjectColumns.forEach(column => {
        expectedHeaders.push(`${subject}_${column}`);
      });
      subjectCommentColumns.forEach(column => {
        expectedHeaders.push(`${subject}_${column}`);
      });
    });
    
    expectedHeaders.push(...additionalHeaders);
    
    return expectedHeaders;
  };

  const validateHeaders = useCallback((actualHeaders: string[]) => {
    const expectedHeaders = getExpectedHeaders();
    const errors: string[] = [];
    const missing: string[] = [];
    
    // Check for critical missing headers (always required)
    const criticalHeaders = ['Name', 'Class', 'Date', 'Term'];
    criticalHeaders.forEach(header => {
      if (!actualHeaders.includes(header)) {
        missing.push(header);
        errors.push(`Critical header missing: "${header}"`);
      }
    });
    
    // Check for potential typos in actual headers
    actualHeaders.forEach(actualHeader => {
      if (!expectedHeaders.includes(actualHeader)) {
        // Try to find similar headers (simple similarity check)
        const similar = expectedHeaders.find(expected => 
          expected.toLowerCase().includes(actualHeader.toLowerCase()) ||
          actualHeader.toLowerCase().includes(expected.toLowerCase()) ||
          levenshteinDistance(expected.toLowerCase(), actualHeader.toLowerCase()) <= 2
        );
        
        if (similar) {
          errors.push(`Header "${actualHeader}" might be misspelled. Did you mean "${similar}"?`);
        } else {
          errors.push(`Unexpected header: "${actualHeader}"`);
        }
      }
    });
    
    return { errors, missing };
  }, []);
  
  // Simple Levenshtein distance function for similarity checking
  const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  };

  // Define handlePreview function to handle the Preview button click
  const handlePreview = (row: any) => {
    setOpenDialog(true);
    setSelectedRow(row);
  };

  // Define handleDownload function to handle the Download button click
  const handleDownload = (row: any) => {
    setSelectedRow(row);
    setOpenDialog(true);
    eventBus.emit("showLoader", true);
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
          pdf.save(`${row.Name}.pdf`);
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
      }
    }, 1000);
    eventBus.emit("showLoader", false);
  };

  const generatePDF = useCallback((row: any): Promise<Blob> => {
    return new Promise<Blob>((resolve, reject) => {
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
              const pdfBlob = pdf.output('blob');

              resolve(pdfBlob);
            })
            .catch(function (error) {
              console.error('oops, something went wrong!', error);
              reject(error);
            });
        } else {
          reject(new Error('Container not found'));
        }
      }, 1000);
    });
  }, []);

  const downloadAllFiles = useCallback(async (rows: any[]) => {
    eventBus.emit("showLoader", true);
    const zip = new JSZip();
    let count = 0;

    for (const row of rows) {
      try {
        const pdfBlob = await generatePDF(row);
        zip.file(`${row.Name}.pdf`, pdfBlob);
        count++;
      } catch (error) {
        console.error('Error generating PDF for row', row, error);
      }
    }

    if (rows.length > 0) {
      if (count === rows.length) {
        zip.generateAsync({ type: 'blob' }).then((content) => {
          saveAs(content, `${rows[0].Class} reports.zip`);
        });
      }
    } else {
      console.error("Download function cannot read table rows");
    }

    eventBus.emit("showLoader", false);
  }, [generatePDF]);

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
    let rowData: any[];
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
          
          // Validate headers
          const { errors, missing } = validateHeaders(headers);
          setHeaderErrors(errors);
          setMissingHeaders(missing);
          
          tableData = tableData.map((row: any, index: number) => {
            const obj: any = {};
            headers.forEach((header: string, index: number) => {
              obj[header] = row[index];
            });
            obj["id"] = index;
            return obj
          });
          rowData = tableData;
          setData(tableData);
          onTableDataChange(tableData);

          // Set headers
          const tableHeaders = headers.map((header: string) => {
            const obj: any = {};
            obj["field"] = header;
            obj["headerName"] = header;
            obj["width"] = columnWidths[header];
            return obj;
          });
          tableHeaders.unshift({
            field: 'actions',
            headerName: 'Actions',
            width: 180,
            renderCell: (params: any) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <ButtonGroup size="small" variant="text" aria-label="Basic button group">
                  <Button onClick={() => handlePreview(params.row)}>Preview</Button>
                  <Button onClick={() => handleDownload(params.row)}>Download</Button>
                </ButtonGroup>
              </Box>
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
      setHeaderErrors([]);
      setMissingHeaders([]);
    };
    const handleDownloadAllEvent = () => {
      downloadAllFiles(rowData);
    };

    eventBus.on('startDownloadAllReports', handleDownloadAllEvent);
    eventBus.on('reportTypeEvent', clearTableData);
    return () => {
      eventBus.off('reportTypeEvent');
      eventBus.off('startDownloadAllReports', handleDownloadAllEvent);
    };
  }, [selectedFile, onTableDataChange, downloadAllFiles, validateHeaders]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      {/* Header Validation Warnings */}
      {(headerErrors.length > 0 || missingHeaders.length > 0) && (
        <Box sx={{ mb: 2, width: '100%' }}>
          <Alert
            severity="warning"
            sx={{
              width: '100%',
              '& .MuiAlert-message': {
                flex: 1,
                width: '100%',
                textAlign: 'center'
              }
            }}
          >
            <AlertTitle sx={{ textAlign: 'center' }}>Excel Header Issues Detected</AlertTitle>
            {missingHeaders.length > 0 && (
              <div style={{ width: '100%' }}>
                <strong>Missing Critical Headers:</strong>
                <ul style={{ margin: '8px 0', paddingLeft: 0, listStylePosition: 'inside' }}>
                  {missingHeaders.map((header, index) => (
                    <li key={index}>{header}</li>
                  ))}
                </ul>
              </div>
            )}
            {headerErrors.length > 0 && (
              <div style={{ width: '100%' }}>
                <strong>Header Issues:</strong>
                <ul style={{ margin: '8px 0', paddingLeft: 0, listStylePosition: 'inside' }}>
                  {headerErrors.slice(0, 10).map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                  {headerErrors.length > 10 && (
                    <li>... and {headerErrors.length - 10} more issues</li>
                  )}
                </ul>
              </div>
            )}
            <div style={{ marginTop: '12px', fontSize: '0.9em' }}>
              <strong>Tip:</strong> <i>Make sure your Excel file headers match exactly what the system expects.</i> 
              <i>Check spelling, capitalization, and underscores in header names.</i>
            </div>
          </Alert>
        </Box>
      )}
      
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