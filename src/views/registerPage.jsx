import React from "react";
import { addUser } from "../services/userapix";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  onChangeHandler = event => {
    var _this = this;
    let nam = event.target.name;
    let val = event.target.value;
    _this.setState({ [nam]: val });
  };

  onSubmitHandler = event => {

    event.preventDefault();
    var user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    addUser(user).then(res=>{

    })

  };

  render() {
    return (
      <div className="container registration">
        <form onSubmit={this.onSubmitHandler} className="form">
          <h1 className="heading"> User Registration</h1>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder=" Enter your Username"
              onChange={this.onChangeHandler}
              required
            ></input>
          </div>

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
              autoComplete=""
              className="form-control"
              name="password"
              placeholder="Enter password"
              onChange={this.onChangeHandler}
              required
            ></input>
          </div>

          <button type="submit" className="btn btn-secondary ">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
