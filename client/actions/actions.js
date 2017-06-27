// add symbol to the tic tac toe board
export const addSymbol = (row, position, symbol) => ({
  type: 'ADD_SYMBOL',
  symbol,
  row,
  position
});

// start the game again after draw or win/loss
export const startAgain = () => ({
  type: 'START_AGAIN'
});