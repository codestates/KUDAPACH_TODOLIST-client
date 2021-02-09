import React from 'react';
import '../../css/ManageGroup.css';

class ManageGroup extends React.Component {
  render() {
    const { toggleGroupModal } = this.props;
    return (
      <div className="makeGroupWrapper">
        <div className="xBtn" onClick={toggleGroupModal} />
        <div className="addWrapper">
          <div className="addText">KUDAPACH Group</div>
          <div className="updateDeleteWrapper">
            <div className="pencil"></div>
            <div className="trash"></div>
          </div>
          <button className="addBtn">Add User</button>
        </div>
        <div className="hrBox1"></div>
        <div className="useremailWrapper">
          <div className="useremailInput">
            <div className="groupUserEmail">test1@gmail.com</div>
            <div className="updateDeleteWrapperInMail">
              <div className="pencil"></div>
              <div className="trash"></div>
            </div>
          </div>
          <div className="useremailInput">
            <div className="groupUserEmail">test2@gmail.com</div>
            <div className="updateDeleteWrapperInMail">
              <div className="pencil"></div>
              <div className="trash"></div>
            </div>
          </div>
          <div className="useremailInput">
            <div className="groupUserEmail">test3@gmail.com</div>
            <div className="updateDeleteWrapperInMail">
              <div className="pencil"></div>
              <div className="trash"></div>
            </div>
          </div>
          <div className="useremailInput">
            <div className="groupUserEmail">test4@gmail.com</div>
            <div className="updateDeleteWrapperInMail">
              <div className="pencil"></div>
              <div className="trash"></div>
            </div>
          </div>
          <button className="saveBtn">SAVE</button>
        </div>
      </div>
    );
  }
}

export default ManageGroup;
