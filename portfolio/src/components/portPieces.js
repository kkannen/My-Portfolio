import React, { Component } from 'react';
import '../portfolio.css';
import '../styleSheets/portPieces.css'

class PortPieces extends Component {

  state = {
    portfolioList: [
      ['calculator', 'CALCULATOR', 'A cute little calculating monster.', 'https://codepen.io/kkannen/full/WXOMgZ'],
      ['tic-tac-toe', 'TIC-TAC-TOE', 'tic-tac-toe game made using react', 'https://codepen.io/kkannen/'],
      ['nasa', 'NASA', 'Contact page for NASA', 'https://codepen.io/kkannen/full/JOpagY'],
      ['office', 'THE OFFICE', 'The Office themed clicker game', 'https://codepen.io/kkannen/'],
      ['driftwood', 'DRIFTWOOD', 'Remodel of the Driftwood Estate Winery site.', 'https://codepen.io/kkannen/full/vWdVEm'],
      ['airplane', 'UX ATLANTIC', 'Booking page for UX Atlantic Airline', 'https://codepen.io/kkannen/full/mqBOPo']
    ]
  }

  render() {
    return (
      <div className="portPieces">
        <h1>PORTFOLIO</h1> <hr/>
        <div className = 'gallery'>
          {this.state.portfolioList.map((itemArr, k) => {
            return(
              <div key = {k} id = {itemArr[0]} className = 'portfolioPiece'>
                <div className = "portOverlay">
                  <div className = "portText">
                    <h2 className = "portTitle">{itemArr[1]}</h2>
                    <p className = "portDescription">{itemArr[2]}</p>
                  </div>
                  <a className = "portLink" href={itemArr[3]} target="_blank">CODEPEN</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default PortPieces;
