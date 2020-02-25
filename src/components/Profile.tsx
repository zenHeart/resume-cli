import React from 'react';

export default Profile;

function Profile(props: Profile) {
  return (
    <section className="profile">
      <p>
        <strong>姓名:</strong>
        <span>{props.name}</span>
      </p>
      <p>
        <strong>邮箱:</strong>
        <a href={`mailto:${props.email}`}>{props.email}</a>
      </p>
    </section>
  );
}
