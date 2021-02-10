import React from 'react';
import '../../css/GroupSetting.css';
import MakeGroup from './MakeGroup';
import ManageGroup from './ManageGroup';
import axios from 'axios';

class GroupSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isGroup: 0,
      isGroup: this.props.groupinfo.data.group, // 0이면 그룹이 없는 상태 (그룹 갯수)
      groupName: 'java', // 현재 어떤 groupid의 상태로 setting을 진행할 건지, 이거 어떻게 특정해서 받아와야하죠..?
      // groupData: null,
      // 아래는 테스트를 위한 가짜 Data 임 실제는 위의 코드
      groupData: {
        groupname: 'kudapach',
        emails: [
          {
            email: 'hello@email.com',
          },
          {
            email: 'hi@email.com',
          },
          {
            email: 'nop@email.com',
          },
        ],
      },
      // 여기까지 가짜 Data
    };
    this.groupFalseHandler = this.groupFalseHandler.bind(this);
    this.groupTrueHandler = this.groupTrueHandler.bind(this);
  }

  getGroupInfoHandler() {
    axios
      .post(
        'https://server.kudapach.com/groupsetting',
        {
          groupname: this.state.groupName,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((res) => {
        if (res.status === 200) {
          this.setState({ groupData: res });
        }
      });
  }

  groupFalseHandler() {
    const { isGroup } = this.state;
    if (isGroup > 0) {
      this.setState({ isGroup: isGroup - 1 });
    }
  }

  groupTrueHandler() {
    const { isGroup } = this.state;
    this.setState({ isGroup: isGroup + 1 });
  }

  render() {
    const { isGroup, groupData } = this.state;
    const { toggleGroupModal, groupinfo } = this.props;
    return (
      <>
        <div className="backgroundGray" />
        <div className="backgroundWrapper">
          <div className={isGroup !== 0 ? 'groupMgWrapper' : 'groupSetWrapper'}>
            {isGroup !== 0 ? (
              <ManageGroup
                groupData={groupData}
                groupinfo={groupinfo}
                groupFalseHandler={this.groupFalseHandler}
                toggleGroupModal={toggleGroupModal}
              />
            ) : (
              <MakeGroup
                groupTrueHandler={this.groupTrueHandler}
                toggleGroupModal={toggleGroupModal}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default GroupSetting;
