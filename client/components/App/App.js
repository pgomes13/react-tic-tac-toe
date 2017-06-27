import React from 'react';
import Board from '../board/Board';
import Result from '../result/Result';
import './app.css';

const App = () => {
  return (
    <div className="app">
      <Result />
      <Board />
    </div>
  );
}

export default App;