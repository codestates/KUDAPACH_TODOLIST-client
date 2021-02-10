import React from 'react';
import '../../css/ChangeGroup.css';

class ChangeUserMail4 extends React.Component {
  render() {
    const { handleEmail4Toggle, handleChangeInput } = this.props;
    return (
      <>
        <div className="bgPage"></div>
        <div className="wholePage">
          <div className="changexBtn" onClick={handleEmail4Toggle} />
          <input
            type="text"
            placeholder="New usermail"
            onChange={handleChangeInput('userEmail4')}
          />
          <button onClick={handleEmail4Toggle}>EDIT</button>
        </div>
      </>
    );
  }
}

export default ChangeUserMail4;
