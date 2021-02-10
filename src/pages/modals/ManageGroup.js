import React from 'react';
import '../../css/ManageGroup.css';
import ChangeGroup from './ChangeGroup';
import ChangeUserMail1 from './ChangeUserMail1';
import ChangeUserMail2 from './ChangeUserMail2';
import ChangeUserMail3 from './ChangeUserMail3';
import ChangeUserMail4 from './ChangeUserMail4';
import swal from 'sweetalert';

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
      userEmail2: 'test2@gmail.com',
      userNewEmail2: 'test2@gmail.com',
      userEmail3: 'test3@gmail.com',
      userNewEmail3: 'test3@gmail.com',
      userEmail4: 'test4@gmail.com',
      userNewEmail4: 'test4@gmail.com',
      user1check: true,
      user2check: true,
      user3check: true,
      user4check: true,
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
  }

  handleChangeInput = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleEmail1Delete() {
    this.setState({ user1check: false });
  }
  handleEmail2Delete() {
    this.setState({ user2check: false });
  }
  handleEmail3Delete() {
    this.setState({ user3check: false });
  }
  handleEmail4Delete() {
    this.setState({ user4check: false });
  }

  handleGroupDelete() {
    const { toggleGroupModal, groupFalseHandler } = this.props;
    swal({
      title: 'Delete complete',
      text: 'Group delete is completed',
      icon: 'success',
      button: 'confirm',
    }).then(() => {
      groupFalseHandler();
      toggleGroupModal();
    });
  }

  handleGroupSave() {
    const { toggleGroupModal } = this.props;
    swal({
      title: 'Cool!',
      text: 'All thing is saved',
      icon: 'success',
      button: 'confirm',
    }).then(() => {
      toggleGroupModal();
    });
  }

  handleGroupToggle() {
    const { isGroupChange, groupname } = this.state;
    if (isGroupChange === false) {
      this.setState({ isGroupChange: true });
    } else {
      this.setState({ isGroupChange: false });
    }
    this.setState({ newGroupname: groupname });
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

  render() {
    const { toggleGroupModal } = this.props;
    const {
      isGroupChange,
      newGroupname,
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
          <div className="addText">{newGroupname}</div>
          <div className="updateDeleteWrapper">
            <div className="pencil" onClick={this.handleGroupToggle}></div>
            <div className="trash" onClick={this.handleGroupDelete}></div>
          </div>
          <button className="confirmAddBtn">Add User</button>
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
