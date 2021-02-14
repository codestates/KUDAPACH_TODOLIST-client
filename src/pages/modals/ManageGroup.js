/*eslint-disable*/

import React from 'react';
import '../../css/ManageGroup.css';
import ChangeGroup from './ChangeGroup';
import ChangeUserMail1 from './ChangeUserMail1';
import ChangeUserMail2 from './ChangeUserMail2';
import ChangeUserMail3 from './ChangeUserMail3';
import ChangeUserMail4 from './ChangeUserMail4';
import swal from 'sweetalert';
import axios from 'axios';

class ManageGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGroupChange: false,
      isEmail1Change: false,
      isEmail2Change: false,
      isEmail3Change: false,
      isEmail4Change: false,
      groupid: this.props.currentGroupId,
      groupname: this.props.groupData.groupname,
      userEmail1: '',
      userNewEmail1: '',
      userEmail2: '',
      userNewEmail2: '',
      userEmail3: '',
      userNewEmail3: '',
      userEmail4: '',
      userNewEmail4: '',
      user1check: true,
      user2check: true,
      user3check: true,
      user4check: true,
      groupDelete: false,
    };
    this.handleGroupToggle = this.handleGroupToggle.bind(this);
    this.handleEmail1Toggle = this.handleEmail1Toggle.bind(this);
    this.handleEmail2Toggle = this.handleEmail2Toggle.bind(this);
    this.handleEmail3Toggle = this.handleEmail3Toggle.bind(this);
    this.handleEmail4Toggle = this.handleEmail4Toggle.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleGroupDelete = this.handleGroupDelete.bind(this);
    this.handleEmail1Delete = this.handleEmail1Delete.bind(this);
    this.handleEmail2Delete = this.handleEmail2Delete.bind(this);
    this.handleEmail3Delete = this.handleEmail3Delete.bind(this);
    this.handleEmail4Delete = this.handleEmail4Delete.bind(this);
    this.handleGroupSave = this.handleGroupSave.bind(this);
    this.handleAddMail = this.handleAddMail.bind(this);
    this.renderInfoToState = this.renderInfoToState.bind(this);
  }

  componentDidMount() {
    // 처음에 그룹의 멤버 수 만큼 state에 mail 덧씌움
    this.renderInfoToState();
  }

  renderInfoToState() {
    const { groupData } = this.props;
    if (groupData.emails.length === 4) {
      this.setState({
        userEmail1: groupData.emails[0].email,
        userNewEmail1: groupData.emails[0].email,
        userEmail2: groupData.emails[1].email,
        userNewEmail2: groupData.emails[1].email,
        userEmail3: groupData.emails[2].email,
        userNewEmail3: groupData.emails[2].email,
        userEmail4: groupData.emails[3].email,
        userNewEmail4: groupData.emails[3].email,
      });
    }
    if (groupData.emails.length === 3) {
      this.setState({
        userEmail1: groupData.emails[0].email,
        userNewEmail1: groupData.emails[0].email,
        userEmail2: groupData.emails[1].email,
        userNewEmail2: groupData.emails[1].email,
        userEmail3: groupData.emails[2].email,
        userNewEmail3: groupData.emails[2].email,
        user4check: false,
      });
    }
    if (groupData.emails.length === 2) {
      this.setState({
        userEmail1: groupData.emails[0].email,
        userNewEmail1: groupData.emails[0].email,
        userEmail2: groupData.emails[1].email,
        userNewEmail2: groupData.emails[1].email,
        user3check: false,
        user4check: false,
      });
    }
    if (groupData.emails.length === 1) {
      this.setState({
        userEmail1: groupData.emails[0].email,
        userNewEmail1: groupData.emails[0].email,
        user2check: false,
        user3check: false,
        user4check: false,
      });
    }
  }

  handleChangeInput = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleEmail1Delete() {
    this.setState({ user1check: false, userNewEmail1: '' });
  }
  handleEmail2Delete() {
    this.setState({ user2check: false, userNewEmail2: '' });
  }
  handleEmail3Delete() {
    this.setState({ user3check: false, userNewEmail3: '' });
  }
  handleEmail4Delete() {
    this.setState({ user4check: false, userNewEmail4: '' });
  }

  handleGroupDelete() {
    const { toggleGroupModal } = this.props;
    axios
      .post('https://server.kudapach.com/groupsetting/edit', {
        groupDelete: true,
        groupid: this.state.groupid,
      })
      .then(
        swal({
          title: 'Success',
          text: 'Group has been deleted',
          icon: 'success',
          button: 'confirm',
        }),
      )
      .then(() => {
        toggleGroupModal();
        this.props.handleIsGroup(0);
      });
  }

  handleGroupSave() {
    const { toggleGroupModal } = this.props;
    const {
      groupDelete,
      groupid,
      groupname,
      userNewEmail1,
      userNewEmail2,
      userNewEmail3,
      userNewEmail4,
      user1check,
      user2check,
      user3check,
      user4check,
    } = this.state;
    if (
      (user1check && !userNewEmail1) ||
      (user2check && !userNewEmail2) ||
      (user3check && !userNewEmail3) ||
      (user4check && !userNewEmail4)
    ) {
      swal({
        title: 'A field is empty',
        text: 'Please fill out all required fields',
        icon: 'warning',
        button: 'confirm',
      });
    } else {
      let list = [userNewEmail1, userNewEmail2, userNewEmail3, userNewEmail4];
      const emails = [];
      for (let el of list) {
        if (el.length !== 0) {
          emails.push(el);
        }
      }
      axios
        .post(
          'https://server.kudapach.com/groupsetting/edit',
          {
            groupDelete: groupDelete,
            groupid: groupid,
            groupname: groupname,
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
            swal({
              title: 'Success!',
              text: 'Everything has been updated',
              icon: 'success',
              button: 'confirm',
            }).then(() => {
              toggleGroupModal();
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
    }
  }

  handleGroupToggle() {
    const { isGroupChange, groupname } = this.state;
    if (isGroupChange === false) {
      this.setState({ isGroupChange: true });
    } else {
      this.setState({ isGroupChange: false });
    }
    this.setState({ groupname });
  }

  handleEmail1Toggle() {
    const { isEmail1Change, userEmail1 } = this.state;
    if (isEmail1Change === false) {
      this.setState({ isEmail1Change: true });
    } else {
      this.setState({ isEmail1Change: false });
    }
    this.setState({ userNewEmail1: userEmail1 });
  }

  handleEmail2Toggle() {
    const { isEmail2Change, userEmail2 } = this.state;
    if (isEmail2Change === false) {
      this.setState({ isEmail2Change: true });
    } else {
      this.setState({ isEmail2Change: false });
    }
    this.setState({ userNewEmail2: userEmail2 });
  }

  handleEmail3Toggle() {
    const { isEmail3Change, userEmail3 } = this.state;
    if (isEmail3Change === false) {
      this.setState({ isEmail3Change: true });
    } else {
      this.setState({ isEmail3Change: false });
    }
    this.setState({ userNewEmail3: userEmail3 });
  }

  handleEmail4Toggle() {
    const { isEmail4Change, userEmail4 } = this.state;
    if (isEmail4Change === false) {
      this.setState({ isEmail4Change: true });
    } else {
      this.setState({ isEmail4Change: false });
    }
    this.setState({ userNewEmail4: userEmail4 });
  }

  handleAddMail() {
    const { user1check, user2check, user3check, user4check } = this.state;
    if (user1check === false) {
      this.setState({
        userEmail1: '',
        userNewEmail1: '',
        user1check: true,
      });
    } else if (user2check === false) {
      this.setState({
        userEmail2: '',
        userNewEmail2: '',
        user2check: true,
      });
    } else if (user3check === false) {
      this.setState({
        userEmail3: '',
        userNewEmail3: '',
        user3check: true,
      });
    } else if (user4check === false) {
      this.setState({
        userEmail4: '',
        userNewEmail4: '',
        user4check: true,
      });
    } else {
      swal({
        title:
          'You have already exceeded the maximum number of members in a group.',
        text: 'Unable to add more users.',
        icon: 'warning',
        button: 'confirm',
      });
    }
  }

  render() {
    const { toggleGroupModal } = this.props;
    const {
      isGroupChange,
      groupname,
      isEmail1Change,
      userNewEmail1,
      isEmail2Change,
      userNewEmail2,
      isEmail3Change,
      userNewEmail3,
      isEmail4Change,
      userNewEmail4,
      user1check,
      user2check,
      user3check,
      user4check,
    } = this.state;
    return (
      <div className="makeGroupWrapper">
        <div className="xBtn" onClick={toggleGroupModal} />
        <div className="addWrapper">
          <div className="addText">{groupname}</div>
          <div className="updateDeleteWrapper">
            <div className="pencil" onClick={this.handleGroupToggle}></div>
            <div className="trash" onClick={this.handleGroupDelete}></div>
          </div>
          <button className="confirmAddBtn" onClick={this.handleAddMail}>
            Add User
          </button>
        </div>
        <div className="hrBox2"></div>
        <div className="useremailWrapper">
          {user1check === true ? (
            <div className="useremailInput">
              <div className="groupUserEmail">{userNewEmail1}</div>
              <div className="updateDeleteWrapperInMail">
                <div className="pencil" onClick={this.handleEmail1Toggle}></div>
                <div className="trash" onClick={this.handleEmail1Delete}></div>
              </div>
            </div>
          ) : (
            <div className="blankDiv2" />
          )}
          {user2check === true ? (
            <div className="useremailInput">
              <div className="groupUserEmail">{userNewEmail2}</div>
              <div className="updateDeleteWrapperInMail">
                <div className="pencil" onClick={this.handleEmail2Toggle}></div>
                <div className="trash" onClick={this.handleEmail2Delete}></div>
              </div>
            </div>
          ) : (
            <div className="blankDiv2" />
          )}
          {user3check === true ? (
            <div className="useremailInput">
              <div className="groupUserEmail">{userNewEmail3}</div>
              <div className="updateDeleteWrapperInMail">
                <div className="pencil" onClick={this.handleEmail3Toggle}></div>
                <div className="trash" onClick={this.handleEmail3Delete}></div>
              </div>
            </div>
          ) : (
            <div className="blankDiv2" />
          )}
          {user4check === true ? (
            <div className="useremailInput">
              <div className="groupUserEmail">{userNewEmail4}</div>
              <div className="updateDeleteWrapperInMail">
                <div className="pencil" onClick={this.handleEmail4Toggle}></div>
                <div className="trash" onClick={this.handleEmail4Delete}></div>
              </div>
            </div>
          ) : (
            <div className="blankDiv2" />
          )}
          <button className="confirmSaveBtn" onClick={this.handleGroupSave}>
            SAVE
          </button>
        </div>
        {isGroupChange ? (
          <ChangeGroup
            handleGroupToggle={this.handleGroupToggle}
            handleChangeInput={this.handleChangeInput}
          />
        ) : (
          <div />
        )}
        {isEmail1Change ? (
          <ChangeUserMail1
            handleEmail1Toggle={this.handleEmail1Toggle}
            handleChangeInput={this.handleChangeInput}
          />
        ) : (
          <div />
        )}
        {isEmail2Change ? (
          <ChangeUserMail2
            handleEmail2Toggle={this.handleEmail2Toggle}
            handleChangeInput={this.handleChangeInput}
          />
        ) : (
          <div />
        )}
        {isEmail3Change ? (
          <ChangeUserMail3
            handleEmail3Toggle={this.handleEmail3Toggle}
            handleChangeInput={this.handleChangeInput}
          />
        ) : (
          <div />
        )}
        {isEmail4Change ? (
          <ChangeUserMail4
            handleEmail4Toggle={this.handleEmail4Toggle}
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
