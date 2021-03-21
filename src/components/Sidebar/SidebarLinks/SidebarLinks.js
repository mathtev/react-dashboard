import React, { useState } from "react";
import cx from 'classnames';
import { Collapse } from 'reactstrap';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

import styled from './SidebarLinks.module.scss'
import Icon from '../../icon/Icon';

const SidebarLinks = (props) => {

  const [collapseOpen, setCollapseOpen] = useState(false);

  const { clsName, header, headerLink, glyph, collapseLinks } = props;
  if (!collapseLinks) {
    return (
      <li className={styled.sidebarItem}>
        <NavLink
          to={headerLink}
          activeClassName={styled.activeLink}
          exact
        >
          {glyph && <Icon glyph={glyph} />}
          {header}
        </NavLink>
      </li>
    );
  }
  return (
    <li className={styled.sidebarItem}>
      <button
        className={styled.collapseButton}
        onClick={() => setCollapseOpen(!collapseOpen)}
      >
        {glyph && < Icon glyph={glyph} />}
        {header}
        <span className={cx(styled.arrow, { [styled.arrowActive]: collapseOpen })} >
          <Icon glyph="leftarrow" />
        </span>
      </button>
      <Collapse className={styled.panel} isOpen={collapseOpen}>
        <ul>
          {collapseLinks &&
            collapseLinks.map(childLink => (
              <li key={childLink.name}>
                <NavLink
                  to={childLink.link}
                  className={styled.collapseLinks}
                  activeClassName={styled.activeChildLink}
                  exact
                  onClick={() => setCollapseOpen(true)}
                >
                  {childLink.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </Collapse>
    </li>
  )
}

SidebarLinks.propTypes = {
  clsName: PropTypes.string,
  header: PropTypes.node.isRequired,
  headerLink: PropTypes.string,
  glyph: PropTypes.string,
  collapseLinks: PropTypes.array,
};

SidebarLinks.defaultProps = {
  clsName: '',
  header: null,
  headerLink: null,
  glyph: null,
  collapseLinks: null,
};

export default SidebarLinks;