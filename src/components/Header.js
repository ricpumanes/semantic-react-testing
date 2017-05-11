import React from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

import logo from '../../public/logo.svg';

export default class Header extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Menu pointing secondary stackable>
          <Menu.Item>
            <img src={logo} />
          </Menu.Item>
          <Menu.Item name='home' active={location.pathname === "/"}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item name='songs' active={location.pathname === "/songs"}>
            <Link to="/songs">Songs</Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
