import React from "react";

class Lesson30 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // SetState({cout + 1}, callback)
  handleClick = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      this.setState({ count: this.state.count + 1 }, () => {
        this.setState({ count: this.state.count + 1 });
      });
    });

    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <div>lesson 30 Getting next state</div>
        <div>Count = {this.state.count}</div>
        <button onClick={() => this.handleClick()}> +3 unit</button>
      </>
    );
  }
}
export default Lesson30;
