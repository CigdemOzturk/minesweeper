import React from "react";

function square(props) {
  const style = props.value ? `squares  ${props.value}` : `squares `;

  return (
    <button onClick={props.onClick} className={style}>
      {props.value}
    </button>
  );
}

export default square;
