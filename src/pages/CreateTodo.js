import React from 'react';
import '../css/CreateTodo.css';
import GroupSvg from '../asset/img/MyTodo/GroupSvg';
function CreateTodo() {
  return (
    <div className="Box__container">
      <div className="CreateButton">
        <div className="pluse_icon">
          <GroupSvg className="svg" fill="#9292A7" />
        </div>
        <div className="create_text">
          CREATE NEW
          <br />
          TODO LIST
        </div>
      </div>
      <div className="CreateButton"> </div>
      <div className="CreateButton"> </div>
      <div className="CreateButton"> </div>
      <div className="CreateButton"> </div>
      <div className="CreateButton"> </div>
    </div>
  );
}

export default CreateTodo;
