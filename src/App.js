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
      TodoData: [
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
  }

  handleResponseSuccess() {
    axios.get('https://server.kudapach.com/user/info').then((res) => {
      this.setState({
        isSignin: true,
        userinfo: res.data, // 추후 이렇게 넘기는게 맞는지 확인필요
      });
      this.props.history.push('/');
    });

    axios.get('https://server.kudapach.com/todo').then((res) => {
      this.setState({
        ...this.state,
        TodoData: res.data,
      });
    });
  }

  render() {
    const { isSignin, userinfo, TodoData } = this.state;

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
            render={() => <MyTodo userinfo={userinfo} TodoData={TodoData} />}
          />
          <Route path="/mypage" render={() => <Mypage />} />
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
