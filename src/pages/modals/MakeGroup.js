import React from 'react';
import '../../css/MakeGroup.css';
import swal from 'sweetalert';
import axios from 'axios';

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
    if (usermail1) {
      this.setState({ user2check: true });
    }
    if (usermail2) {
      this.setState({ user3check: true });
    }
    if (usermail3) {
      this.setState({ user4check: true });
    }
    if (!groupname) {
      swal({
        title: 'Groupname is empty',
        text: 'Please fill out groupname fields',
        icon: 'warning',
        button: 'confirm',
      });
    } else if (groupname && usermail1 && usermail2 && usermail3 && usermail4) {
      swal({
        title: 'Maximum is 4 users',
        text: 'You cant add more users',
        icon: 'warning',
        button: 'confirm',
      });
    }
  };

  handleGroupSave = () => {
    const {
      toggleGroupModal,
      handleUsernameEmail,
      handleGroupInfo,
      handleIsGroup,
      getGroupInfoHandler,
    } = this.props;
    const {
      groupname,
      usermail1,
      usermail2,
      usermail3,
      usermail4,
    } = this.state;
    if ((groupname && usermail1) || usermail2 || usermail3 || usermail4) {
      let list = [usermail1, usermail2, usermail3, usermail4];
      const emails = [];
      for (let el of list) {
        if (el.length !== 0) {
          emails.push(el);
        }
      }
      axios
        .post(
          'https://server.kudapach.com/groupsetting/create',
          {
            groupname,
            emails,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then((res) => {
          if (res.status === 200) {
            handleIsGroup(res.data.groupid);
            getGroupInfoHandler(res.data.groupid);
            swal({
              title: 'Success!',
              text: 'Group is made',
              icon: 'success',
              button: 'confirm',
            }).then(() => {
              toggleGroupModal();
              handleGroupInfo('create');
              handleUsernameEmail();
            });
          }
        })
        .catch((err) => {
          if (err.response.status === 409) {
            swal({
              title: 'Invalid email exists',
              text: 'Please check emails',
              icon: 'warning',
              button: 'confirm',
            });
          }
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
                  : usermail1
                  ? 'allGood'
                  : 'tryAgain'
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
                  : usermail2
                  ? 'allGood'
                  : 'tryAgain'
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
                  : usermail3
                  ? 'allGood'
                  : 'tryAgain'
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
                  : usermail4
                  ? 'allGood'
                  : 'tryAgain'
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
              (groupname && user1check) || user2check || user3check || usermail4
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
