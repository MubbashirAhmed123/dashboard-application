import React from 'react';
import Dashboard from './components/Dashboard';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Dashboard />
    </div>
  );
}

export default App;
