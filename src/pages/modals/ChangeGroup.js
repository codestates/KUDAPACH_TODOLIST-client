import React from 'react';
import '../../css/ChangeGroup.css';

class ChangeGroup extends React.Component {
  render() {
    const { handleGroupToggle, handleChangeInput } = this.props;
    return (
      <>
        <div className="bgPage"></div>
        <div className="wholePage">
          <input
            type="text"
            placeholder="New Groupname"
            onChange={handleChangeInput('groupname')}
          />
          <button onClick={handleGroupToggle}>SAVE</button>
        </div>
      </>
    );
  }
}

export default ChangeGroup;
