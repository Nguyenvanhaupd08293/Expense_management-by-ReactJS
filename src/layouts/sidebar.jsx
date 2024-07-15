import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
const Sidebar = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white w-64">
      <div className="p-6">
        <a href="" className="text-2xl font-bold mb-6 hover:text-white">Quản lý chi tiêu</a>
        <ul className="p-6">
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="fa fa-home"></span>
              <span className="ml-3">Trang chủ</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="fa fa-calendar"></span>
              <span className="ml-3">Calendar</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="fa fa-file-text"></span>
              <span className="ml-3">Báo cáo</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="fa fa-plus-square-o"></span>
              <span className="ml-3">Thu phí</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="p-6">
      <a href="#" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="fa fa-sign-out"></span>
              <span className="ml-3">Log Out</span>
            </a>
      </div>
    </div>
  );
};

export default Sidebar;
