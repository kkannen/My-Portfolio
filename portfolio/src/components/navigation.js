

import React, { Component } from 'react';
import '../portfolio.css';
import '../styleSheets/navigation.css'
import Scrollspy from 'react-scrollspy'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="navBar">
        <h3>Krista Kannen</h3>
        <Scrollspy className = 'linksContainer' items={['home', 'portfolio', 'astronomy', 'about']} currentClassName='scrolled'>
          <div><a className = 'navLink' href = '#home'>HOME</a></div>
          <div><a className = 'navLink' href = '#portfolio'>PORTFOLIO</a></div>
          <div><a className = 'navLink' href = '#astronomy'>ASTRONOMY</a></div>
          <div><a className = 'navLink' href = '#about'>ABOUT</a></div>
        </Scrollspy>
      </div>
    );
  }
}

export default NavBar;
