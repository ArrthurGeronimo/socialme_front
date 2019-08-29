import React from 'react';
import Navbar from './../../../Components/Layouts/Navbar';
import SidebarMessages from './../../../Components/Layouts/SidebarMessages';
import SidebarMessage from './../../../Components/Layouts/SidebarMessage';
import Sidebar from './../../../Components/Layouts/Sidebar';
import Content from './../../../Components/Layouts/Content';

export default function Home(props) {

  return (
    <>
      <Navbar props1={props} />
      <div class="pcoded-main-container">
        <div class="content-fluid">
            <div class="container">
              <div className="content-generic">
                <h1>Página Inicial</h1>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

/* 
<Navbar />
      <SidebarMessages />
      <SidebarMessage />
      <div class="pcoded-main-container">
        <Sidebar />
        <Content />
      </div>

*/