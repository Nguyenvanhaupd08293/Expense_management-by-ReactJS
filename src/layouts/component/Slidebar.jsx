import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Sidebar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!Cookies.get('token');

  const handleLogout = () => {
    // Xóa token từ cookie
    Cookies.remove('token');
    Cookies.remove('username');
    // Chuyển hướng đến trang đăng nhập
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white w-64">
      <div className="p-6 sticky z-40 top-0">
        <Link to="/" className="text-2xl font-bold mb-6 hover:text-white">Quản lý chi tiêu</Link>
        <ul className="p-6 mt-10">
          <li className="mb-2">
            <Link to="/homepage" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="fa fa-home"></span>
              <span className="ml-3">Trang chủ</span>
            </Link>
          </li> 
          <li className="mb-2">
            <Link to="/listspend" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="fa fa-file-text"></span>
              <span className="ml-3">Khoản chi phí</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/listincome" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="fa fa-plus-square-o"></span>
              <span className="ml-3">Khoản thu nhập</span>
            </Link>
          </li>
        </ul>
        {isLoggedIn && (
          <div className="p-6">
            <button onClick={handleLogout} className="flex items-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg">
              <span className="fa fa-sign-out"></span>
              <span className="ml-3">Log Out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
