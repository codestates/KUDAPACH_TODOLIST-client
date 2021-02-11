/* eslint-disable */
import React, { Component } from 'react';
import TodoList from './TodoList';
import SingleUserNav from './SingleUserNav';
import '../css/MyTodo.css';
import axios from 'axios';

class MyTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: this.props.todoData,
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleColorUpdate = this.handleColorUpdate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleCreate = async (color) => {
    axios.defaults.withCredentials = true;
    await axios.post('https://server.kudapach.com/todo/create', {
      color,
    });
    await axios
      .get('https://server.kudapach.com/todo')
      .then((res) => this.props.handleTodoCards(res.data.data));
  };

  handleColorUpdate = async (id, text, color) => {
    await axios.post('https://server.kudapach.com/todo/edit', {
      id,
      trash: false,
      text,
      color,
    });
    await axios
      .get('https://server.kudapach.com/todo')
      .then((res) => this.props.handleTodoCards(res.data.data));
  };

  handleUpdate = async (id, text, color) => {
    await axios.post('https://server.kudapach.com/todo/edit', {
      id,
      trash: false,
      text,
      color,
    });
    await axios
      .get('https://server.kudapach.com/todo')
      .then((res) => this.props.handleTodoCards(res.data.data));
  };

  handleRemove = async (id) => {
    await axios.post('https://server.kudapach.com/todo/edit', {
      id,
      trash: true,
    });
    await axios
      .get('https://server.kudapach.com/todo')
      .then((res) => this.props.handleTodoCards(res.data.data));
  };

  render() {
    const { userinfo, groupinfo, handleSignOut } = this.props;
    const { cardData } = this.state;
    return (
      <div>
        <SingleUserNav
          userinfo={userinfo}
          groupinfo={groupinfo}
          handleSignOut={handleSignOut}
          handleTodoCards={this.props.handleTodoCards}
        />
        <div className="Box_container main_Box">
          <TodoList
            data={cardData}
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
