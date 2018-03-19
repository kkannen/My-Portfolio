import React, { Component } from 'react';
import '../portfolio.css';
import '../styleSheets/header.css'


class Header extends Component {
  renderStars = () => {
    for (let x = 0; x < 1000; x++) {
      return <div className = 'star'></div>

    }
  }

  render() {
    return (
      <div className="header">
        {this.renderStars()}
        <a><div className = 'container'>
          <div id = 'dot'></div>
          <h1>Krista Kannen</h1>
        </div></a>
      </div>
    );
  }
}

export default Header;
