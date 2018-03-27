import React, { Component } from 'react';
import '../portfolio.css';
import '../styleSheets/portPieces.css'

class PortPieces extends Component {

  render() {
    return (
      <div id = {this.props.id} className = 'portfolioPiece'>
        <div className = "portOverlay">
          <div className = "portText">
            <h2 className = "portTitle">{this.props.title}</h2>
            <p className = "portDescription">{this.props.description}</p>
          </div>
          <a className = "portLink" href={this.props.link} target="_blank">CODEPEN</a>
        </div>
      </div>
    );
  }
}

export default PortPieces;
