import React, { Component } from 'react';
import TodoList from './TodoList';
import SingleUserNav from './SingleUserNav';
import '../css/MyTodo.css';

class MyTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [...this.props.todoData],
    };
  }

  handleCreate = (data) => {
    const { cardData } = this.state;
    this.setState({
      cardData: cardData.concat({
        id: cardData.length + 1,
        updatedAt: new Date().toISOString().substring(0, 10),
        ...data,
      }),
    });
  };

  handleColorUpdate = (id, data) => {
    const temp = [...this.state.cardData];
    const idx = temp.findIndex((v) => v.id === id);

    temp[idx].color = data;

    this.setState({
      cardData: temp,
    });
  };

  handleUpdate = (id, data) => {
    const { cardData } = this.state;
    this.setState({
      cardData: cardData.map((todocard) => {
        if (todocard.id === id) {
          return {
            id,
            color: todocard.color,
            updatedAt: todocard.updatedAt,
            ...data,
          };
        }
        return todocard;
      }),
    });
  };

  handleRemove = (id) => {
    const { cardData } = this.state;

    this.setState({
      cardData: cardData.filter((data) => data.id !== id),
    });
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
