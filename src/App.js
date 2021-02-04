import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import MyTodo from './pages/MyTodo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  render() {
    const { isLogin } = this.state;

    return (
      <div>
        <Switch>
          <Route path="/login" render={() => <Login />} />
          <Route exact path="/mytodo" render={() => <MyTodo />} />
          <Route
            path="/"
            render={() => {
              if (isLogin) {
                // return <div>didn't make page yet</div>;
                return <Redirect to="/mytodo" />;
              }
              return <Redirect to="/login" />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
