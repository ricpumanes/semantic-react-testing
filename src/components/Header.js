import React from 'react';
import { Menu } from 'semantic-ui-react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' onClick={this.handleItemClick} />
          <Menu.Item name='songs' onClick={this.handleItemClick} />
        </Menu>
      </div>
    )
  }
}
