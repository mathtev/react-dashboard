import React from 'react'
import cx from 'classnames';
import { Collapse } from 'reactstrap';
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
      isOpen: false,
    };
  }

  render() {
    const { clsName, header, headerLink, glyph, collapseLinks } = this.props;
    const { isOpen: isOpen } = this.state;
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
          onClick={() => this.setState({ isOpen: !isOpen })}
        >
          {glyph && <Icon glyph={glyph} />}
          {header}
          <span className={cx(styled.arrow, { [styled.arrowActive]: isOpen })} >
            <Icon glyph="leftarrow" />
          </span>
        </button>
        <Collapse className={styled.panel} isOpen={isOpen}>
          <ul>
            {collapseLinks &&
              collapseLinks.map(childLink => (
                <li key={childLink.name}>
                  <NavLink
                    to={childLink.link}
                    className={styled.collapseLinks}
                    activeClassName={styled.activeChildLink}
                    exact
                    onClick={() =>
                      this.setState({
                        isOpen: true,
                      })
                    }
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
}


export default SidebarLinks;