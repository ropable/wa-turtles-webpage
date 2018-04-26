// @flow
import * as React from "react";
import YouTube from "react-youtube";

export default class TurtleYoutube extends React.Component {
  render() {
    const opts = {
      height: "500px",
      width: "100%",
      playerVars: {
        autoplay: 0
      }
    };
    return <YouTube videoId="XbCWIZ3wlQA" opts={opts} />;
  }
}
