import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = props => (
  <div style={styles}>
    <h2>{props.count}</h2>
  </div>
);
let count = 0;
setInterval(
  () => render(<App count={count++} />, document.getElementById("app")),
  1000
);
