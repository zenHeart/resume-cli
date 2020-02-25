import React from 'react';
export default ItemLabel;

function ItemLabel(props: { text: string }) {
  return <strong className="item-label">{props.text}</strong>;
}
