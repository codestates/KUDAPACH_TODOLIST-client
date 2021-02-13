import React from 'react';
import '../../css/GroupSetting.css';
import MakeGroup from './MakeGroup';
import ManageGroup from './ManageGroup';

class GroupSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      toggleGroupModal,
      groupinfo,
      currentGroupId,
      handleUsernameEmail,
      groupData,
    } = this.props;
    // eslint-disable-next-line no-console
    console.log(currentGroupId);
    // eslint-disable-next-line no-console

    return (
      <>
        <div className="backgroundGray" />
        <div className="backgroundWrapper">
          <div
            className={
              currentGroupId !== 0 ? 'groupMgWrapper' : 'groupSetWrapper'
            }
          >
            {currentGroupId !== 0 ? (
              <ManageGroup
                groupData={groupData}
                groupinfo={groupinfo}
                toggleGroupModal={toggleGroupModal}
                currentGroupId={currentGroupId}
              />
            ) : (
              <MakeGroup
                toggleGroupModal={toggleGroupModal}
                handleUsernameEmail={handleUsernameEmail}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default GroupSetting;
