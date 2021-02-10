import React, { Component } from 'react';
import styled from 'styled-components';
import { MdDelete, MdEdit } from 'react-icons/md';
import '../css/TodoInfo.css';

const Remove = styled.div`
  position: absolute;
  opacity: 0;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 268px;
  left: 268px;
  color: #9292a7;
  cursor: pointer;
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  &:hover {
    color: white;
    background-color: #572d7f;
  }
`;

const Edit = styled.div`
  position: absolute;
  opacity: 0;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 268px;
  left: 220px;
  color: #9292a7;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  background: white;

  &:hover {
    color: white;
    background-color: #572d7f;
  }
`;

const TodoItemBlock = styled.div`
  width: 340px;
  height: 340px;
  position: relative;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 20px;
  font-weight: normal;
  background-color: #f0f0f0;
  display: inline-flex;
  margin-right: 25px;
  margin-bottom: 25px;
  flex-flow: wrap;
  color: white;
  padding-top: 31px;
  padding-left: 31px;
  padding-right: 31px;
  line-height: 28px;


  &:hover {
    ${Remove} {
      opacity: 1;
    }

    &:hover {
      ${Edit} {
        opacity: 1;
      }
    }
`;

// const Data = styled.div`
//   position: absolute;
//   display: inline-flex;
//   top: 277px;
//   margin-right: 0px;
// `

class ToDoInfo extends Component {
  state = {
    toggle: false,
    text: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleToggleChange = () => {
    const { toggle, text } = this.state;
    const { data, onUpdate } = this.props;
    // false -> true
    if (!toggle) {
      this.setState({
        text: data.text,
        toggle: true,
      });
    } else {
      onUpdate(data.id, { text: text });
      this.setState({
        toggle: false,
      });
    }
  };

  handleRemove = () => {
    const { data, onRemove } = this.props;
    onRemove(data.id);
  };

  render() {
    const { data } = this.props;
    const { toggle, text } = this.state;
    return (
      <div>
        <TodoItemBlock
          style={
            { backgroundColor: data.color }
            // { backgroundColor: '#c2667b' }
          }
        >
          {toggle ? (
            <textarea
              placeholder="텍스트를 입력해주세"
              maxLength="140"
              onChange={this.handleChange}
              value={text}
              name="text"
              className="textBox card_box"
            />
          ) : (
            <div>
              <div className="card_box">{data.text}</div>
              <div className="date">{data.date}</div>
            </div>
          )}
          <Remove onClick={this.handleRemove}>
            <MdDelete />
          </Remove>
          <Edit onClick={this.handleToggleChange}>
            {toggle ? <MdEdit /> : <MdEdit />}
          </Edit>
        </TodoItemBlock>
      </div>
    );
  }
}

export default ToDoInfo;
