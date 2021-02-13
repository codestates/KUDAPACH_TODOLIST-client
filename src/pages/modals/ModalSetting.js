import React from 'react';
import '../../css/ModalSetting.css';
import { Link } from 'react-router-dom';

class ModalSetting extends React.Component {
  render() {
    const {
      toggleGroupModalWithSetting,
      handleSignOut,
      groupinfo,
      userinfo,
    } = this.props;
    return (
      <div className="settingWrapper">
        <div className="accountText">Account</div>
        <div className="hrBox" />
        <div className="userBox">
          <div className="userLogo" src="user.svg" alt="user logo img" />
          <div className="userInfo">
            <div className="userName">{userinfo.username}</div>
            <div className="userEmail">{groupinfo.data.email}</div>
          </div>
        </div>
        <div className="hrBox" />
        <Link to="/mypage" className="mypagesetText">
          <div>My Page</div>
        </Link>
        <div className="groupsetText" onClick={toggleGroupModalWithSetting}>
          Group Setting
        </div>
        <div className="signoutText" onClick={handleSignOut}>
          Sign Out
        </div>
      </div>
    );
  }
}

export default ModalSetting;
