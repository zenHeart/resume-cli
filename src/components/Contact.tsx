import React from 'react';

export default Profile;

function Profile(props: Profile) {
  return (
    <section className="profile">
      <header>
        <img src={props.avatar} alt="avatar" />
        <p className="info">
          <p>
            <span>
              <strong>姓名:</strong>
              {props.name}
            </span>
            <span>
              <strong>邮箱:</strong>
              <a href={`mailto:${props.email}`}>{props.email}</a>
            </span>
            <span>
              <strong>工作年限:</strong>
              {props.workingYears}
            </span>
          </p>
          <span>
            <strong>学校:</strong>
            {props.school}
          </span>
          <span>
            <strong>状态:</strong>
            {props.state}
          </span>
        </p>
      </header>
    </section>
  );
}
