import React from 'react';
import '../css/LoadingSignup.css';
import { withRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './Signup';

class LoadingSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
    this.counter = this.counter.bind(this);
    this.timer = this.timer.bind(this);
  }
  // 첫 rendering 후 실행
  componentDidMount() {
    this.counter();
  }
  // state update 후 실행
  componentDidUpdate() {
    this.counter();
  }
  // 1초마다 callback을 실행시키는 함수
  counter = () => setTimeout(this.timer, 1000);
  // this.state.count를 -1하는 함수
  timer = () => {
    this.setState({ count: this.state.count - 1 });
    if (this.state.count < 0) {
      this.timer();
    }
  };

  render() {
    const { count } = this.state;
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
              Redirecting to Sign In page {count} seconds.
            </div>
            <div className="notBoldLine">Please check your email</div>
          </div>
          <Switch>
            <Route path="/Signup" render={() => <Signup />} />
            <Route
              path="/"
              render={() => {
                if (count === 0) {
                  return <Redirect to="/Signup" />;
                }
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(LoadingSignup);
