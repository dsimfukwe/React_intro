import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  render() {
    return (
      <div style={styles}>
        <h2>{this.props.count}</h2>
      </div>
    );
  }
}
let count = 0;
setInterval(
  () => render(<App count={count++} />, document.getElementById("app")),
  1000
);
