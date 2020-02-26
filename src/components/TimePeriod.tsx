import React from 'react';

export default TimePeriod;

function TimePeriod(props: { level: number }) {
  return (
    <span>
      {Array.from({ length: props.level }).map((ele, index) => (
        <span key="index">⭐</span>
      ))}
    </span>
  );
}
