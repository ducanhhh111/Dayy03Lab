import React, { Component } from "react";

class HvtClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  tangSo = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>Xin chào: {this.props.name}</p>
        <p>Địa chỉ: {this.props.address}</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.tangSo}>Tăng</button>
      </div>
    );
  }
}

export default HvtClassComp;
