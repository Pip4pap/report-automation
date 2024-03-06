import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadSheet from './pages/UploadSheet';
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
    </div>
  );
}

export default App;
