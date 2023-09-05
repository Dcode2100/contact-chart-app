
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className='app h-full w-full '>
      <Router>
        <div className="flex h-full w-full relative">
          <Sidebar />
          <div className="h-full relative w-full">
            <AppRoutes />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
