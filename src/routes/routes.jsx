import React, { useEffect } from 'react';
import MainLayout from '../layouts/mainLayout';
import HomePage from '../pages/home/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import SpendCate from '../pages/spending/component/SpendCate';
import NotFoundPage from '../pages/notfound/NotFound';
import IncomeCate from '../pages/spending/component/IncomeCate';

// Define the clientRouter array with routes
const clientRouter = [
  {
    path: '/statistic',
    element: SpendCate,
    title: 'Báo cáo thống kê',
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
];

export default function AppRouter() {
  const location = useLocation();

  useEffect(() => {
    const route = clientRouter.find(route => {
      const routePath = route.path.replace(/:\w+/g, ''); // Remove dynamic segments
      return location.pathname.startsWith(routePath);
    });
    if (route && route.title) {
      document.title = route.title;
    }
  }, [location]);

  return (
    <Routes>
      <Route element={<MainLayout/>}>
        {clientRouter.map(route => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
