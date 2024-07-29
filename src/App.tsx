import React, { useState, useEffect, useCallback } from 'react';
import UploadSheet from './components/UploadSheet';
import ResultsTable from './components/ResultsTable';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import eventBus from './utils/eventBus';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import './App.css';

const StyledButton = styled(Button)({
  backgroundColor: '#AC4888',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#922a71',
  },
});

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [rowsInTable, setRowsInTable] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleFileChange = (file: File) => {
    setSelectedFile(file);
    // Scroll to the ResultsTable section
    const resultsTableSection = document.getElementById('results-table');
    if (resultsTableSection) {
      resultsTableSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTableDataChange = useCallback((data: any[]) => {
    setRowsInTable(data);
  }, []);

  const downloadAllReports = () => {
    if (rowsInTable.length > 0) {
      eventBus.emit("startDownloadAllReports");
    }
  }

  useEffect(() => {
    eventBus.on('reportTypeEvent', () => {
      setRowsInTable([]);
    });
    eventBus.on('showLoader', (trigger: boolean) => {
      console.warn("This was triggered!");
      setOpen(trigger);
    });
    return () => {
      eventBus.off('reportTypeEvent', () => {
        setRowsInTable([]);
      });
      eventBus.off('showLoader', (trigger: boolean) => {
        setOpen(trigger);
      });
    };
  }, [setOpen, setRowsInTable]);

  return (
    <div className="App">
      <Backdrop
        sx={{ color: '#AC4888', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <header className="App-header">
        <h1 className="font-bold text-5xl mb-3 font-sans">LAMPS report automation</h1>
        <UploadSheet onFileChange={handleFileChange} />
      </header>
      <section>
        <h2
          id="results-table"
          className="font-bold text-3xl my-3"
        >
          Results ({rowsInTable.length})
          &nbsp;
          <StyledButton variant="contained" onClick={downloadAllReports}>
            Download All
          </StyledButton>
        </h2>
        <ResultsTable
          selectedFile={selectedFile}
          onTableDataChange={handleTableDataChange}
        />
      </section>
    </div>
  );
}

export default App;
