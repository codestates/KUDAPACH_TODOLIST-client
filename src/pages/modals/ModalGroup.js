import React from 'react';
import '../../css/ModalSetting.css';

class ModalGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whichGroup: 0,
    };
    this.selectGroupHandler = this.selectGroupHandler.bind(this);
  }

  selectGroupHandler(e) {
    this.setState({ whichGroup: e.target.getAttribute('value') });
  }

  render() {
    const { groupinfo } = this.props;
    // groupid와 name이 각 다른 객체에 있어 map으로 component를 출력하기 힘드므로
    // 2중배열로 다시금 만들어냄 (추후 리팩토링 가능시 부탁드립니다. 저는 이 이상은..ㅜ)
    let groupIdNamesInfo = [];
    for (let i = 0; i < groupinfo.groups.length; i++) {
      let temp = [];
      temp.push(groupinfo.groups[i].groupid);
      temp.push(groupinfo.groupnames[i].groupname);
      groupIdNamesInfo.push(temp);
      temp = [];
    }
    // console.log(groupIdNamesInfo); // 2중배열로 만들어진 것 확인
    return (
      <div className="GroupWrapper">
        <div className="accountText">Group</div>
        <div className="signoutText">My todo</div>
        <div className="hrBox"></div>
        {groupIdNamesInfo.map((el) => {
          return (
            <div
              className="signoutText"
              key={el[0]}
              value={el[0]}
              onClick={(e) => this.selectGroupHandler(e)}
            >
              {el[1]}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ModalGroup;
