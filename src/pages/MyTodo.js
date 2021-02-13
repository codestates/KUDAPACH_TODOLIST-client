/* eslint-disable */
import React, { Component } from 'react';
import TodoList from './TodoList';
import SingleUserNav from './SingleUserNav';
import '../css/MyTodo.css';
import axios from 'axios';
axios.defaults.withCredentials = true;
class MyTodo extends Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleColorUpdate = this.handleColorUpdate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleCreate = async (color) => {
    if (this.props.currentGroupId === 0) {
      await axios.post('https://server.kudapach.com/todo/create', {
        color,
      });
      await axios
        .get('https://server.kudapach.com/todo')
        .then((res) => this.props.handleTodoCards(res.data.data));
    } else {
      await axios.post('https://server.kudapach.com/grouptodocard/create', {
        groupid: this.props.currentGroupId,
        color,
      });
      await axios
        .post('https://server.kudapach.com/grouptodocard', {
          groupid: this.props.currentGroupId,
        })
        .then((res) => this.props.handleTodoCards(res.data.data));
    }
  };

  handleColorUpdate = async (id, text, color) => {
    if (this.props.currentGroupId === 0) {
      await axios.post('https://server.kudapach.com/todo/edit', {
        id,
        trash: false,
        text,
        color,
      });
      await axios
        .get('https://server.kudapach.com/todo')
        .then((res) => this.props.handleTodoCards(res.data.data));
    } else {
      await axios.post('https://server.kudapach.com/grouptodocard/edit', {
        id,
        trash: false,
        text,
        color,
      });
      await axios
        .post('https://server.kudapach.com/grouptodocard', {
          groupid: this.props.currentGroupId,
        })
        .then((res) => this.props.handleTodoCards(res.data.data));
    }
  };

  handleUpdate = async (id, text, color) => {
    if (this.props.currentGroupId === 0) {
      await axios.post('https://server.kudapach.com/todo/edit', {
        id,
        trash: false,
        text,
        color,
      });
      await axios
        .get('https://server.kudapach.com/todo')
        .then((res) => this.props.handleTodoCards(res.data.data));
    } else {
      await axios.post('https://server.kudapach.com/grouptodocard/edit', {
        id,
        trash: false,
        text,
        color,
      });
      await axios
        .post('https://server.kudapach.com/grouptodocard', {
          groupid: this.props.currentGroupId,
        })
        .then((res) => this.props.handleTodoCards(res.data.data));
    }
  };

  handleRemove = async (id) => {
    if (this.props.currentGroupId === 0) {
      await axios.post('https://server.kudapach.com/todo/edit', {
        id,
        trash: true,
      });
      await axios
        .get('https://server.kudapach.com/todo')
        .then((res) => this.props.handleTodoCards(res.data.data));
    } else {
      await axios.post('https://server.kudapach.com/grouptodocard/edit', {
        id,
        trash: true,
      });
      await axios
        .post('https://server.kudapach.com/grouptodocard', {
          groupid: this.props.currentGroupId,
        })
        .then((res) => this.props.handleTodoCards(res.data.data));
    }
  };

  render() {
    const {
      userinfo,
      groupinfo,
      handleSignOut,
      todoData,
      handleUsernameEmail,
      handleIsGroup,
      currentGroupId,
    } = this.props;

    return (
      <div>
        <SingleUserNav
          userinfo={userinfo}
          groupinfo={groupinfo}
          handleSignOut={handleSignOut}
          handleTodoCards={this.props.handleTodoCards}
          handleUsernameEmail={handleUsernameEmail}
          currentGroupId={currentGroupId}
          handleIsGroup={handleIsGroup}
        />
        <div className="Box_container main_Box">
          <TodoList
            data={todoData}
            onUpdate={this.handleUpdate}
            onRemove={this.handleRemove}
            onCreate={this.handleCreate}
            onColorChange={this.handleColorUpdate}
          />
        </div>
      </div>
    );
  }
}

export default MyTodo;
