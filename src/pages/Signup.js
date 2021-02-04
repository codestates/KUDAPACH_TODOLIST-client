import React from 'react';
import '../css/Signup.css';
import { withRouter, Link } from 'react-router-dom';

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
  }
  // input value를 가져오는 함수
  handleNewInput = (key) => (e) => {
    this.setState({ [key]: e.target.value });
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
                type="text"
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
              <button className="createBtn">CREATE ACCOUNT</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
