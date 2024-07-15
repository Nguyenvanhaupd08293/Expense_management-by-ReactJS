import React from 'react';
import Sidebar from './layouts/sidebar';
import HomePage from './pages/home/HomePage';
const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        {/* Your main content goes here */}
        <HomePage></HomePage>
      </div>
    </div>
  );
};

export default App;
