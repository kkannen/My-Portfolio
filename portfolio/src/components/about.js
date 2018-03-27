import React, { Component } from 'react';
import '../portfolio.css';
import '../styleSheets/about.css'


const socialLinksList = [
  {name: 'TWITTER: @kkanencoding', link: 'https://twitter.com/kkannencoding/'},
  {name: 'LINKEDIN: Krista Kannen', link: 'https://www.linkedin.com/in/krista-kannen-6b1a4498/'},
  {name: 'GITHUB: kkannen', link: 'https://github.com/kkannen'},
  {name: 'CODEPEN: kkannen', link: 'https://codepen.io/kkannen/'},
  {name: 'GOOGLE+: Krista Kannen', link: 'https://plus.google.com/115866610770594816349'},
  ]

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className = 'bio'>
          <h2>A LITTLE ABOUT ME:</h2><hr/>
          <p className = 'blurb'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.</p>
        </div>
        <div className = 'mySkills'>
          <h2>My Skillz</h2><hr/>
          <p>HTML</p>
          <p>CSS</p>
          <p>Bootstrap</p>
          <p>Javascript</p>
          <p>jQuery</p>
          <p>React</p>
        </div>
        <div className = 'myLinks'>
          <h2>Where to find me</h2><hr/>
          {socialLinksList.map((obj, key) => {
            return <div className = 'linkDiv'><a className = 'links' href = {obj.link}>{obj.name}</a></div>
          })}
        </div>
      </div>
    );
  }
}

export default About;
