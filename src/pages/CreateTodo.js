import React, { Component } from 'react';
import '../css/CreateTodo.css';
import GroupSvg from '../asset/img/MyTodo/GroupSvg';

class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      colors: ['#c2667b', '#83a2fd', '#6278e1', '#4d50a4'],
      color: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    // ? 새로운 카드 생성하는 메소드
    const index = Math.round(Math.random() * 3);
    this.setState(
      {
        color: this.state.colors[index],
      },
      () => this.props.onCreate(this.state.color),
    );
  };

  render() {
    return (
      <>
        <div className="CreateButton" onClick={this.handleSubmit}>
          <form onSubmit={this.handleSubmit}>
            <div className="pluse_icon">
              <GroupSvg className="svg" fill="#9292A7" />
            </div>
            <div className="create_text">
              CREATE NEW
              <br />
              TODO LIST
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default CreateTodo;
