import React, { Component } from "react";

export default class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { username: "", password: "", confirmPassword: "", email: "" },
      error: {
        usernameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = e.target;
    const { user } = this.state;
    let hasError = false;
    let error = {
      usernameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    };

    // Kiểm tra tên đăng nhập
    if (!username.value.trim()) {
      error.usernameError = "Username is required";
      hasError = true;
    }

    // Kiểm tra email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      error.emailError = "Invalid email address";
      hasError = true;
    }

    // Kiểm tra mật khẩu
    if (!password.value.trim()) {
      error.passwordError = "Password is required";
      hasError = true;
    }

    // Kiểm tra mật khẩu xác nhận
    if (password.value !== confirmPassword.value) {
      error.confirmPasswordError = "Passwords do not match";
      hasError = true;
    }

    if (hasError) {
      // Nếu có lỗi, cập nhật state error
      this.setState({ error });
    } else {
      // Nếu không có lỗi, gửi dữ liệu form
      const formRegister = {
        username: username.value,
        email: email.value,
        password: password.value,
      };
      console.log("Form submitted:", formRegister);
      this.props.setUsers([...this.props.users, formRegister]);
      // Reset state error
      this.setState({
        error: {
          usernameError: "",
          emailError: "",
          passwordError: "",
          confirmPasswordError: "",
        },
      });
    }
  };

  render() {
    const { error } = this.state;

    return (
      <>
        <h1>REGISTER</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
            {error.usernameError && (
              <p className="error">{error.usernameError}</p>
            )}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            {error.passwordError && (
              <p className="error">{error.passwordError}</p>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            {error.confirmPasswordError && (
              <p className="error">{error.confirmPasswordError}</p>
            )}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            {error.emailError && <p className="error">{error.emailError}</p>}
          </div>
          <button type="submit">Register</button>
        </form>
      </>
    );
  }
}
