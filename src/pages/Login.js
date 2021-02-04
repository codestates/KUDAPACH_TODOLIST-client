import React from 'react';
import '../css/Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="allLoginPage">
        <div className="leftSide">
          <div className="leftMiddle">
            <a href="#" title="go to Sign in">
              <div className="logo" />
            </a>
            <div className="comment">
              <div className="mainName">TODO LIST</div>
              <div className="mainText">
                <div>WHAT IF YOU HAVEN'T</div>
                <div>SIGNED UP YET?</div>
              </div>
              <div className="lastWord">
                <span>Not a member?</span>
                <a href="#" title="go to Sign up">
                  <span>Sign up now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="rightMainWrapper">
            <div className="headText">Sign in to TODO LIST</div>
            <div className="inputArea">
              <input type="text" className="emailInput" placeholder="E-mail" />
              <input
                type="text"
                className="passwordInput"
                placeholder="Password"
              />
            </div>
            <div className="connectArea">
              <button className="connectBtn">CONNECT</button>
              <div className="connectText">
                <a href="#" title="go to Guest Sign in">
                  <span className="guestSignIn">Guest Sign in</span>
                </a>
                <span> ‧ </span>
                <a href="#" title="Let's find password">
                  <span className="findPassword">Forgot password?</span>
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

export default Login;
