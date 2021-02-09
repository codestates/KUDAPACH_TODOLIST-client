import React from 'react';
import '../../css/MakeGroup.css';

class MakeGroup extends React.Component {
  render() {
    const { toggleGroupModal } = this.props;
    return (
      <div className="makeGroupWrapper">
        <div className="xBtn" onClick={toggleGroupModal} />
        <div className="addWrapper">
          <div className="addText">Make your own Group</div>
          <button id="addBtn">Add User</button>
        </div>
        <div className="groupWrapper">
          <div className="groupText">Groupname</div>
          <input className="groupInput" type="text" placeholder="Groupname" />
        </div>
        <div className="hrBox1"></div>
        <div className="useremailWrapper">
          <input
            className="useremailInput"
            type="text"
            placeholder="user email"
          />
          <input
            className="useremailInput"
            type="text"
            placeholder="user email"
          />
          <input
            className="useremailInput"
            type="text"
            placeholder="user email"
          />
          <input
            className="useremailInput"
            type="text"
            placeholder="user email"
          />
          <button id="saveBtn">SAVE</button>
        </div>
      </div>
    );
  }
}

export default MakeGroup;
