import React from 'react'
import { Link } from 'react-router-dom';

import SidebarLinks from './SidebarLinks/SidebarLinks'

import styled from './Sidebar.module.scss'


const Sidebar = () => {
    return (
        <nav className={styled.root}>
            <header>
                <Link to="/app/main">
                    to jest sidebar
                </Link>
            </header>
            <ul>
                <SidebarLinks
                    header="about"
                    headerLink="/app/about"
                />
                <SidebarLinks
                    header="notifications"
                    headerLink="/app/notifications"
                />
            </ul>
        </nav>
    )
}

export default Sidebar
