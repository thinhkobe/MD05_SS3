import React, { Component } from "react";

export default class FromLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }
  handleLogin = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const password = e.target.password.value;
    let listUser = this.props.users;
    const userLogin = listUser.filter(
      (uesr) => uesr.username == userName && uesr.password == password
    );
    console.log("userLogin", userLogin);
    if (userLogin.length != 0) {
      console.log("dang nhap thanh cong");
      this.setState({ display: false });
    } else {
      console.log("dang nhap that bai");
      this.setState({ display: true });
    }
  };
  render() {
    return (
      <>
        <h1>ACCOUT LOGIN</h1>
        {!this.state.display ? "" : <h3>Đăng nhập thất bại</h3>}

        <form onSubmit={this.handleLogin}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" id="usernameLogin" name="userName" required />
          </div>
          <div>
            <label htmlFor="password">Pass Word</label>
            <input
              type="password"
              id="passwordLogin"
              name="password"
              required
            />
          </div>
          <div>
            <div>
              <input type="checkbox" name="" id="" />
              <p>Remember Me</p>
            </div>
            <a href="">Forgot Password</a>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </>
    );
  }
}
