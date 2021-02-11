import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './App.css';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import MyTodo from './pages/MyTodo';
import LoadingSignup from './pages/LoadingSignup';
import axios from 'axios';
import Mypage from './pages/Mypage';
import GuestTodo from './pages/GuestTodo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignin: false,
      userinfo: null,
      groupinfo: null,
      todoData: [],
    };
    this.handleResponseSuccess = this.handleResponseSuccess.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleResponseSuccess(signinData) {
    axios.get('https://server.kudapach.com/todo').then((res) => {
      this.setState({
        ...this.state,
        todoData: res.data, // !!
      });
    });

    axios.get('https://server.kudapach.com/user/info').then((res) => {
      this.setState({
        isSignin: true,
        userinfo: res.data, // !! id, email, username, mobile !!
        groupinfo: signinData.data,
      });
      this.props.history.push('/');
    });
  }

  handleSignOut() {
    axios.post('https://server.kudapach.com/signout').then(() => {
      this.setState({ isSignin: false });
      this.props.history.push('/');
    });
  }

  render() {
    const { isSignin, userinfo, groupinfo, todoData } = this.state;

    return (
      <div>
        <Switch>
          <Route
            path="/signin"
            render={() => (
              <Signin handleResponseSuccess={this.handleResponseSuccess} />
            )}
          />
          <Route path="/guestTodo" render={() => <GuestTodo />} />
          <Route path="/loadingSignup" render={() => <LoadingSignup />} />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route
            path="/mytodo"
            render={() => (
              <MyTodo
                userinfo={userinfo}
                groupinfo={groupinfo}
                handleSignOut={this.handleSignOut}
                todoData={todoData}
              />
            )}
          />
          <Route
            path="/mypage"
            render={() => (
              <Mypage
                groupinfo={groupinfo}
                handleSignOut={this.handleSignOut}
              />
            )}
          />
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
