import React from 'react';
import '../../css/ChangeGroup.css';

class ChangeUserMail2 extends React.Component {
  render() {
    const { handleEmail2Toggle, handleChangeInput } = this.props;
    return (
      <>
        <div className="bgPage"></div>
        <div className="wholePage">
          <div className="changexBtn" onClick={handleEmail2Toggle} />
          <input
            type="text"
            placeholder="New usermail"
            onChange={handleChangeInput('userEmail2')}
          />
          <button onClick={handleEmail2Toggle}>SAVE</button>
        </div>
      </>
    );
  }
}

export default ChangeUserMail2;
