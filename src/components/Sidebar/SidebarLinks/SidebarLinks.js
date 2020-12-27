import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

import styled from './SidebarLinks.module.scss'
import Icon from '../../icon/Icon';

class SidebarLinks extends React.Component {

    static propTypes = {
        clsName: PropTypes.string,
        header: PropTypes.node.isRequired,
        headerLink: PropTypes.string,
        glyph: PropTypes.string,
        collapseLinks: PropTypes.array,
    };

    static defaultProps = {
        clsName: '',
        header: null,
        headerLink: null,
        glyph: null,
        collapseLinks: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            collapseOpen: false,
        };
    }

    render() {
        const { clsName, header, headerLink, glyph, collapseLinks } = this.props;
        const { collapseOpen } = this.state;
        if (!collapseLinks) {
            return (
                <li className={styled.SidebarItem}>
                    <NavLink to={headerLink} exact>
                        {glyph && <Icon glyph={glyph} />}
                        <span>{header}</span>
                    </NavLink>
                </li>
            );
        }

    }
}


export default SidebarLinks;