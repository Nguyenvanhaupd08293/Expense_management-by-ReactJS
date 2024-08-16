import React, { useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import MainLayout from '../layouts/mainLayout';
import HomePage from '../pages/home/HomePage';
import SpendCate from '../pages/spending/component/SpendCate';
import IncomeCate from '../pages/spending/component/IncomeCate';
import NotFoundPage from '../pages/notfound/NotFound';
import Register from '../pages/auth/register';
import ListSpend from '../pages/spending/Spendcate/listSpend'; 
import ListIncome from '../pages/spending/Incomecate/listIncome'; 
import Login from '../pages/auth/login';
import EditSpend from '../pages/spending/Spendcate/editSpend'; 
import { toast } from 'react-toastify';

// Tạo PrivateRoute
const PrivateRoute = ({ element }) => {
    const token = Cookies.get('token');
    if (!token) {
        toast.error('Vui lòng đăng nhập!');
        return <Navigate to="/" />;
    }
    return element;
};

const clientRouter = [
  {
    path: '/statistic',
    element: <SpendCate />,
    title: 'Báo cáo thống kê',
    protected: true,
  },
  {
    path: '/edit/spending/:id',
    element: <EditSpend />,
    title: 'Chỉnh sửa khoản chi',
    protected: true,
  },
  {
    path: '/listspend',
    element: <ListSpend />,
    title: 'Thống kê khoản chi',
    protected: true,
  },
  {
    path: '/listincome',
    element: <ListIncome />,
    title: 'Thống kê khoản thu',
    protected: true,
  },
  {
    path: '/spending',
    element: <SpendCate />,
    title: 'Quản lý chi tiêu',
    protected: true,
  },
  {
    path: '/income',
    element: <IncomeCate />,
    title: 'Quản lý thu nhập',
    protected: true,
  },
  {
    path: '/homepage',
    element: <PrivateRoute element={<HomePage />} />,
    title: 'Trang chủ',
    protected: false,
  },
  {
    path: '/',
    element: <Login />,
    title: 'Đăng nhập',
    protected: false,
  },
  {
    path: '/register',
    element: <Register />,
    title: 'Đăng ký',
    protected: false,
  },
];

export default function AppRouter() {
  const location = useLocation(); // Lấy thông tin vị trí hiện tại của URL

  useEffect(() => {
      // Tìm route hiện tại trong danh sách clientRouter
      const route = clientRouter.find(route => location.pathname.startsWith(route.path));
      if (route && route.title) {
          // Nếu route có thuộc tính title, đặt tiêu đề trang
          document.title = route.title;
      }
  }, [location]); // useEffect chạy lại khi location thay đổi

  return (
      <Routes>
          {/* MainLayout sẽ là layout chung cho tất cả các route bên trong */}
          <Route element={<MainLayout />}>
              {clientRouter.map(route => (
                  <Route
                      key={route.path} // Đặt key để React có thể quản lý hiệu quả
                      path={route.path} // Đường dẫn của route
                      element={
                          route.protected
                              ? <PrivateRoute element={route.element} /> // Nếu route được bảo vệ, dùng PrivateRoute
                              : route.element // Nếu không, render trực tiếp element của route
                      }
                  />
              ))}
          </Route>
          {/* Đường dẫn mặc định khi không tìm thấy route phù hợp */}
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}
