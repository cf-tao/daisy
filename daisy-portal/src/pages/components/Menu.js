/* jshint esversion: 6 */

import { Menu, Icon } from 'antd';
import React, { Component } from 'react';
import styles from './Menu.css';

const data = [
  { key: "home", name: "Home", type: "home" },
  { key: "app", name: "App Store", type: "appstore" },
  { key: "movie", name: "Movie" },
  { key: "drama", name: "Drama" },
  { key: "documentation", name: "Documentation", type: 'book' },
  { key: "about", name: "About", type: 'info-circle' }
]

class MainMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 'mail'
    }; 
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu className={styles.menu}
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        {
          data.map(item =>
            <Menu.Item key={item.key}>
              {item.type != null ? <Icon type={item.type} /> : null}
              {item.name}
            </Menu.Item>
          )}
      </Menu>
    )
  }
}

export default MainMenu;
