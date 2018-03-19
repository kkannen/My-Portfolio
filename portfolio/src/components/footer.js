import React, { Component } from 'react';
import '../portfolio.css';
import '../styleSheets/footer.css'

class Footer extends Component {
  state = {
    icons: ['https://github.com/kkannen/web-workbook/blob/gh-pages/07week/Checkpoint02/img/homeDark.png?raw=true', 'https://github.com/kkannen/web-workbook/blob/gh-pages/07week/Checkpoint02/img/githubDark.png?raw=true', 'https://github.com/kkannen/web-workbook/blob/gh-pages/07week/Checkpoint02/img/codepenDark.png?raw=true', 'https://github.com/kkannen/web-workbook/blob/gh-pages/07week/Checkpoint02/img/twitterDark.png?raw=true', 'https://github.com/kkannen/web-workbook/blob/gh-pages/07week/Checkpoint02/img/linkedinDark.png?raw=true']
  }

  render() {
    return (
      <div className="footer">
        {this.state.icons.map((icon, l) => {
            return (
              <div className = 'iconContainer'>
                <div className = 'lilDot'></div>
                <img key = {l} className = 'footIcon' src = {icon}/>
              </div>
            )
        })}
      </div>
    );
  }
}

export default Footer;
