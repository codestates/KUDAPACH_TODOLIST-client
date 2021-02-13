/*eslint-disable*/
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
      currentGroupId: 0,
      userinfo: null,
      groupinfo: null,
      todoData: [],
    };
    this.handleResponseSuccess = this.handleResponseSuccess.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleTodoCards = this.handleTodoCards.bind(this);
    this.handleUsernameEmail = this.handleUsernameEmail.bind(this);
    this.handleIsGroup = this.handleIsGroup.bind(this);
  }

  handleResponseSuccess = async (signinData) => {
    await axios.get('https://server.kudapach.com/todo').then((res) => {
      this.setState({
        todoData: res.data.data,
      });
    });

    await axios.get('https://server.kudapach.com/user/info').then((res) => {
      this.setState({
        isSignin: true,
        userinfo: res.data.data,
        groupinfo: signinData,
      });
      this.props.history.push('/');
    });
  };
  handleSignOut() {
    axios.post('https://server.kudapach.com/signout').then(() => {
      this.setState({ isSignin: false });
      this.props.history.push('/');
    });
  }
  handleTodoCards(data) {
    this.setState({
      todoData: data,
    });
  }

  handleUsernameEmail = async () => {
    await axios.get('https://server.kudapach.com/user/info').then(
      (res) => {
        this.setState({
          userinfo: res.data.data,
        });
      },
      () => this.props.history.push('/'),
    );
  };

  handleIsGroup(currentGroupId) {
    this.setState({
      currentGroupId,
    });
  }
  render() {
    console.log(333, this.state);
    const {
      isSignin,
      userinfo,
      groupinfo,
      todoData,
      currentGroupId,
    } = this.state;
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
                todoData={todoData}
                userinfo={userinfo}
                groupinfo={groupinfo}
                currentGroupId={currentGroupId}
                handleSignOut={this.handleSignOut}
                handleIsGroup={this.handleIsGroup}
                handleTodoCards={this.handleTodoCards}
                handleUsernameEmail={this.handleUsernameEmail}
              />
            )}
          />
          <Route
            path="/mypage"
            render={() => (
              <Mypage
                userinfo={userinfo}
                groupinfo={groupinfo}
                currentGroupId={currentGroupId}
                handleSignOut={this.handleSignOut}
                handleIsGroup={this.handleIsGroup}
                handleTodoCards={this.handleTodoCards}
                handleUsernameEmail={this.handleUsernameEmail}
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
