import React from 'react';
import '../css/Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="allLoginPage">
        <div className="leftSide">
          <div className="leftMiddle">
            <div className="logo" />
            <div className="comment">
              <div className="mainName">TODO LIST</div>
              <div className="mainText">
                <div>WHAT IF YOU HAVEN'T</div>
                <div>SIGNED UP YET?</div>
              </div>
              <div className="lastWord">
                <span>Not a member?</span>
                <a href="#" target="_blank" title="go to Sign up">
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
              <div className="findPassword">Forgot password?</div>
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
