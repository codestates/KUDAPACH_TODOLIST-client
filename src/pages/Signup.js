import React from 'react';
import '../css/Signup.css';
import { withRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import { emailValidation, phoneNumValidation } from './ValidationFun';
import axios from 'axios';
import LoadingSignup from './LoadingSignup';

axios.defaults.withCredentials = true;

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      username: '',
      mobile: '',
      isSignup: false,
    };
    this.handleNewInput = this.handleNewInput.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleDuplicateEmail = this.handleDuplicateEmail.bind(this);
  }
  // input value를 가져오는 함수
  handleNewInput = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  // duplicateEmail border-color 변경함수
  handleDuplicateEmail = () => {
    let emailInput = document.querySelector('#emailInput');
    emailInput.classList.add('""');
  };
  // SignupBtn 실행 함수
  handleSignup = () => {
    if (
      !this.state.email ||
      !this.state.password ||
      !this.state.passwordConfirm ||
      !this.state.username ||
      !this.state.mobile
    ) {
      swal({
        title: 'A field is empty',
        text: 'Please fill out all required fields',
        icon: 'warning',
        button: 'confirm',
      });
    } else {
      axios
        .post(
          'https://server.kudapach.com/signup',
          {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
            mobile: this.state.mobile,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then((res) => {
          if (res.status === 200) {
            this.setState({ isSignup: true });
          }
        })
        .catch((err) => {
          if (err.response.status === 409) {
            let emailInput = document.querySelector('#emailInput');
            emailInput.classList.add('tryAgain');

            swal({
              title: 'Duplicate email exists',
              text: 'Please use another email',
              icon: 'warning',
              button: 'confirm',
            });
          }
        });
    }
  };

  render() {
    const {
      email,
      password,
      passwordConfirm,
      username,
      mobile,
      isSignup,
    } = this.state;

    return (
      <div className="allLoginPage">
        <div className="leftSide">
          <div className="leftMiddle">
            <Link to="/signin">
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
                id="emailInput"
                className={
                  email.length === 0
                    ? ''
                    : !emailValidation(email)
                    ? 'tryAgain'
                    : 'allGood'
                }
                placeholder="E-mail"
                onChange={this.handleNewInput('email')}
                onClick={this.handleDuplicateEmail}
              />
              <input
                type="password"
                className={
                  password.length === 0
                    ? ''
                    : password.length < 8
                    ? 'tryAgain'
                    : 'allGood'
                }
                placeholder="Password"
                onChange={this.handleNewInput('password')}
              />
              <input
                type="password"
                className={
                  passwordConfirm.length === 0
                    ? ''
                    : password !== passwordConfirm
                    ? 'tryAgain'
                    : 'allGood'
                }
                placeholder="Password Confirm"
                onChange={this.handleNewInput('passwordConfirm')}
              />
              <input
                type="text"
                className={
                  username.length === 0
                    ? ''
                    : !username
                    ? 'tryAgain'
                    : 'allGood'
                }
                placeholder="username"
                onChange={this.handleNewInput('username')}
              />
              <input
                type="text"
                className={
                  mobile.length === 0
                    ? ''
                    : !phoneNumValidation(mobile)
                    ? 'tryAgain'
                    : 'allGood'
                }
                placeholder="Phone Number"
                onChange={this.handleNewInput('mobile')}
              />
              <button className="createBtn" onClick={this.handleSignup}>
                CREATE ACCOUNT
              </button>
              <Switch>
                <Route path="/loadingSignup" render={() => <LoadingSignup />} />
                <Route
                  path="/"
                  render={() => {
                    if (isSignup === true) {
                      return <Redirect to="/loadingSignup" />;
                    }
                  }}
                />
                ;
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
