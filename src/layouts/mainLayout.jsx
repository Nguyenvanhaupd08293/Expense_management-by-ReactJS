import React from 'react';
import Sidebar from './component/Slidebar';
import Topbar from './component/Topbar';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
  return (
      <div className="flex ">
      <Sidebar />
      <div className="flex-grow p-6">
        <Topbar/>
        <Outlet/>
      </div>
    </div>
  );
}

export default MainLayout;
