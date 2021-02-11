import React from 'react';
import '../css/SingleUserNav.css';
import { Link } from 'react-router-dom';

function GuestSingleUserNav() {
  return (
    <div className="body__container">
      <header className="section">
        <div className="inner clearfix">
          <div className="menu-group float--left">
            <Link to="/Signup">
              <div className="MyTodologo" />
            </Link>
            <ul className="main-menu">
              <li>Welcome Guest</li>
            </ul>
          </div>

          <div className="sign-group float--right">
            <div className="btn-group">
              <div className="Search_Calendar_btn">Search Calendar</div>
              <div className="user"> </div>
              <div className="setting"> </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default GuestSingleUserNav;
