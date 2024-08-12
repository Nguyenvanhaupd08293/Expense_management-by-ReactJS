import React, { useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import MainLayout from '../layouts/mainLayout';
import HomePage from '../pages/home/HomePage';
import SpendCate from '../pages/spending/component/SpendCate';
import IncomeCate from '../pages/spending/component/IncomeCate';
import NotFoundPage from '../pages/notfound/NotFound';
import Register from '../pages/auth/register';
import ListSpend from '../pages/spending/Spendcate/listSpend'; // Chỉnh lại tên component
import ListIncome from '../pages/spending/Incomecate/listIncome'; // Chỉnh lại tên component
import Login from '../pages/auth/login';
import EditSpend from '../pages/spending/Spendcate/editSpend'; // Chỉnh lại tên component
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
    const location = useLocation();

    useEffect(() => {
        const route = clientRouter.find(route => location.pathname.startsWith(route.path));
        if (route && route.title) {
            document.title = route.title;
        }
    }, [location]);

    return (
        <Routes>
            <Route element={<MainLayout />}>
                {clientRouter.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            route.protected
                                ? <PrivateRoute element={route.element} />
                                : route.element
                        }
                    />
                ))}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
