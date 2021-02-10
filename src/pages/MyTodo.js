import React, { Component } from 'react';
import TodoList from './TodoList';
import SingleUserNav from './SingleUserNav';
import '../css/MyTodo.css';

class MyTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [...this.props.TodoData],
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

  handleUpdate = (id, data) => {
    const { cardData } = this.state;
    this.setState({
      cardData: cardData.map((cardData) => {
        if (cardData.id === id) {
          return {
            id,
            color: cardData.color,
            updatedAt: cardData.updatedAt,
            ...data,
          };
        }
        return cardData;
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
          />
        </div>
      </div>
    );
  }
}

export default MyTodo;
