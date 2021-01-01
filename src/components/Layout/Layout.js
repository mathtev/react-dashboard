import React, { useState } from 'react'
import { Route, Switch } from 'react-router';

import Sidebar from '../Sidebar/Sidebar';
import Homepage from '../../pages/homepage/Homepage';
import About from '../../pages/about/About';
import Notifications from '../../pages/notifications/Notifications';
import Header from '../header/Header';

import styled from './Layout.module.scss'

const Layout = (props) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styled.root}>
      <Sidebar />
      <div className={styled.wrap}>
        <Header />
        <main>
          <Switch>
            <Route path="/app/main" component={Homepage} />
            <Route path="/app/sidebar" component={Sidebar} />
            <Route path="/app/about" component={About} />
            <Route path="/app/notifications" component={Notifications} />
          </Switch>
        </main>
      </div>
    </div>
  );
}



export default Layout;