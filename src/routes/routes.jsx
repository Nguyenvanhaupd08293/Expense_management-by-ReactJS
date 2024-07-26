import React, { useEffect } from 'react';
import MainLayout from '../layouts/mainLayout';
import HomePage from '../pages/home/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import SpendCate from '../pages/spending/component/SpendCate';
import NotFoundPage from '../pages/notfound/NotFound';
import IncomeCate from '../pages/spending/component/IncomeCate';
import Login from '../layouts/auth/login';
import Register from '../layouts/auth/register';
import chartAll from '../pages/chart/chartAll';
import listSpend from '../pages/spending/Spendcate/listSpend';
import listIncome from '../pages/spending/Incomecate/listIncome';
const clientRouter = [
  {
    path: '/statistic',
    element: SpendCate,
    title: 'Báo cáo thống kê',
  },
  {
    path: '/listspend',
    element: listSpend,
    title: 'thống kê khoản chi',
  },
  {
    path: '/listincome',
    element: listIncome,
    title: 'thông kê khoản thu',
  },
  {
    path: '/spending',
    element: IncomeCate,
    title: 'Quản lý chi tiêu',
  },
  {
    path: '/',
    element: HomePage,
    title: 'Trang chủ',
  },
  {
    path: '/login',
    element: Login,
    title: 'Đăng nhập',
  },
  {
    path: '/register',
    element: Register,
    title: 'Đăng ký',
  },
  {
    path: '/chart',
    element: chartAll,
    title: 'Biểu đồ',
  },
];

export default function AppRouter() {
  const location = useLocation();

  useEffect(() => {
    const route = clientRouter.find(route => {
      const routePath = route.path.replace(/:\w+/g, ''); // Loại bỏ các đoạn động
      return location.pathname.startsWith(routePath);  // Kiểm tra đường dẫn hiện tại có bắt đầu bằng đường dẫn của route không
    });
    if (route && route.title) {
      document.title = route.title;  // Thiết lập tiêu đề của trang dựa trên route được chọn
    }
  }, [location]);

  return (
    <Routes>
      <Route element={<MainLayout/>}>
        {clientRouter.map(route => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
      </Route>
      <Route path="*" element={<NotFoundPage />} />  // Route này xử lý khi không có route nào khớp
    </Routes>
  );
}
