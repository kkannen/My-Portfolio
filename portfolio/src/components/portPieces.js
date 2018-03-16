import React, { Component } from 'react';
import '../portfolio.css';
import '../styleSheets/portPieces.css'

class PortPieces extends Component {

  state = {
    portfolioList: ['calculator', 'tic-tac-toe', 'nasa', 'welcome', 'driftwood', 'airplane']
  }

  render() {
    return (
      <div className="portPieces">
        <h1>port pieces</h1>
        <div className = 'gallery'>
          {this.state.portfolioList.map((item, k) => {
            return(
              <div key = {k} id = {item} className = 'portfolioPiece'></div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default PortPieces;
