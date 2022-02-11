import React from "react";
import Square from "../Square";

const randomBomb = Math.floor(Math.random() * 9);
function Board(props) {
  return (
    <div className="board">
      {props.squares.map((value, index) => {
        return (
          <Square
            key={index}
            value={value}
            onClick={() => {
              props.onClick(index, randomBomb);
            }}
          ></Square>
        );
      })}
    </div>
  );
}

export default Board;
