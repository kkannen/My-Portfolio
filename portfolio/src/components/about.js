import React, { Component } from 'react';
import '../portfolio.css';
import '../styleSheets/about.css'

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className = 'bio'>
          <h2>Me and stuff</h2>
          <p>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.</p>
        </div>
        <div className = 'myLinks'>
          <h2>Where to find me</h2>
          <p className = 'links'>titter</p>
          <p className = 'links'>codepen</p>
          <p className = 'links'>github</p>
          <p className = 'links'>google or something</p>

        </div>
      </div>
    );
  }
}

export default About;
