import React from 'react';
import './Level.scss';

export default Level;

function Level(props: { level: number }) {
  return (
    <span className="level">
      {Array.from({ length: props.level }).map((ele, index) => (
        <span className="star" key={index}>
          ⭐
        </span>
      ))}
    </span>
  );
}
