import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  render() {
    const { isLogin } = this.state;

    return (
      <div>
        <Switch>
          <Route path="/login" render={() => <Login />} />
          <Route
            path="/"
            render={() => {
              if (isLogin) {
                return <div>didn't make page yet</div>;
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