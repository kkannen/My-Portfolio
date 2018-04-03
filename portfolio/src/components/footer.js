import React, { Component } from 'react';
import '../portfolio.css';
import '../styleSheets/footer.css'



class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a className = 'iconContainer' href = {this.props.link} target = '_blank'>
          <div className = 'lilDot'></div>
          <div className = 'footIcon' id = {this.props.id}></div>
        </a>
      </div>
    );
  }
}

export default Footer;
