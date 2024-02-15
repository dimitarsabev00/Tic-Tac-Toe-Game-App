import React, { useEffect, useState } from "react";
import "./App.scss";

import { Board, Button, Square } from "./components";

type SquareValue = "x" | "o" | null;

const defaultSquares = (): SquareValue[] => new Array(9).fill(null);

const lines: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const App: React.FC = () => {
  const [squares, setSquares] = useState<SquareValue[]>(defaultSquares);
  const [winner, setWinner] = useState<SquareValue | null>(null);

  useEffect(() => {
    const isComputerTurn =
      squares.filter((square) => square !== null).length % 2 === 1;
    const linesThatAre = (a: SquareValue, b: SquareValue, c: SquareValue) => {
      return lines.filter((squareIndexes) => {
        const squareValues = squareIndexes.map((index) => squares[index]);
        return (
          JSON.stringify([a, b, c].sort()) ===
          JSON.stringify(squareValues.sort())
        );
      });
    };
    const emptyIndexes = squares
      .map((square, index) => (square === null ? index : null))
      .filter((val) => val !== null);
    const playerWon = linesThatAre("x", "x", "x").length > 0;
    const computerWon = linesThatAre("o", "o", "o").length > 0;
    if (playerWon) {
      setWinner("x");
    }
    if (computerWon) {
      setWinner("o");
    }
    const putComputerAt = (index: number) => {
      let newSquares = [...squares];
      newSquares[index] = "o";
      setSquares(newSquares);
    };
    if (isComputerTurn) {
      const winingLines = linesThatAre("o", "o", null);
      if (winingLines.length > 0) {
        const winIndex = winingLines[0].filter(
          (index) => squares[index] === null
        )[0];
        putComputerAt(winIndex);
        return;
      }

      const linesToBlock = linesThatAre("x", "x", null);
      if (linesToBlock.length > 0) {
        const blockIndex = linesToBlock[0].filter(
          (index) => squares[index] === null
        )[0];
        putComputerAt(blockIndex);
        return;
      }

      const linesToContinue = linesThatAre("o", null, null);
      if (linesToContinue.length > 0) {
        putComputerAt(
          linesToContinue[0].filter((index) => squares[index] === null)[0]
        );
        return;
      }

      const randomIndex =
        emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
      if (randomIndex !== null) {
        putComputerAt(randomIndex);
      }
    }
  }, [squares]);

  function handleSquareClick(index: number) {
    const isPlayerTurn =
      squares.filter((square) => square !== null).length % 2 === 0;
    if (isPlayerTurn && !winner) {
      let newSquares = [...squares];
      newSquares[index] = "x";
      setSquares(newSquares);
    }
  }

  const handleReset = () => {
    setWinner(null);
    setSquares(defaultSquares());
    window.location.reload();
  };

  return (
    <div className="container-game">
      <h1 className="title">
        Tic-Tac-Toe Game <span>App</span>
      </h1>
      <Board>
        {squares.map((square, index) => (
          <Square
            key={index}
            x={square === "x" ? 1 : 0}
            o={square === "o" ? 1 : 0}
            onClick={() => handleSquareClick(index)}
            winner={winner}
            disableClick={!!squares[index] || !!winner}
          />
        ))}
      </Board>
      {!!winner && winner === "x" && (
        <div className="result green">You WON!</div>
      )}
      {!!winner && winner === "o" && (
        <div className="result red">You LOST!</div>
      )}
      <Button title="Reset" onClick={handleReset} />
    </div>
  );
};

export default App;
