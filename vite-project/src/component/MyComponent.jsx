import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    // phương thức này được gọi trước khi component được render và sau đó mỗi khi props của component được cập nhật.
    // Nó được sử dụng để cập nhật state của component dựa trên props.
    if (props.initialCount !== state.count) {
      return { count: props.initialCount };
    }
    return null;
  }

  componentDidMount() {
    // phương thức này được gọi sau khi component được render xong và được đưa vào cây DOM.
    // Nó được sử dụng để thực hiện các tác vụ mà cần sử dụng DOM như gọi API, thiết lập event listener,...
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // phương thức này được sử dụng để quyết định component có cần được render lại hay không.
    // Nếu phương thức trả về false thì component sẽ không được render lại.
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // phương thức này được gọi trước khi component được cập nhật và được sử dụng để lấy thông tin từ DOM trước khi component được cập nhật.
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // phương thức này được gọi sau khi component được cập nhật và được sử dụng để thực hiện các tác vụ mà cần sử dụng DOM như gọi API, thiết lập event listener,...
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // phương thức này được gọi khi component bị loại bỏ khỏi cây DOM.
    // Nó được sử dụng để dọn dẹp các tài nguyên và event listener được thiết lập trong componentDidMount().
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    // phương thức này là bắt buộc và nó trả về JSX để hiển thị giao diện của component.
    console.log("render");
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
