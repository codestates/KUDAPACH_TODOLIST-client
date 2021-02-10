/*eslint-disable*/

import React from 'react';
import '../../css/ModalSetting.css';

class ModalGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGroup: 'none',
    }
    this.selectGroupHandler = this.selectGroupHandler.bind(this);
  }

  selectGroupHandler(e) {
    this.setState({ isGroup: e.target.getAttribute('value') })
  }

  render() {
    const { groupinfo } = this.props;
    return (
      <div className="GroupWrapper">
        <div className="accountText">Group</div>
        <div className="signoutText">My todo</div>
        <div className="hrBox"></div>
        <div className="signoutText" value={groupinfo[0]} onClick={(e) => this.selectGroupHandler(e)}>{groupinfo[0]}</div>
        <div className="signoutText" value={groupinfo[1]} onClick={(e) => this.selectGroupHandler(e)}>{groupinfo[1]}</div>
        <div className="signoutText" value={groupinfo[2]} onClick={(e) => this.selectGroupHandler(e)}>{groupinfo[2]}</div>
      </div>
    );
  }
}

export default ModalGroup;
