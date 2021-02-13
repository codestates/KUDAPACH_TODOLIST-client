import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/SingleUserNav.css';
import ModalSetting from './modals/ModalSetting';
import ModalCalendar from 'react-calendar';
import '../css/Calendar.css';
import GroupSetting from './modals/GroupSetting';
import ModalGroup from './modals/ModalGroup';
import moment from 'moment';
import axios from 'axios';
/*eslint-disable*/
function SingleUserNav({
  userinfo,
  groupinfo,
  handleSignOut,
  handleTodoCards,
  handleUsernameEmail,
  handleIsGroup,
  currentGroupId,
}) {
  // setting 모달창에 대한 state hook과 function들 ---- 시작
  const [settingModal, setSettingModal] = useState(false);
  const toggleModalSetting = () => {
    if (settingModal === false) {
      setSettingModal(true);
    }
    if (settingModal === true) {
      setSettingModal(false);
    }
  };
  // setting 모달창에 대한 state hook과 function들 ---- 끝

  // calendar 모달창에 대한 state hook과 function들 ---- 시작
  const [calendarModal, setCalendarModal] = useState(false);
  const toggleCalendarModal = () => {
    if (calendarModal === false) {
      setCalendarModal(true);
    }
    if (calendarModal === true) {
      setCalendarModal(false);
    }
  };
  // calendar 모달창에 대한 state hook과 function들 ---- 끝

  // setting 안에 있는 GroupSetting 모달창에 대한 state hook과 function들 ---- 시작
  const [groupModal, setGroupModal] = useState(false);
  const toggleGroupModal = () => {
    if (groupModal === false) {
      setGroupModal(true);
    }
    if (groupModal === true) {
      setGroupModal(false);
    }
  };
  const toggleGroupModalWithSetting = () => {
    toggleModalSetting(); // 세팅창을 닫아주도록
    if (groupModal === false) {
      setGroupModal(true);
    }
    if (groupModal === true) {
      setGroupModal(false);
    }
  };
  // setting 안에 있는 GroupSetting 모달창에 대한 state hook과 function들 ---- 끝

  // usericon 모달창에 대한 state hook과 function들 ---- 시작
  const [onGroup, setOnGroup] = useState(false);
  const toggleOnGroup = () => {
    if (onGroup === false) {
      setOnGroup(true);
    }
    if (onGroup === true) {
      setOnGroup(false);
    }
  };
  // usericon 모달창에 대한 state hook과 function들 ---- 끝

  const onDateChange = (date) => {
    let d = moment(date).format('YYYY-MM-DD');
    if (currentGroupId === 0) {
      axios
        .post('https://server.kudapach.com/todo/calendar', {
          date: d,
        })
        .then((res) => handleTodoCards(res.data.data));
    } else {
      axios
        .post('https://server.kudapach.com/grouptodocard/calendar', {
          groupid: currentGroupId,
          date: d,
        })
        .then((res) => handleTodoCards(res.data.data));
    }
  };


  const [groupData, setgroupData] = useState({});
  const getGroupInfoHandler = () => {
    axios
      .post(
        'https://server.kudapach.com/groupsetting',
        {
          groupid: currentGroupId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((res) => {
        if (res.status === 200) {
          setgroupData(res.data);
        }
      });
  };

  return (
    <div className="body__container">
      {/*nev 부분입니다.*/}
      <header className="section">
        <div className="inner clearfix">
          <div className="menu-group float--left">
            <Link to="/mytodo" onClick={handleUsernameEmail}>
              <div className="MyTodologo" />
            </Link>
            <ul className="main-menu">
              <li>Welcome {userinfo.username}</li>
            </ul>
          </div>

          <div className="sign-group float--right">
            <div className="btn-group">
              <div
                className="Search_Calendar_btn"
                onClick={toggleCalendarModal}
              >
                Search Calendar
              </div>
              <div className="user" onClick={toggleOnGroup}>
                {' '}
              </div>
              <div className="setting" onClick={toggleModalSetting}>
                {' '}
              </div>
            </div>
          </div>
        </div>
      </header>
      {settingModal === true ? (
        <ModalSetting
          userinfo={userinfo}
          groupinfo={groupinfo}
          toggleGroupModalWithSetting={toggleGroupModalWithSetting}
          toggleModalSetting={toggleModalSetting}
          handleSignOut={handleSignOut}
        />
      ) : (
        <div />
      )}
      {calendarModal === true ? (
        <ModalCalendar onChange={onDateChange} />
      ) : (
        <div />
      )}
      {groupModal === true ? (
        <GroupSetting
          groupinfo={groupinfo}
          groupData={groupData}
          currentGroupId={currentGroupId}
          handleUsernameEmail={handleUsernameEmail}
          toggleGroupModal={toggleGroupModal}
        />
      ) : (
        <div />
      )}
      {onGroup === true ? (
        <ModalGroup
          toggleOnGroup={toggleOnGroup}
          groupinfo={groupinfo}
          handleTodoCards={handleTodoCards}
          handleIsGroup={handleIsGroup}
          getGroupInfoHandler={getGroupInfoHandler}
        />
      ) : (
        <div />
      )}
    </div>
  );
}

export default SingleUserNav;
