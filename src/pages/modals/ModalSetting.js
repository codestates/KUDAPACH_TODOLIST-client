import React from 'react';
import '../../css/ModalSetting.css';

class ModalSetting extends React.Component {
  render() {
    return (
      <div className="settingWrapper">
        <div className="accountText">Account</div>
        <div className="hrBox"></div>
        <div className="userBox">
          <div className="userLogo" src="user.svg" alt="" />
          <div className="userInfo">
            <div className="userName">kudapach</div>
            <div className="userEmail">kudapach@gmail.com</div>
          </div>
        </div>
        <div className="hrBox"></div>
        <div className="mypagesetText">My Page</div>
        <div className="groupsetText">Group Setting</div>
        <div className="signoutText">Sign Out</div>
      </div>
    );
  }
}

export default ModalSetting;
