/*eslint-disable*/
import React from 'react';
import '../../css/ModalGroup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
class ModalGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whichGroup: '',
    };
    this.selectGroupHandler = this.selectGroupHandler.bind(this);
    this.handleWhichGroup = this.handleWhichGroup.bind(this);
  }

  selectGroupHandler(e) {
    console.log('groupinfo', this.props.groupinfo);

    this.setState({ whichGroup: e.target.getAttribute('value') }, () => {
      console.log(this.state.whichGroup);

      axios
        .post('https://server.kudapach.com/grouptodocard', {
          groupid: this.state.whichGroup,
        })
        .then((res) => this.props.handleTodoCards(res.data.data))
        .then(() => this.props.handleIsGroup(this.state.whichGroup))
        .then(() => this.props.getGroupInfoHandler());
    });
  }
  handleWhichGroup() {
    this.setState(
      {
        whichGroup: 0,
      },
      async () => {
        await axios
          .get('https://server.kudapach.com/todo')
          .then((res) => this.props.handleTodoCards(res.data.data))
          .then(() => this.props.handleIsGroup(this.state.whichGroup));
      },
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
        <Link to="/mytodo" onClick={() => this.handleWhichGroup()}>
          <div className="mytodotitle">My todo</div>
        </Link>
        <div className="grayunderline" />
        {groupIdNamesInfo.map((el) => {
          return (
            <Link to="/mytodo" onClick={(e) => this.selectGroupHandler(e)}>
              <div className="groupelement" key={el[0]} value={el[0]}>
                {el[1]}
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default ModalGroup;
