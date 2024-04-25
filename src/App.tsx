import React, { useState, useCallback } from 'react';
import UploadSheet from './components/UploadSheet';
import ResultsTable from './components/ResultsTable';
import './App.css';

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [rowsInTable, setRowsInTable] = useState<any[]>([]);

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
      console.log("Downloading all files")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="font-bold text-5xl mb-3">LAMPS report automation</h1>
        <UploadSheet onFileChange={handleFileChange} />
      </header>
      <section>
        <h2
          id="results-table"
          className="font-bold text-3xl my-3"
        >
          Results ({rowsInTable.length})
          <button onClick={() => downloadAllReports()} className="ml-6 text-sm text-green-400">Download all</button>
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
