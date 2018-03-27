import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './portfolio.css';

//imports child components
import NavBar from './components/navigation'
import Header from './components/header'
import PortPieces from './components/portPieces'
import About from './components/about'
import Footer from './components/footer'
import StoryItem from './components/StoryItem'

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
      stories: [],
    }


  componentDidMount = () => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((res) => {
   res.json().then((storyIds) => {
     storyIds.slice(0, 50).forEach((storyId) => {
       fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((res) => {
         res.json().then((story) => {

           const accessStories = this.state.stories
           accessStories.push(story)
           this.setState({stories: accessStories})
         })
       });
     });
   });
 })
    this.setState({portfolioPieces: portfolioList, footerIcons: footerIconsList})
  }

  render() {
    return (
      <div className="portfolio">
        <NavBar id = 'nav'/>
        <Header id = 'home'/>
        <div className = 'portPieces'>
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
        {this.state.stories.map((story, k) => {
           return <StoryItem key = {k} title = {story.title} by = {story.by}/>
         })}
        <About id = 'about'/>

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
