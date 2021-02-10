import React from 'react';
import '../../css/MakeGroup.css';
import { emailValidation } from '../../pages/ValidationFun';
import swal from 'sweetalert';

class MakeGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupname: '',
      usermail1: '',
      usermail2: '',
      usermail3: '',
      usermail4: '',
      user1check: false,
      user2check: false,
      user3check: false,
      user4check: false,
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleGroupSave = this.handleGroupSave.bind(this);
  }
  // input value를 가져오는 함수
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleAddUser = () => {
    const {
      groupname,
      usermail1,
      usermail2,
      usermail3,
      usermail4,
    } = this.state;
    if (groupname) {
      this.setState({ user1check: true });
    }
    if (emailValidation(usermail1)) {
      this.setState({ user2check: true });
    }
    if (emailValidation(usermail2)) {
      this.setState({ user3check: true });
    }
    if (emailValidation(usermail3)) {
      this.setState({ user4check: true });
    }
    if (!groupname) {
      swal({
        title: 'Groupname is empty',
        text: 'Please fill out groupname fields',
        icon: 'warning',
        button: 'confirm',
      });
    } else if (
      groupname &&
      emailValidation(usermail1) &&
      emailValidation(usermail2) &&
      emailValidation(usermail3) &&
      emailValidation(usermail4)
    ) {
      swal({
        title: 'Maximum is 4 users',
        text: 'You cant add more users',
        icon: 'warning',
        button: 'confirm',
      });
    } else if (
      (usermail1 && !emailValidation(usermail1)) ||
      (usermail2 && !emailValidation(usermail2)) ||
      (usermail3 && !emailValidation(usermail3))
    ) {
      swal({
        title: 'Email is wrong',
        text: 'Please check users email',
        icon: 'warning',
        button: 'confirm',
      });
    }
  };

  handleGroupSave = () => {
    const { toggleGroupModal, groupTrueHandler } = this.props;
    const {
      groupname,
      usermail1,
      usermail2,
      usermail3,
      usermail4,
    } = this.state;
    if (
      groupname &&
      emailValidation(usermail1) &&
      emailValidation(usermail2) &&
      emailValidation(usermail3) &&
      emailValidation(usermail4) &&
      usermail4
    ) {
      swal({
        title: 'Cool!',
        text: 'Group is made',
        icon: 'success',
        button: 'confirm',
      }).then(() => {
        groupTrueHandler();
        toggleGroupModal();
      });
    } else {
      swal({
        title: 'A field is empty',
        text: 'Please fill out all required fields',
        icon: 'warning',
        button: 'confirm',
      });
    }
  };

  render() {
    const { toggleGroupModal } = this.props;
    const {
      groupname,
      user1check,
      user2check,
      user3check,
      user4check,
      usermail1,
      usermail2,
      usermail3,
      usermail4,
    } = this.state;
    return (
      <div className="makeGroupWrapper">
        <div className="xBtn" onClick={toggleGroupModal} />
        <div className="addWrapper">
          <div className="addText">Make your own Group</div>
          <button
            className={groupname ? 'confirmAddBtn' : 'addBtn'}
            onClick={this.handleAddUser}
          >
            Add User
          </button>
        </div>
        <div className="groupWrapper">
          <div className="groupText">Groupname</div>
          <input
            className={groupname ? 'allGoodGroupInput' : 'groupInput'}
            type="text"
            placeholder="Groupname"
            onChange={this.handleInputValue('groupname')}
          />
        </div>
        <div className="hrBox1"></div>
        <div className="useremailWrapper">
          {user1check === true ? (
            <input
              className={
                usermail1.length === 0
                  ? 'useremailInput'
                  : !emailValidation(usermail1)
                  ? 'tryAgain'
                  : 'allGood'
              }
              type="text"
              placeholder="user email"
              onChange={this.handleInputValue('usermail1')}
            />
          ) : (
            <div className="blankDiv" />
          )}
          {user2check === true ? (
            <input
              className={
                usermail2.length === 0
                  ? 'useremailInput'
                  : !emailValidation(usermail2)
                  ? 'tryAgain'
                  : 'allGood'
              }
              type="text"
              placeholder="user email"
              onChange={this.handleInputValue('usermail2')}
            />
          ) : (
            <div className="blankDiv" />
          )}
          {user3check === true ? (
            <input
              className={
                usermail3.length === 0
                  ? 'useremailInput'
                  : !emailValidation(usermail3)
                  ? 'tryAgain'
                  : 'allGood'
              }
              type="text"
              placeholder="user email"
              onChange={this.handleInputValue('usermail3')}
            />
          ) : (
            <div className="blankDiv" />
          )}
          {user4check === true ? (
            <input
              className={
                usermail4.length === 0
                  ? 'useremailInput'
                  : !emailValidation(usermail4)
                  ? 'tryAgain'
                  : 'allGood'
              }
              type="text"
              placeholder="user email"
              onChange={this.handleInputValue('usermail4')}
            />
          ) : (
            <div className="blankDiv" />
          )}
          <button
            className={
              groupname &&
              user1check &&
              user2check &&
              user3check &&
              emailValidation(usermail4)
                ? 'confirmSaveBtn'
                : 'saveBtn'
            }
            onClick={this.handleGroupSave}
          >
            SAVE
          </button>
        </div>
      </div>
    );
  }
}

export default MakeGroup;
