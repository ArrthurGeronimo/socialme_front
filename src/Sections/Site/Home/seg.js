import React from 'react';
import Navbar from './../../../Components/Layouts/Navbar';
import SidebarMessages from './../../../Components/Layouts/SidebarMessages';
import SidebarMessage from './../../../Components/Layouts/SidebarMessage';
import Sidebar from './../../../Components/Layouts/Sidebar';
import Content from './../../../Components/Layouts/Content';

export default function Home() {

  return (
    <>
      <Navbar />
      <SidebarMessages />
      <SidebarMessage />
      <div class="pcoded-main-container">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}