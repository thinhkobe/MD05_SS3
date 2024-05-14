import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newdate: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick = () => {
    this.setState({
      newdate: new Date().toLocaleTimeString(),
    });
  };
  render() {
    return <div>{this.state.newdate}</div>;
  }
}
