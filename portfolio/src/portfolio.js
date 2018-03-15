import React, { Component } from 'react';
import './portfolio.css';

//imports child components
import NavBar from './components/navigation'
import Header from './components/header'
import PortPieces from './components/portPieces'
import About from './components/about'
import Footer from './components/footer'

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h1>PORTY</h1>
        <NavBar/>
        <Header/>
        <PortPieces/>
        <About/>
        <Footer/>
      </div>
    );
  }
}

export default Portfolio;
