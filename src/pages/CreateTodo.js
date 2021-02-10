import React, { Component } from 'react';
import '../css/CreateTodo.css';
import GroupSvg from '../asset/img/MyTodo/GroupSvg';

class CreateTodo extends Component {
  state = {
    text: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      text: '',
      date: new Date().toISOString().substring(0, 10),
    });
  };
  render() {
    // const { text } = this.state;
    return (
      <>
        <div className="CreateButton" onClick={this.handleSubmit}>
          <form onSubmit={this.handleSubmit}>
            {/*<input value={text} name="text" placeholder="..입력" onChange={this.handleChange}></input>*/}
            {/*<button type="submit">추가</button>*/}
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
