// @flow
import * as React from 'react';
import YouTube from 'react-youtube';

export default class TurtleYoutube extends React.Component<{}> {
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
