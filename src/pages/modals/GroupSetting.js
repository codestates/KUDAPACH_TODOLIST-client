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
      groupName: this.props.groupName,
      groupData: null,
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
          this.setState({ groupData: res.data });
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
    const { groupData } = this.state;
    const { toggleGroupModal, groupinfo } = this.props;
    return (
      <>
        <div className="backgroundGray" />
        <div className="backgroundWrapper">
          <div
            className={
              this.state.groupName.length === 0
                ? 'groupMgWrapper'
                : 'groupSetWrapper'
            }
          >
            {this.state.groupName.length === 0 ? (
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
