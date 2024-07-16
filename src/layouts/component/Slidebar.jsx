import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white w-64">
      <div className="p-6">
       <Link to="" className="text-2xl font-bold mb-6 hover:text-white">Quản lý chi tiêu</Link>
        <ul className="p-6">
          <li className="mb-2">
            <Link to="/" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="fa fa-home"></span>
              <span className="ml-3">Trang chủ</span>
            </Link>
          </li>
          <li className="mb-2">
           <Link to="#" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="fa fa-calendar"></span>
              <span className="ml-3">Calendar</span>
            </Link>
          </li>
          <li className="mb-2">
           <Link to="/statistic" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="fa fa-file-text"></span>
              <span className="ml-3">Khoản chi phí</span>
            </Link>
          </li>
          <li className="mb-2">
           <Link to="/spending" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="fa fa-plus-square-o"></span>
              <span className="ml-3">Khoản thu nhập</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-6">
     <Link to="#" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="fa fa-sign-out"></span>
              <span className="ml-3">Log Out</span>
            </Link>
      </div>
    </div>
  );
};

export default Sidebar;