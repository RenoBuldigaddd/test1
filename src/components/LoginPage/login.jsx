import React from "react";
import loginImg from "../images/BaseAvatar.svg";
import { connect } from "react-redux";
// import { connect } from "http2";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">
          Welcome Back!
          <div className="image">
            <img src={loginImg} />
          </div>
        </div>
        <div className="content">
          <div className="form">
            {/* !FirstVersion! */}
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input
                type="text"
                className="input input-div one"
                name="email"
                placeholder="email"
              />
            </div>
            {/* <div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <h5>Username</h5>
                <input type="text" class="input" />
              </div>
            </div> */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="input input-div two"
                type="password"
                name="password"
                placeholder="password"
              />
              <a href="#">Forgot Password?</a>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
