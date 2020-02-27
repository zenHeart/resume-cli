import React from 'react';
import './Piece.scss';

function Piece(props: { name: string; content: string }) {
  return (
    <div className="piece">
      <div className="piece-label">{props.name}</div>
      <div className="piece-content">{props.content}</div>
    </div>
  );
}

export default Piece;
