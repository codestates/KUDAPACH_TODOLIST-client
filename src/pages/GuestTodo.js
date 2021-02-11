import React, { Component } from 'react';
import TodoList from './TodoList';
import GuestSingleUserNav from './GuestSingleUserNav';
import '../css/MyTodo.css';

class GuestTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          id: 1,
          text:
            '회원으로서 Sign in을 하시면\n' +
            'Calendar, Group \n' +
            'KUDAPACH_TODOLIST의\n' +
            '모든 기능을 사용하실 수 있습니다.',
          date: '2021-02-11',
          color: '#c2667b',
        },
        {
          id: 2,
          text:
            '또한 Guest로 Sign in을\n' +
            '한 경우에\n' +
            'Todo기능 외에 다른 기능이\n' +
            '제한됩니다.',
          date: '2020-18-18',
          color: '#83a2fd',
        },
        {
          id: 3,
          text:
            'Guest로 Sign in을\n' +
            '한 경우에\n' +
            '페이지를 나가면\n' +
            'ToDo는 사라집니다.',
          date: '2020-18-18',
          color: '#6278e1',
        },
        {
          id: 4,
          text:
            '현재 Guest로 Sign in이\n' +
            '되어 있습니다.\n' +
            'Sign up을 하시려면\n' +
            '좌측 상단의 로고를 클릭하세요.',
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
        <GuestSingleUserNav
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

export default GuestTodo;
