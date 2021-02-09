import React from 'react';
import '../../css/GroupSetting.css';
import MakeGroup from './MakeGroup';

class GroupSetting extends React.Component {
  render() {
    const { toggleGroupModal } = this.props;
    return (
      <>
        <div className="backgroundGray" />
        <div className="backgroundWrapper">
          <div className="groupSetWrapper">
            <MakeGroup toggleGroupModal={toggleGroupModal} />
          </div>
        </div>
      </>
    );
  }
}

export default GroupSetting;
