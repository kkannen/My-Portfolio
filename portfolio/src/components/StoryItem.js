import React, { Component } from 'react';

class StoryItem extends Component {

  render() {
    return (
      <div className="StoryItem">
          <h3>{this.props.title}</h3>
          <p>{this.props.by}</p>
      </div>
    );
  }
}

export default StoryItem;
