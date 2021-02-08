import React from 'react';
import SingleUserNav from './SingleUserNav';
import '../css/Mypage.css';
import { phoneNumValidation } from '../pages/ValidationFun';
import swal from 'sweetalert';
// const saltedSha256 = require('salted-sha256');

class Mypage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'test@test.com',
      username: 'kudapach',
      mobile: '01012345678',
      prevPassword: '11111111',
      currentPassword: '',
      password: '',
      passwordConfirm: '',
      // 추후 RDS에서 가져온 DATA로 설정
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.checkChangedInfo = this.checkChangedInfo.bind(this);
  }

  handleChangeInput = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  checkChangedInfo() {
    const {
      username,
      mobile,
      prevPassword,
      currentPassword,
      password,
      passwordConfirm,
    } = this.state;
    // 비밀번호를 변경한 경우 true
    if (
      username &&
      phoneNumValidation(mobile) &&
      password &&
      currentPassword === prevPassword &&
      password === passwordConfirm
    ) {
      return true;
    }
    // username, mobile만 변경한 경우 true
    if (
      username &&
      phoneNumValidation(mobile) &&
      !currentPassword &&
      !password &&
      !passwordConfirm
    ) {
      return true;
    } else {
      return false;
    }
  }

  handleSaveButton() {
    if (this.checkChangedInfo() === false) {
      swal({
        title: 'Some Information is wrong',
        text: 'Please check your Information',
        icon: 'warning',
        button: 'confirm',
      });
    }
    if (this.checkChangedInfo() === true) {
      // console.log(this.state);
      swal({
        title: 'Cool!',
        text: 'Information is changed',
        icon: 'success',
        button: 'confirm',
      });
    }
  }

  render() {
    const {
      email,
      username,
      mobile,
      prevPassword,
      currentPassword,
      password,
      passwordConfirm,
    } = this.state;

    return (
      <div>
        <SingleUserNav />
        <div className="mainSide">
          <div className="mypageMainWrapper">
            <div className="userInfoWrapper">
              <div className="mypageText">MY PAGE</div>
              <div className="useremailText">{email}</div>
              <input
                type="text"
                className={
                  username.length === 0
                    ? ''
                    : !username
                    ? 'tryAgain'
                    : 'allGood'
                }
                value={username}
                onChange={this.handleChangeInput('username')}
              />
              <input
                type="text"
                className={
                  mobile.length === 0
                    ? ''
                    : !phoneNumValidation(mobile)
                    ? 'tryAgain'
                    : 'allGood'
                }
                value={mobile}
                onChange={this.handleChangeInput('mobile')}
              />
            </div>
            <div className="changePasswordWrapper">
              <div className="mypageText">CHANGE PASSWORD</div>
              <input
                type="password"
                className={
                  currentPassword.length === 0
                    ? ''
                    : prevPassword !== currentPassword
                    ? 'tryAgain'
                    : 'allGood'
                }
                placeholder="Current Password"
                onChange={this.handleChangeInput('currentPassword')}
              />
              <input
                type="password"
                className={
                  password.length === 0
                    ? ''
                    : password.length < 8
                    ? 'tryAgain'
                    : 'allGood'
                }
                placeholder="New Password"
                onChange={this.handleChangeInput('password')}
              />
              <input
                type="password"
                className={
                  passwordConfirm.length === 0
                    ? ''
                    : password !== passwordConfirm
                    ? 'tryAgain'
                    : 'allGood'
                }
                placeholder="Confirm Password"
                onChange={this.handleChangeInput('passwordConfirm')}
              />
              <button
                className={
                  this.checkChangedInfo() === true
                    ? 'infoConfirm'
                    : 'notConfirm'
                }
                onClick={this.handleSaveButton}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mypage;
