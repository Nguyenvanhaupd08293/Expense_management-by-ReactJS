import React from 'react';
import Sidebar from './layouts/sidebar';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        {/* Your main content goes here */}
        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
      </div>
    </div>
  );
};

export default App;
