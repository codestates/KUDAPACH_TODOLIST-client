import React from 'react';
import '../../css/GroupSetting.css';
import MakeGroup from './MakeGroup';
import ManageGroup from './ManageGroup';

class GroupSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGroup: 0,
      // 0이면 그룹이 없는 상태 (그룹 갯수)
    };
    this.groupFalseHandler = this.groupFalseHandler.bind(this);
    this.groupTrueHandler = this.groupTrueHandler.bind(this);
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
    const { isGroup } = this.state;
    const { toggleGroupModal } = this.props;
    return (
      <>
        <div className="backgroundGray" />
        <div className="backgroundWrapper">
          <div className={isGroup !== 0 ? 'groupMgWrapper' : 'groupSetWrapper'}>
            {isGroup !== 0 ? (
              <ManageGroup
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
