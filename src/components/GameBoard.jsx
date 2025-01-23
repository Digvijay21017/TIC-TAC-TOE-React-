// import { useState } from "react";

export default function GameBoard({ onSelectSquare, board }) {

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex} id="row">
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                  <p id="playersymbol">{playerSymbol}</p>
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
