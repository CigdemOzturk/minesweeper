import "../App/App.css";
import React, { useState } from "react";
import Board from "../Board";

function calculateWinner(squares) {
  const wins = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [0, 2, 3, 4, 5, 6, 7, 8],
    [0, 1, 3, 4, 5, 6, 7, 8],
    [0, 1, 2, 4, 5, 6, 7, 8],
    [0, 1, 2, 3, 5, 6, 7, 8],
    [0, 1, 2, 3, 4, 6, 7, 8],
    [0, 1, 2, 3, 4, 5, 7, 8],
    [0, 1, 2, 3, 4, 5, 6, 8],
    [0, 1, 2, 3, 4, 5, 6, 7],
  ];

  for (let i = 0; i < wins.length; i++) {
    const [a, b, c, d, e, f, g, h] = wins[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d] &&
      squares[a] === squares[e] &&
      squares[a] === squares[f] &&
      squares[a] === squares[g] &&
      squares[a] === squares[h]
    ) {
      return "YAY!!! You WON!";
    }
  }
  return null;
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const mark = "O";
  const winner = calculateWinner(board);
  const [lost, setLost] = useState("");

  function handleClickSquare(index, randomBomb) {
    console.log(randomBomb);
    console.log("Index: ", index);
    if (winner) {
      return;
    } else if (index === randomBomb) {
      setBoard([...board.slice(0, index), "*", ...board.slice(index + 1)]);
      setLost("BOMB!!! You LOST!");
    } else if (board[index] === board[randomBomb]) {
      setBoard([...board.slice(0, index), mark, ...board.slice(index + 1)]);
    }
  }

  return (
    <div className="App">
      <Board squares={board} onClick={handleClickSquare} />
      <h3>{winner ? "Result: " + winner : "" + lost} </h3>
    </div>
  );
}

export default App;
