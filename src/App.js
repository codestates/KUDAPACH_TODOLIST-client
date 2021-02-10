import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './App.css';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import MyTodo from './pages/MyTodo';
import LoadingSignup from './pages/LoadingSignup';
import axios from 'axios';
import Mypage from './pages/Mypage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignin: false,
      userinfo: null,
      // groupinfo: null,
      // 위가 진짜 데이터 아래는 통신 전 가짜데이터임!!!!!
      groupinfo: {
        data: {
          id: 1,
          email: 'hello@email.com',
          username: 'sanghyuk',
          mobile: '0100100101',
          group: 3,
        },
        groups: [
          {
            groupid: 1,
          },
          {
            groupid: 4,
          },
          {
            groupid: 5,
          },
        ],
        groupnames: [
          {
            groupname: 'java',
          },
          {
            groupname: 'group1',
          },
          {
            groupname: 'test',
          },
        ],
      },
      // 여기까지 가짜데이터임!!!!!
      todoData: [
        {
          id: 1,
          text: 'learn Python',
          color: '#646465',
          createdAt: '2020.02.10',
          updatedAt: '2020.03.10',
        },
        {
          id: 2,
          text: 'learn TypeScript',
          color: '#808080',
          createdAt: '2020.3.10',
          updatedAt: '2020.03.10',
        },
      ],
    };
    this.handleResponseSuccess = this.handleResponseSuccess.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleResponseSuccess(signinData) {
    axios.get('https://server.kudapach.com/todo').then((res) => {
      this.setState({
        ...this.state,
        todoData: res.data,
      });
    });
    
    axios.get('https://server.kudapach.com/user/info').then((res) => {
      this.setState({
        isSignin: true,
        userinfo: res.data, // id, email, username, mobile
        groupinfo: signinData,
      });
      this.props.history.push('/');
    });
  }

  handleSignOut() {
    this.setState({ isSignin: false });
    this.props.history.push('/');
    // 토근 및 세션 등 인증된 부분 삭제기능 들어가야 함
    // 부모state관리이므로 이 함수를 내려보내 사용
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
