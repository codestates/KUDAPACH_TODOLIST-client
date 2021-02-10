import React, { Component } from 'react';
import TodoList from './TodoList';
import SingleUserNav from './SingleUserNav';
import '../css/MyTodo.css';

class MyTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          id: 1,
          text:
            'Then beginning of\n' +
            'screenless design:\n' +
            'UI jobs to be taken\n' +
            'over by Solution Architect',
          date: '2020-18-18',
          color: '#c2667b',
        },
        {
          id: 2,
          text:
            'Then beginning of\n' +
            'screenless design:\n' +
            'UI jobs to be taken\n' +
            'over by Solution Architect',
          date: '2020-18-18',
          color: '#83a2fd',
        },
        {
          id: 3,
          text:
            'Then beginning of\n' +
            'screenless design:\n' +
            'UI jobs to be taken\n' +
            'over by Solution Architect',
          date: '2020-18-18',
          color: '#6278e1',
        },
        {
          id: 4,
          text:
            'Then beginning of\n' +
            'screenless design:\n' +
            'UI jobs to be taken\n' +
            'over by Solution Architect',
          date: '2020-18-18',
          color: '#4d50a4',
        },
      ],
    };
  }

  handleCreate = (data) => {
    const { cardData } = this.state;
    this.setState({
      cardData: cardData.concat({
        id: cardData.length + 1,
        date: new Date().toISOString().substring(0, 10),
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
            date: cardData.date,
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
    const { cardData } = this.state;
    return (
      <div>
        <SingleUserNav />
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
