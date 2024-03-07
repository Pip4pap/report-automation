import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadSheet from './components/UploadSheet';
import ResultsTable from './components/ResultsTable';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="font-bold text-5xl mb-3">LAMPS report automation</h1>
        <Router>
          <Routes>
            <Route path="/" element={<UploadSheet/>} />
          </Routes>
        </Router>
      </header>
      <section>
        <h2 className="font-bold text-3xl my-3">Results</h2>
        <ResultsTable />
      </section>
    </div>
  );
}

export default App;
