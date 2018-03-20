import React, { Component } from 'react';
import './portfolio.css';

//imports child components
import NavBar from './components/navigation'
import Header from './components/header'
import PortPieces from './components/portPieces'
import About from './components/about'
import Footer from './components/footer'



class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="portfolio">
        <NavBar id = 'nav'/>
        <Header id = 'home'/>
        <PortPieces id = 'portfolio'/>
        <About id = 'about'/>
        <Footer id = 'foot'/>
      </div>
    );
  }
}

export default Portfolio;
