import React from 'react';
import '../../css/GroupSetting.css';
import MakeGroup from './MakeGroup';
import ManageGroup from './ManageGroup';

class GroupSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGroup: true,
    };
  }

  render() {
    const { toggleGroupModal } = this.props;
    const { isGroup } = this.state;
    return (
      <>
        <div className="backgroundGray" />
        <div className="backgroundWrapper">
          <div className={isGroup ? 'groupMgWrapper' : 'groupSetWrapper'}>
            {isGroup ? (
              <ManageGroup toggleGroupModal={toggleGroupModal} />
            ) : (
              <MakeGroup toggleGroupModal={toggleGroupModal} />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default GroupSetting;
