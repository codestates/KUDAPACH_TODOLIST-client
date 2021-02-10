import React from 'react';
import '../../css/GroupSetting.css';
import MakeGroup from './MakeGroup';
import ManageGroup from './ManageGroup';

class GroupSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGroup: true,
      // 그룹 유무를 RDS에서 받아와야 함
    };
    this.groupFalseHandler = this.groupFalseHandler.bind(this);
    this.groupTrueHandler = this.groupTrueHandler.bind(this);
  }

  groupFalseHandler() {
    this.setState({ isGroup: false });
  }

  groupTrueHandler() {
    this.setState({ isGroup: true });
  }

  render() {
    const { isGroup } = this.state;
    const { toggleGroupModal } = this.props;
    return (
      <>
        <div className="backgroundGray" />
        <div className="backgroundWrapper">
          <div className={isGroup ? 'groupMgWrapper' : 'groupSetWrapper'}>
            {isGroup ? (
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
