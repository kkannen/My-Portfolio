import React, { Component } from 'react';
import '../portfolio.css';
import '../styleSheets/header.css'


class Header extends Component {

  render() {
    return (
      <div className="header"  id = 'home'>
        <div className = 'layers'>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>

        <a><div className = 'container'>
          <div id = 'dot'></div>
          <h1>Krista Kannen</h1>
        </div></a>
      </div>
    );
  }
}

export default Header;
