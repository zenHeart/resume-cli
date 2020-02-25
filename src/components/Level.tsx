import React from 'react';

export default Level;

function Level(props: { level: number }) {
  return (
    <span>
      {Array.from({ length: props.level }).map((ele, index) => (
        <span key="index">⭐</span>
      ))}
    </span>
  );
}
