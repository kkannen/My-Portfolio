import React, { Component } from 'react';
import '../portfolio.css';
import '../styleSheets/footer.css'
import '../img/linkedinDark.png'


class Footer extends Component {
  state = {
    icons: [
      {
        idName: 'homeIcon',
        icon: 'https://github.com/kkannen/web-workbook/blob/gh-pages/07week/Checkpoint02/img/homeDark.png?raw=true',
        link: 'https://codepen.io/kkannen/'
      },
      {
        idName: 'githubIcon',
        icon: 'https://github.com/kkannen/web-workbook/blob/gh-pages/07week/Checkpoint02/img/githubDark.png?raw=true',
        link: 'https://github.com/kkannen'
      },
      {
        idName: 'codepenIcon',
        icon: 'https://github.com/kkannen/web-workbook/blob/gh-pages/07week/Checkpoint02/img/codepenDark.png?raw=true',
        link: 'https://codepen.io/kkannen/'
      },
      {
        idName: 'twitterIcon',
        icon: 'https://github.com/kkannen/web-workbook/blob/gh-pages/07week/Checkpoint02/img/twitterDark.png?raw=true',
        link: 'https://twitter.com/kkannencoding/'
      },
      {
        idName: 'linkedinIcon',
        icon: '../img/linkedinDark.png',
        link: 'https://www.linkedin.com/in/krista-kannen-6b1a4498/'
      }]

  }

  render() {
    return (
      <div className="footer">
        {this.state.icons.map((obj, index) => {
            return (
              <a className = 'iconContainer' href = {obj.link} target="_blank">
                <div className = 'lilDot'></div>
                <div key = {index} className = 'footIcon' id = {obj.idName}></div>
              </a>
            )
        })}
      </div>
    );
  }
}

export default Footer;
