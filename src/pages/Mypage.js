import React from 'react';
import SingleUserNav from './SingleUserNav';
import '../css/Mypage.css';

class Mypage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useremail: 'test@test.com',
      username: 'kudapach',
      usermobile: '01012345678',
      // 추후 RDS에서 가져온 DATA로 state설정
    };
  }

  // handleSaveButton() {
  //
  // }

  render() {
    const { useremail, username, usermobile } = this.state;

    return (
      <div>
        <SingleUserNav />
        <div className="mainSide">
          <div className="mypageMainWrapper">
            <div className="userInfoWrapper">
              <div className="mypageText">MY PAGE</div>
              <div className="useremailText">{useremail}</div>
              <input type="text" value={username} />
              <input type="text" value={usermobile} />
            </div>
            <div className="changePasswordWrapper">
              <div className="mypageText">CHANGE PASSWORD</div>
              <input type="password" placeholder="Current Password" />
              <input type="password" placeholder="New Password" />
              <input type="password" placeholder="Confirm Password" />
              <button className="infoConfirm">SAVE</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mypage;
