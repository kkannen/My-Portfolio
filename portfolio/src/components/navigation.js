

import React, { Component } from 'react';
import '../portfolio.css';
import '../styleSheets/navigation.css'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="navBar">
        <h3>Krista Kannen</h3>
        <div className = 'linksContainer'>
          <div><a className = 'navLink' href = '#home'>HOME</a></div>
          <div><a className = 'navLink' href = '#portfolio'>PORTFOLIO</a></div>
          <div><a className = 'navLink' href = '#about'>ABOUT</a></div>
        </div>
      </div>
    );
  }
}

export default NavBar;
