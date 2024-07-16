import React from 'react';

const Topbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center">
        <input 
          type="text" 
          placeholder="Type to search..." 
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 10c0 1.38-.56 2.63-1.464 3.536A5.002 5.002 0 0113 15H6a2 2 0 01-2-2V9a2 2 0 012-2h.586a1 1 0 00.707-.293l1.414-1.414a1 1 0 01.707-.293H15a2 2 0 012 2v2z" />
          </svg>
        </button>
        <button className="relative">
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4M4 8h16M4 16h16" />
          </svg>
        </button>
        <button className="relative">
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
          </svg>
        </button>
        <div className="flex items-center">
          <img src="https://s120-ava-talk.zadn.vn/b/c/5/6/11/120/a2ae5f1e691355dc2c766a5824c6cafb.jpg" alt="User Avatar" className="w-10 h-10 rounded-full" />
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-700">Thomas Anree</p>
            <p className="text-xs text-gray-500">UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;