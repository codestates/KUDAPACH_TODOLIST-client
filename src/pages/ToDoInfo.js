import React, { Component } from 'react';
import { MdDelete, MdEdit, MdExpandMore } from 'react-icons/md';
import { CirclePicker } from 'react-color';
/* eslint-disable */
import '../css/TodoInfo.css';

class ToDoColorChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      ... this.props.data
    };
  }

  handleChangeComplete = (color) => {
    this.setState({
      color : color.hex,
    },() => this.props.handleColorBox(this.state.color));
  };

  handleColorToggleChange = () => {
    const { toggle } = this.state;
    if (!toggle) {
      this.setState({
        toggle: true,
      });
    } else {
      this.setState({
        toggle: false,
      });
    }
  };

  render() {
    const { toggle } = this.state;
    return (
      <div>
        {toggle ? (
          <div>
            <div className="bg_color"> </div>
          <CirclePicker onChange={this.handleChangeComplete} />
          </div>
        ) : (
          <div className='colorSetting'>
            <MdExpandMore />
          </div>
        )}
        <div className='colorSetting' onClick={this.handleColorToggleChange}>
          <MdExpandMore />
        </div>
      </div>
    );
  }
}

class ToDoInfo extends Component {
  state = {
    toggle: false,
    text: '',
    color: this.props.data.color
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

  handleColorBox = (color) => {
    this.setState({
      color
    })
  }



  render() {
    const { data } = this.props;
    const { toggle, text } = this.state;
    return (
      <div>
        <div
            className='todoboxBlock'
          style={
            { backgroundColor: this.state.color }
          }
        >
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
          <div
              className='remove'
              onClick={this.handleRemove}>
            <MdDelete />
          </div>
          <div
              className='edit'
              onClick={this.handleToggleChange}>
            {toggle ? <MdEdit /> : <MdEdit />}
          </div>
          <ToDoColorChange data={data} handleColorBox={this.handleColorBox}/>
        </div>
      </div>
    );
  }
}

export default ToDoInfo;
