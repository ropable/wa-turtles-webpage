// @flow
import React, { Component } from 'react';
import YouTube from 'react-youtube';

class TurtleYoutube extends Component {
  render() {
    const opts = {
      height: 'auto',
      width: '100%',
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <div>
        <YouTube videoId="XbCWIZ3wlQA" opts={opts} />
      </div>
    );
  }
}

export default TurtleYoutube;
