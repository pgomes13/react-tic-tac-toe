import React from 'react';
import Board from '../board/Board';
import Result from '../result/Result';
import './game.css';

const Game = () => {
  return (
    <div className="game">
      <Result />
      <Board />
    </div>
  );
}

export default Game;