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
      handleIsGroup,
      handleGroupInfo,
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
                handleIsGroup={handleIsGroup}
                toggleGroupModal={toggleGroupModal}
                currentGroupId={currentGroupId}
                handleGroupInf={handleGroupInfo}
              />
            ) : (
              <MakeGroup
                toggleGroupModal={toggleGroupModal}
                handleUsernameEmail={handleUsernameEmail}
                handleGroupInfo={handleGroupInfo}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default GroupSetting;
