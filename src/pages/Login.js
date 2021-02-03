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
                <a href="#">
                  <span>Sign up now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSide">rightSide</div>
      </div>
    );
  }
}

export default Login;
