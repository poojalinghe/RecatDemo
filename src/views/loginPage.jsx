import React from "react";
import { authenticateUser } from "../services/userapix";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      failedLOgin: false,
      message: ""
    };
  }

  onChangeHandler = event => {
    var _this = this;
    let nam = event.target.name;
    let val = event.target.value;
    _this.setState({ [nam]: val });
  };

  onSubmitHandler = event => {
    var _this = this;
    event.preventDefault();
    var user = {
      email: this.state.email,
      password: this.state.password
    };
    authenticateUser(user).then(res => {
      if (!res.success) {
        _this.setState({ failedLOgin: true });
        this.setState({ message: res.message });
      } else {
        _this.setState({ failedLOgin: false });
        this.setState({ message: "" });
        localStorage.setItem("userToken", res.token);
        console.log(res.userData)
      }
    });
  };

  render() {
    return (
      <div className="container registration">
        <form onSubmit={this.onSubmitHandler} className="form">
          <h1 className="heading"> User Login</h1>
          {this.state.failedLOgin ? <div>{this.state.message}</div> : null}
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter User E-mail"
              onChange={this.onChangeHandler}
              required
            ></input>
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              autoComplete=""
              onChange={this.onChangeHandler}
              required
            ></input>
          </div>

          <button type="submit" className="btn btn-secondary ">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
