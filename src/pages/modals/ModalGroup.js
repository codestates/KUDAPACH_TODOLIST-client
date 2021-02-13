import React from 'react';
import '../../css/ModalGroup.css';
import { Link } from 'react-router-dom';

class ModalGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whichGroup: '',
    };
    this.selectGroupHandler = this.selectGroupHandler.bind(this);
  }

  selectGroupHandler(e) {
    this.setState({ whichGroup: e.target.getAttribute('value') }, () =>
      this.props.handleGroupName(this.state.whichGroup),
    );
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
        <Link to="/mytodo">
          <div className="mytodotitle">My todo</div>
        </Link>
        <div className="grayunderline" />
        {groupIdNamesInfo.map((el) => {
          return (
            <div
              className="groupelement"
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
