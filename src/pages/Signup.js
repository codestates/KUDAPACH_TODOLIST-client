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
      passwordConfirm: '',
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
      !this.state.passwordConfirm ||
      !this.state.userName ||
      !this.state.phoneNumber
    ) {
      swal({
        title: 'A field is empty',
        text: 'Please fill out all required fields',
        icon: 'warning',
        button: 'confirm',
      });
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
                className={
                  this.state.email.length === 0
                    ? ''
                    : !emailValidation(this.state.email)
                    ? 'tryAgain'
                    : 'allGood'
                }
                placeholder="E-mail"
                onChange={this.handleNewInput('email')}
              />
              <input
                type="password"
                className={
                  this.state.password.length === 0
                    ? ''
                    : this.state.password.length < 8
                    ? 'tryAgain'
                    : 'allGood'
                }
                placeholder="Password"
                onChange={this.handleNewInput('password')}
              />
              <input
                type="password"
                className={
                  this.state.passwordConfirm.length === 0
                    ? ''
                    : this.state.password !== this.state.passwordConfirm
                    ? 'tryAgain'
                    : 'allGood'
                }
                placeholder="Password Confirm"
                onChange={this.handleNewInput('passwordConfirm')}
              />
              <input
                type="text"
                className={
                  this.state.userName.length === 0
                    ? ''
                    : !this.state.userName
                    ? 'tryAgain'
                    : 'allGood'
                }
                placeholder="Username"
                onChange={this.handleNewInput('userName')}
              />
              <input
                type="text"
                className={
                  this.state.phoneNumber.length === 0
                    ? ''
                    : !phoneNumValidation(this.state.phoneNumber)
                    ? 'tryAgain'
                    : 'allGood'
                }
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
