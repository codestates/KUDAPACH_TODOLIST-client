import React from 'react';
import '../css/LoadingSignup.css';
import { withRouter, Link } from 'react-router-dom';

class LoadingSignup extends React.Component {
  render() {
    return (
      <div className="allLoginPage">
        <div className="loadingLeftSide">
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
          <div className="rightLoadingWrapper">
            <div id="firstBoldLine" className="boldLine">
              Thank you for signing up!
            </div>
            <div className="boldLine">
              Redirecting to Sign In page 5 seconds.
            </div>
            <div className="notBoldLine">Please check your email</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoadingSignup);
