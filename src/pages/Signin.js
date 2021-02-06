import React from 'react';
import '../css/Signin.css';
import { withRouter, Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

axios.defaults.withCredentials = true;

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
  }
  // input value를 가져오는 함수
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  // Signin을 실행하는 함수
  handleSignin = () => {
    if (!this.state.email || !this.state.password) {
      swal({
        title: 'Wrong information',
        text: 'Check your email & password',
        icon: 'warning',
        button: 'confirm',
      });
    } else {
      axios
        .post(
          'https://server.kudapach.com/signin',
          {
            email: this.state.email,
            password: this.state.password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then(() => {
          this.props.handleResponseSuccess();
        })
        .catch((err) => {
          if (err.response.status === 401) {
            this.setState({
              email: '',
              password: '',
            });
            swal({
              title: 'Invalid email or wrong password',
              text: 'Please check your email or password',
              icon: 'warning',
              button: 'confirm',
            });
          }
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
              <div className="mainName">TODO LIST</div>
              <div className="mainText">
                <div>WHAT IF YOU HAVEN'T</div>
                <div>SIGNED UP YET?</div>
              </div>
              <div className="lastWord">
                <span>Not a member?</span>
                <Link to="/signup">Sign up now</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="rightMainWrapper">
            <div className="headText">Sign in to TODO LIST</div>
            <div className="inputArea">
              <input
                type="text"
                className="emailInput"
                placeholder="E-mail"
                onChange={this.handleInputValue('email')}
              />
              <input
                type="password"
                className="passwordInput"
                placeholder="Password"
                onChange={this.handleInputValue('password')}
              />
            </div>
            <div className="connectArea">
              <button className="connectBtn" onClick={this.handleSignin}>
                CONNECT
              </button>
              <div className="connectText">
                <a href="#" title="go to Guest Sign in">
                  <span className="guestSignIn">Guest Sign in</span>
                </a>
              </div>
            </div>
            <div className="middleLine">
              <span className="line" />
              <span className="or">Or</span>
              <span className="line" />
            </div>
            <div className="oauthArea">
              <button className="googleBtn">Sign in with Google</button>
              <button className="kakaoBtn">Sign in with Kakao</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signin);
