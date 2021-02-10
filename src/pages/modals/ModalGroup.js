import React from 'react';
import '../../css/ModalSetting.css';

class ModalGroup extends React.Component {
  render() {
    return (
      <div className="GroupWrapper">
        <div className="accountText">Group</div>
        <div className="signoutText">My todo</div>
        <div className="hrBox"></div>
        <div className="signoutText">Group1</div>
        <div className="signoutText">Group2</div>
        <div className="signoutText">Group3</div>
      </div>
    );
  }
}

export default ModalGroup;
