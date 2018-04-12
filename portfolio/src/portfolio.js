import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './portfolio.css';
import axios from 'axios';
import Scrollspy from 'react-scrollspy';

//imports child components
import NavBar from './components/navigation'
import Header from './components/header'
import PortPieces from './components/portPieces'
import About from './components/about'
import Footer from './components/footer'
import StoryItem from './components/StoryItem'
import NasaPicOfTheDay from './components/NasaPicOfTheDay'

const portfolioList = [
  {id: 'calculator', title: 'CALCULATOR', description: 'A cute little calculating monster.', link: 'https://codepen.io/kkannen/full/WXOMgZ'},
  {id: 'tic-tac-toe', title: 'TIC-TAC-TOE', description: 'tic-tac-toe game made using react', link: 'https://codepen.io/kkannen/'},
  {id: 'nasa', title: 'NASA', description: 'Contact page for NASA', link: 'https://codepen.io/kkannen/full/JOpagY'},
  {id: 'office', title: 'THE OFFICE', description: 'The Office themed clicker game', link: 'https://codepen.io/kkannen/'},
  {id: 'driftwood', title: 'DRIFTWOOD', description: 'Remodel of the Driftwood Estate Winery site.', link: 'https://codepen.io/kkannen/full/vWdVEm'},
  {id: 'airplane', title: 'UX ATLANTIC', description: 'Booking page for UX Atlantic Airline', link: 'https://codepen.io/kkannen/full/mqBOPo'}
]

const footerIconsList = [
  {id: 'homeIcon', link: 'https://codepen.io/kkannen/'},
  {id: 'githubIcon', link: 'https://github.com/kkannen'},
  {id: 'codepenIcon', link: 'https://codepen.io/kkannen/'},
  {id: 'twitterIcon', link: 'https://twitter.com/kkannencoding/'},
  {id: 'linkedinIcon', link: 'https://www.linkedin.com/in/krista-kannen-6b1a4498/'}
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
                  key = {key}
                  id = {obj.id}
                  title = {obj.title}
                  description = {obj.description}
                  link = {obj.link}/>); })}
          </div>
        </div>
        <NasaPicOfTheDay
          picture={this.state.astronomy.hdurl}
          title={this.state.astronomy.title}
          description={this.state.astronomy.explanation}
        />
        <About/>

        <div className="footer">
          {this.state.footerIcons.map((icon, key) => {
            return(
              <Footer
                key = {key}
                id = {icon.id}
                link = {icon.link}/>)})}
        </div>
      </div>
    );
  }
}

export default Portfolio;
