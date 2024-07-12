import React from 'react';

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white w-64">
      <div className="p-6">
        <a href="" className="text-2xl font-bold mb-6 hover:text-white">TailAdmin</a>
        <ul>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="material-icons">dashboard</span>
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li className="mb-2">
            <span className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="material-icons">business</span>
              <span className="ml-3">eCommerce</span>
              <span className="ml-auto bg-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">Pro</span>
            </span>
            <ul className="pl-6">
              <li>
                <a href="#" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
                  <span className="ml-3">Analytics</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
                  <span className="ml-3">Marketing</span>
                  <span className="ml-auto bg-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">Pro</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
                  <span className="ml-3">CRM</span>
                  <span className="ml-auto bg-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">Pro</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
                  <span className="ml-3">Stocks</span>
                  <span className="ml-auto bg-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">Pro</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="material-icons">calendar_today</span>
              <span className="ml-3">Calendar</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="material-icons">person</span>
              <span className="ml-3">Profile</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="material-icons">task</span>
              <span className="ml-3">Task</span>
            </a>
          </li>
          {/* Add more items here */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
