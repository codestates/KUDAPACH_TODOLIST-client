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
          text: '1차 이거 랜더링 할꼬당 이새끼야',
          date: '2020-18-18',
          color: '#c2667b',
        },
        {
          id: 2,
          text: '2차 이거 수정한다 이새끼야',
          date: '2020-18-18',
          color: '#83a2fd',
        },
        {
          id: 3,
          text: '3차 이거 삭제한 이새끼야',
          date: '2020-18-18',
          color: '#83a2fd',
        },
        {
          id: 4,
          text:
            '4차 마지막으로 이거 텍스트박스 나오게 한꺼다 코드스테이트 개자식',
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
        <div></div>
      </div>
    );
  }
}

export default MyTodo;
