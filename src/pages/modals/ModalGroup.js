import React from 'react';
import '../../css/ModalSetting.css';

class ModalGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGroup: 'none',
    };
    this.selectGroupHandler = this.selectGroupHandler.bind(this);
  }

  selectGroupHandler(e) {
    this.setState({ isGroup: e.target.getAttribute('value') });
  }

  render() {
    const { groupinfo } = this.props;
    return (
      <div className="GroupWrapper">
        <div className="accountText">Group</div>
        <div className="signoutText">My todo</div>
        <div className="hrBox"></div>
        {groupinfo.groupnames.map((el, id) => {
          return (
            <div
              className="signoutText"
              key={id}
              value={el.groupname}
              onClick={(e) => this.selectGroupHandler(e)}
            >
              {el.groupname}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ModalGroup;
