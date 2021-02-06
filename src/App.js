/*eslint-disable*/

import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './App.css';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import MyTodo from './pages/MyTodo';
import LoadingSignup from './pages/LoadingSignup';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignin: false,
      userinfo: null,
    };
    this.handleResponseSuccess = this.handleResponseSuccess.bind(this);
  }

  handleResponseSuccess() {
    this.setState({
      isSignin: true,
    })
    this.props.history.push('/');

    // axios.get('https://localhost:5000/user/info').then((res) => {
    //   this.setState({
    //     isSignin: true,
    //     userinfo: res.data,
    //   })
    //   this.props.history.push('/');
    // });
  }

  render() {
    const { isSignin, userinfo } = this.state;

    return (
      <div>
        <Switch>
          <Route
            path="/signin"
            render={() => (
              <Signin handleResponseSuccess={this.handleResponseSuccess} />
            )}
          />
          <Route path="/loadingSignup" render={() => <LoadingSignup />} />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route path="/mytodo" render={() => <MyTodo userinfo={userinfo} />} />
          <Route
            path="/"
            render={() => {
              if (isSignin) {
                return <Redirect to="/mytodo" />;
              }
              return <Redirect to="/signin" />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
