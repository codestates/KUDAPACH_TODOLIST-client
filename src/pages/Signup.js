import React from 'react';
import '../css/Signup.css';
import { withRouter, Link } from 'react-router-dom';

class Signup extends React.Component {
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
              <input type="text" className="newMail" placeholder="E-mail" />
              <input
                type="text"
                className="newPassword"
                placeholder="Password"
              />
              <input
                type="text"
                className="newUsername"
                placeholder="Username"
              />
              <input
                type="text"
                className="newPhoneNumber"
                placeholder="Phone Number"
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
