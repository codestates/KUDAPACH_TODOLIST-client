import React from 'react';
import '../../css/ChangeGroup.css';

class ChangeUserMail3 extends React.Component {
  render() {
    const { handleEmail3Toggle, handleChangeInput } = this.props;
    return (
      <>
        <div className="bgPage"></div>
        <div className="wholePage">
          <div className="changexBtn" onClick={handleEmail3Toggle} />
          <input
            type="text"
            placeholder="New usermail"
            onChange={handleChangeInput('userEmail3')}
          />
          <button onClick={handleEmail3Toggle}>EDIT</button>
        </div>
      </>
    );
  }
}

export default ChangeUserMail3;
