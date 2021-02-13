/* eslint-disable */
import React, { Component } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import '../css/TodoInfo.css';
import ToDoColorChange from './ToDoColorChange';

class ToDoInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      text: '',
      color: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleToggleChange = () => {
    const { toggle, text } = this.state;
    const { data, onUpdate, color } = this.props;
    if (!toggle) {
      this.setState({
        text: data.text,
        toggle: true,
      });
    } else {
      onUpdate(data.id, text, color);
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
    let date = new Date(data.updatedAt);

    console.log(data);
    return (
      <div>
        <div className="todoboxBlock" style={{ backgroundColor: data.color }}>
          {toggle ? (
            <textarea
              placeholder="텍스트를 입력해주세요"
              maxLength="140"
              onChange={this.handleChange}
              value={text}
              name="text"
              className="textBox card_box"
            />
          ) : (
            <div>
              <div className="card_box">{data.text}</div>
              <div className="date">{data.updatedAt}</div>
            </div>
          )}
          <div className="remove" onClick={this.handleRemove}>
            <MdDelete />
          </div>
          <div className="edit" onClick={this.handleToggleChange}>
            {toggle ? <MdEdit /> : <MdEdit />}
          </div>
          <ToDoColorChange
            data={data}
            handleColorBox={this.props.onColorChange}
          />
        </div>
      </div>
    );
  }
}

export default ToDoInfo;
