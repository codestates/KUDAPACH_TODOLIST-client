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
        title: 'Something is empty',
        text: 'All things have to exist',
        icon: 'warning',
        button: 'confirm',
      });
    } else {
      if (emailValidation(this.state.email) === false) {
        swal({
          title: 'Wrong email',
          text: 'Check your email',
          icon: 'warning',
          button: 'confirm',
        });
      }
      if (this.state.password.length < 8) {
        swal({
          title: 'Wrong password',
          text: 'password need atleast 8 words',
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
          title: 'Wrong phone number',
          text: 'Input just numbers',
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
