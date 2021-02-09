/*eslint-disable*/

import React from 'react';
import '../../css/ManageGroup.css';
import ChangeGroup from './ChangeGroup';

class ManageGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGroupChange: false,
      isEmail1Change: false,
      isEmail2Change: false,
      isEmail3Change: false,
      isEmail4Change: false,
      groupname: 'KUDAPACH Group',
      newGroupname: 'KUDAPACH Group',
      userEmail1: 'test1@gmail.com',
      userNewEmail1: 'test1@gmail.com',
    };
    this.handleGroupToggle = this.handleGroupToggle.bind(this);
    this.handleEmail1Toggle = this.handleEmail1Toggle.bind(this);
    this.handleEmail2Toggle = this.handleEmail2Toggle.bind(this);
    this.handleEmail3Toggle = this.handleEmail3Toggle.bind(this);
    this.handleEmail4Toggle = this.handleEmail4Toggle.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleGroupToggle() {
    const { isGroupChange, groupname } = this.state;
    if (isGroupChange === false) {
      this.setState({ isGroupChange: true });
    } else {
      this.setState({ isGroupChange: false });
    }
    this.setState({ newGroupname: groupname});
  }

  handleEmail1Toggle() {
    const { isEmail1Change } = this.state;
    if (isEmail1Change === false) {
      this.setState({ isEmail1Change: true });
    } else {
      this.setState({ isEmail1Change: false });
    }
  }

  handleEmail2Toggle() {
    const { isEmail2Change } = this.state;
    if (isEmail2Change === false) {
      this.setState({ isEmail2Change: true });
    } else {
      this.setState({ isEmail2Change: false });
    }
  }

  handleEmail3Toggle() {
    const { isEmail3Change } = this.state;
    if (isEmail3Change === false) {
      this.setState({ isEmail3Change: true });
    } else {
      this.setState({ isEmail3Change: false });
    }
  }

  handleEmail4Toggle() {
    const { isEmail4Change } = this.state;
    if (isEmail4Change === false) {
      this.setState({ isEmail4Change: true });
    } else {
      this.setState({ isEmail4Change: false });
    }
  }

  render() {
    const { toggleGroupModal } = this.props;
    const { isGroupChange, newGroupname } = this.state;
    return (
      <div className="makeGroupWrapper">
        <div className="xBtn" onClick={toggleGroupModal} />
        <div className="addWrapper">
          <div className="addText">{newGroupname}</div>
          <div className="updateDeleteWrapper">
            <div className="pencil" onClick={this.handleGroupToggle}></div>
            <div className="trash"></div>
          </div>
          <button className="addBtn">Add User</button>
        </div>
        <div className="hrBox2"></div>
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
        {isGroupChange ? (
          <ChangeGroup
            handleGroupToggle={this.handleGroupToggle}
            handleChangeInput={this.handleChangeInput}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default ManageGroup;
