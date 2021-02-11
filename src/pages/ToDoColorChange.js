import React, { Component } from 'react';
import { CirclePicker } from 'react-color';
import { MdExpandMore } from 'react-icons/md';
import '../css/TodoInfo.css';

class ToDoColorChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      color: '',
    };
  }

  handleChangeComplete = (color) => {
    this.setState(
      {
        color: color.hex,
      },
      () => this.props.handleColorBox(this.props.data.id, this.state.color),
    );
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
          <div className="colorSetting">
            <MdExpandMore />
          </div>
        )}
        <div className="colorSetting" onClick={this.handleColorToggleChange}>
          <MdExpandMore />
        </div>
      </div>
    );
  }
}

export default ToDoColorChange;
