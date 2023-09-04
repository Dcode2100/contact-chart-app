// src/App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <div className="flex h-full w-full relative">
        <Sidebar />
        <div className="flex-grow ">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
