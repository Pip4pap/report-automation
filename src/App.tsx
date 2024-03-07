import React, { useState } from 'react';
import UploadSheet from './components/UploadSheet';
import ResultsTable from './components/ResultsTable';
import './App.css';

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
    // Scroll to the ResultsTable section
    const resultsTableSection = document.getElementById('results-table');
    if (resultsTableSection) {
      resultsTableSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          Results
        </h2>
        <ResultsTable selectedFile={selectedFile} />
      </section>
    </div>
  );
}

export default App;
