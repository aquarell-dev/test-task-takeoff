import React, { FC } from 'react';
import NavigationBar from '../ui/Navbar';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <div className='h-screen w-full'>
      <NavigationBar/>
      <Outlet />
    </div>
  );
};

export default Layout;