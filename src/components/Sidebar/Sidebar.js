import React from 'react'
import { Link } from 'react-router-dom';

import SidebarLinks from './SidebarLinks/SidebarLinks'
import Icon from '../icon/Icon'

import styled from './Sidebar.module.scss'


const Sidebar = () => {
  return (
    <nav className={styled.root}>
      <header className={styled.logo}>
        <Link to="/app/main">
          <Icon glyph="logo" />
        </Link>
      </header>
      <ul className={styled.items}>
        <SidebarLinks
          header="homepage"
          headerLink="/app/main"
          glyph="homepage"
        />
        <SidebarLinks
          header="notifications"
          headerLink="/app/notifications"
          glyph="notifications"
        />
        <SidebarLinks
          header="tables"
          headerLink="/app/tables"
          glyph="notifications"
        />
        <SidebarLinks
          header="users"
          headerLink="/app/users"
          glyph="notifications"
        />
        <SidebarLinks
          header="components"
          headerLink="/app/components"
          collapseLinks={[
            {
              name: 'Buttons',
              link: '/app/components/buttons',
            },
            {
              name: 'Calendar',
              link: '/app/components/charts',
            },
            {
              name: 'Icons',
              link: '/app/components/icons',
            },
            {
              name: 'Maps',
              link: '/app/components/maps',
            },
          ]}
          glyph="notifications"
        />
      </ul>
    </nav>
  )
}

export default Sidebar
