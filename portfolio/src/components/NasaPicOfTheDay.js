import React, { Component } from 'react';
import '../portfolio.css';
import '../styleSheets/nasaPic.css'
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

class NasaPicOfTheDay extends Component {

  render() {

    const style = {
      width: '40%',
      minWidth: 550,
      textAlign: 'center',
      margin:15,
    };

    return (
      <div className="nasa" id='astronomy'>

        <div className='npod'>
          <Paper className = 'pic' style={style} zDepth={5} rounded={true}>
            <img src = {this.props.picture}/>
          </Paper>
          <Paper style={style} zDepth={5} rounded={true}>
            <h4>{this.props.title}</h4>
            <hr/>
            <p>{this.props.description}</p>
          </Paper>
        </div>
      </div>
    );
  }
}

export default NasaPicOfTheDay;
