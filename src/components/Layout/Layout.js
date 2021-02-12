import React, { useState } from 'react'
import { Route, Switch } from 'react-router';
import cx from 'classnames';

import Sidebar from '../Sidebar/Sidebar';
import Dashboard from '../../pages/dashboard/Dashboard';
import About from '../../pages/about/About';
import Notifications from '../../pages/notifications/Notifications';
import Header from '../Header/Header';
import Tables from '../../pages/tables/Tables';

import styled from './Layout.module.scss'

const Layout = (props) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(prevState => !prevState);

  return (
    <div className={styled.root}>
      <Sidebar />
      <div className={cx(styled.wrap, {[styled.sidebarOpened]: sidebarOpen})}>
        <Header toggleSidebar={toggleSidebar} />
        <main className={styled.content}>
          <Switch>
            <Route path="/app/main" component={Dashboard} />
            <Route path="/app/about" component={About} />
            <Route path="/app/notifications" component={Notifications} />
            <Route path="/app/tables" component={Tables} />
          </Switch>
        </main>
      </div>
    </div>
  );
}



export default Layout;