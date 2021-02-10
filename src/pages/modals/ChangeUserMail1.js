import React from 'react';
import '../../css/ChangeGroup.css';

class ChangeUserMail1 extends React.Component {
  render() {
    const { handleEmail1Toggle, handleChangeInput } = this.props;
    return (
      <>
        <div className="bgPage"></div>
        <div className="wholePage">
          <div className="changexBtn" onClick={handleEmail1Toggle} />
          <input
            type="text"
            placeholder="New usermail"
            onChange={handleChangeInput('userEmail1')}
          />
          <button onClick={handleEmail1Toggle}>EDIT</button>
        </div>
      </>
    );
  }
}

export default ChangeUserMail1;
