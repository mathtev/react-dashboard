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
                    header="about"
                    headerLink="/app/about"
                    glyph="chart"
                />
                <SidebarLinks
                    header="notifications"
                    headerLink="/app/notifications"
                    glyph="notifications"
                />
                <SidebarLinks
                    header="tables"
                    headerLink="/#"
                    glyph="notifications"
                />
                <SidebarLinks
                    header="users"
                    headerLink="/app/users"
                    glyph="notifications"
                />
            </ul>
        </nav>
    )
}

export default Sidebar
