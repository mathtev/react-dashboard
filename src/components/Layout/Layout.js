import React from 'react'
import { Route } from 'react-router';

import Sidebar from '../Sidebar/Sidebar';
import Homepage from '../../pages/homepage/Homepage';
import About from '../../pages/about/About';
import Notifications from '../../pages/notifications/Notifications';


class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false,
    };
  }

  render() {
    return (
      <div>
        <Sidebar />
        <Route path="/app/main" component={Homepage} />
        <Route path="/app/sidebar" component={Sidebar} />
        <Route path="/app/about" component={About} />
        <Route path="/app/notifications" component={Notifications} />
      </div>
    );
  }
}


export default Layout;