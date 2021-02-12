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
      userinfo: null,
      groupinfo: null,
      // groupinfo: {
      //   data: {
      //     id: 1,
      //     email: 'hello@email.com',
      //     username: 'sanghyuk',
      //     mobile: '0100100101',
      //     group: 3,
      //   },
      //   groups: [
      //     {
      //       groupid: 1,
      //     },
      //     {
      //       groupid: 4,
      //     },
      //     {
      //       groupid: 5,
      //     },
      //   ],
      //   groupnames: [
      //     {
      //       groupname: 'java',
      //     },
      //     {
      //       groupname: 'group1',
      //     },
      //     {
      //       groupname: 'test',
      //     },
      //   ],
      // },
      todoData: [],
      // todoData: [
      //   {
      //     id: 1,
      //     userid: 1,
      //     text: 'learn Python',
      //     color: '#ffffff',
      //   },
      //   {
      //     id: 2,
      //     text: 'learn TypeScript',
      //     color: '#808080',
      //   },
      // ],
    };
    this.handleResponseSuccess = this.handleResponseSuccess.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleTodoCards = this.handleTodoCards.bind(this);
    this.handleUsernameEmail = this.handleUsernameEmail.bind(this);
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
    console.log(111, this.state);
    this.setState(
      {
        todoData: data,
      },
      () => console.log(222, this.state),
    );
  }

  handleUsernameEmail = async () => {
    await axios.get('https://server.kudapach.com/user/info').then(
      (res) => {
        this.setState({
          userinfo: res.data.data,
        });
      },
      () => console.log(this.state),
    );
  };
  render() {
    console.log(333, this.state);
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
                handleTodoCards={this.handleTodoCards}
              />
            )}
          />
          <Route
            path="/mypage"
            render={() => (
              <Mypage
                groupinfo={groupinfo}
                handleSignOut={this.handleSignOut}
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
