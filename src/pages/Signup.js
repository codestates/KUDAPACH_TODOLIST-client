import React from 'react';
import '../css/Signup.css';
import { withRouter, Link } from 'react-router-dom';
import swal from 'sweetalert';
import { emailValidation, phoneNumValidation } from '../pages/ValidationFun';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userName: '',
      phoneNumber: '',
    };
    this.handleNewInput = this.handleNewInput.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }
  // input value를 가져오는 함수
  handleNewInput = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  // SignupBtn 실행 함수
  handleSignup = () => {
    if (
      !this.state.email ||
      !this.state.password ||
      !this.state.userName ||
      !this.state.phoneNumber
    ) {
      swal({
        title: 'A field is empty',
        text: 'Please fill out all required fields',
        icon: 'warning',
        button: 'confirm',
      });
    } else {
      if (emailValidation(this.state.email) === false) {
        swal({
          title: 'Email is incorrect',
          text: 'Please make sure to provide the correct email format',
          icon: 'warning',
          button: 'confirm',
        });
      }
      if (this.state.password.length < 8) {
        swal({
          title: 'Incorrect Password Format',
          text: 'The password needs to be at least 8 characters',
          icon: 'warning',
          button: 'confirm',
        });
      }
      if (!this.state.userName) {
        swal({
          title: 'Username is empty',
          text: 'Please input username',
          icon: 'warning',
          button: 'confirm',
        });
      }
      if (phoneNumValidation(this.state.phoneNumber) === false) {
        swal({
          title: 'Incorrect number format',
          text: 'The phone number must be numbers only',
          icon: 'warning',
          button: 'confirm',
        });
      }
    }
  };

  render() {
    return (
      <div className="allLoginPage">
        <div className="leftSide">
          <div className="leftMiddle">
            <Link to="/Signin">
              <div className="logo" />
            </Link>
            <div className="comment">
              <div className="mainName">WELCOME</div>
              <div className="mainText">
                <div>CONGRATULATIONS</div>
                <div>ON JOINING</div>
                <div>THE TODO LIST</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="rightWrapper">
            <div className="signUpText">Sign up</div>
            <div className="inputWrapper">
              <input
                type="text"
                className="newMail"
                placeholder="E-mail"
                onChange={this.handleNewInput('email')}
              />
              <input
                type="password"
                className="newPassword"
                placeholder="Password"
                onChange={this.handleNewInput('password')}
              />
              <input
                type="password"
                className="checkPassword"
                placeholder="Password Confirm"
                onChange={this.handleNewInput('password')}
              />
              <input
                type="text"
                className="newUsername"
                placeholder="Username"
                onChange={this.handleNewInput('userName')}
              />
              <input
                type="text"
                className="newPhoneNumber"
                placeholder="Phone Number"
                onChange={this.handleNewInput('phoneNumber')}
              />
              <button className="createBtn" onClick={this.handleSignup}>
                CREATE ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
