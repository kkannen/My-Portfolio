import React, { Component } from 'react';
import '../portfolio.css';
import '../styleSheets/portPieces.css'

class PortPieces extends Component {
  render() {
    return (
      <div className="portPieces">
        <h1>port pieces</h1>
        <div className = 'gallery'>
          <div className = 'portfolioPiece'></div>
          <div className = 'portfolioPiece'></div>
          <div className = 'portfolioPiece'></div>
          <div className = 'portfolioPiece'></div>
          <div className = 'portfolioPiece'></div>
          <div className = 'portfolioPiece'></div>
        </div>
      </div>
    );
  }
}

export default PortPieces;
