import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './portfolio.css';
import axios from 'axios';
import Scrollspy from 'react-scrollspy';

//imports child components
import NavBar from './components/navigation';
import Header from './components/header';
import PortPieces from './components/portPieces';
import About from './components/about';
import Footer from './components/footer';
import StoryItem from './components/StoryItem';
import NasaPicOfTheDay from './components/NasaPicOfTheDay';

//imports images
//portfolio
import airplaneThumbnail from './img/airplaneThumbnail.PNG';
import calculatorThumbnail from './img/Calculator.PNG';
import driftwoodThumbnail from './img/driftwoodThumbnail.PNG';
import nasaThumbnail from './img/nasaThumbnail.PNG';
import officeThumbnail from './img/office.PNG';
import tictactoeThumbnail from './img/ticTacToe.png';
//footer
import home from './img/homeDark.png'
import github from './img/githubDark.png'
import codepen from './img/codepenDark.png'
import twitter from './img/twitterDark.png'
import linkedin from './img/linkedinDark.png'

const portfolioList = [
  {thumbnail: calculatorThumbnail, title: 'CALCULATOR', description: 'A cute little calculating monster.', linkTo:'CODEPEN', link: 'https://codepen.io/kkannen/full/WXOMgZ'},
  {thumbnail: tictactoeThumbnail, title: 'TIC-TAC-TOE', description: 'tic-tac-toe game made using react', linkTo:'GITHUB', link: 'https://github.com/kkannen/javascript-workbook/blob/gh-pages/07week/tic-tac-toes/src/App.js'},
  {thumbnail: nasaThumbnail, title: 'NASA', description: 'Contact page for NASA', linkTo:'CODEPEN', link: 'https://codepen.io/kkannen/full/JOpagY'},
  {thumbnail: officeThumbnail, title: 'THE OFFICE', description: 'The Office themed clicker game', linkTo:'GITHUB', link: 'https://github.com/kkannen/web-workbook/tree/gh-pages/10week/Checkpoint03'},
  {thumbnail: driftwoodThumbnail, title: 'DRIFTWOOD', description: 'Remodel of the Driftwood Estate Winery site.', linkTo:'CODEPEN', link: 'https://codepen.io/kkannen/full/vWdVEm'},
  {thumbnail: airplaneThumbnail, title: 'UX ATLANTIC', description: 'Booking page for UX Atlantic Airline', linkTo:'CODEPEN', link: 'https://codepen.io/kkannen/full/mqBOPo'}
]

const footerIconsList = [
  {icon: home, link: 'https://codepen.io/kkannen/'},
  {icon: github, link: 'https://github.com/kkannen'},
  {icon: codepen, link: 'https://codepen.io/kkannen/'},
  {icon: twitter, link: 'https://twitter.com/kkannencoding/'},
  {icon: linkedin, link: 'https://www.linkedin.com/in/krista-kannen-6b1a4498/'}
]

class Portfolio extends Component {
    state = {
      portfolioPieces: [],
      footerIcons: [],
      astronomy: [],
      items: null,
      error: null,
    }


  componentDidMount = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=zb7apZ47ldvNSN8fr5zDcIhADFokQ6l7hkV6fY6g')
      .then(response => {
        this.setState({
          astronomy: response.data
        })
      })
      .catch(error => {
        console.log(error, 'failed to fetch data')
      })
      this.setState({portfolioPieces: portfolioList, footerIcons: footerIconsList})
  }



  render() {
    return (
      <div className="portfolio">
      <NavBar id = 'nav'/>
        <Header/>
        <div className = 'portPieces' id='portfolio'>
          <h2>PORTFOLIO</h2><hr/>
          <div className = 'gallery'>
            {this.state.portfolioPieces.map((obj, key) => {
              return (
                <PortPieces
                  key={key}
                  thumbnail={obj.thumbnail}
                  title={obj.title}
                  description={obj.description}
                  linkTo={obj.linkTo}
                  link={obj.link}
                  />); })}
          </div>
        </div>
        <NasaPicOfTheDay
          picture={this.state.astronomy.hdurl}
          title={this.state.astronomy.title}
          description={this.state.astronomy.explanation}
        />
        <About/>

        <div className="footer">
          {this.state.footerIcons.map((obj, key) => {
            return(
              <Footer
                key = {key}
                icon = {obj.icon}
                link = {obj.link}/>)})}
        </div>
      </div>
    );
  }
}

export default Portfolio;
