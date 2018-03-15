import React, { Component } from 'react';
import '../portfolio.css';
import '../styleSheets/navigation.css'

class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <div className = 'brand'>
          <h3>Krista Kannen</h3>
        </div>
        <div className = 'linksContainer'>
          <div><a className = 'navLink' href = '#'>HOME</a></div>
          <div><a className = 'navLink' href = '#'>PORTFOLIO</a></div>
          <div><a className = 'navLink' href = '#'>ABOUT</a></div>
        </div>
      </div>
    );
  }
}

export default NavBar;
