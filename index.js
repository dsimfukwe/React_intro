import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increaseCount() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
    console.log(this.state.count);
  }
  render() {
    return (
      <div style={styles}>
        <button onClick={() => this.increaseCount()}>Increase</button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}
let count = 0;
render(<App />, document.getElementById("app"));
