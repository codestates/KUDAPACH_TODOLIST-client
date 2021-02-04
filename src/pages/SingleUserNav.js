import React from 'react';
import '../css/SingleUserNav.css';
function SingleUserNav() {
  return (
    <div className="body__container">
      {/*nev 부분입니다.*/}
      <header className="section">
        <div className="inner clearfix">
          <div className="menu-group float--left">
            <div className="MyTodologo">
              <a href="#"> </a>
            </div>
            <ul className="main-menu">
              <li>Welcome kudapach</li>
            </ul>
          </div>

          <div className="sign-group float--right">
            <div className="btn-group ">
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

export default SingleUserNav;
