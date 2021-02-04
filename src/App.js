import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './App.css';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import MyTodo from './pages/MyTodo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignin: false,
    };
  }

  render() {
    const { isSignin } = this.state;

    return (
      <div>
        <Switch>
          <Route path="/Signin" render={() => <Signin />} />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route path="/mytodo" render={() => <MyTodo />} />
          <Route
            path="/"
            render={() => {
              if (isSignin) {
                return <Redirect to="/mytodo" />;
              }
              return <Redirect to="/Signin" />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
