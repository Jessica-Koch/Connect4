export const checkHorizontal = (
  board: (number | null)[][],
  lastCol: number,
  lastRow: number,
  player: number
) => {
  let toLeft = 0;
  let toRight = 0;

  // Check to the left of the last placed piece
  for (let col = lastCol - 1; col >= 0 && col >= lastCol - 3; col--) {
    if (board[col][lastRow] === player) {
      toLeft++;
    } else {
      break;
    }
  }

  // Check to the right of the last placed piece
  for (let col = lastCol + 1; col < board.length && col <= lastCol + 3; col++) {
    if (board[col][lastRow] === player) {
      toRight++;
    } else {
      break;
    }
  }

  return toLeft + toRight + 1 >= 4; // +1 for the last placed piece
};

export const checkVertical = (
  board: (number | null)[][],
  lastCol: number,
  lastRow: number,
  player: number
) => {
  let count = 0;

  // Start from the last placed piece and check downwards
  for (let row = lastRow; row < board[lastCol].length; row++) {
    if (board[lastCol][row] === player) {
      count++;
      if (count >= 4) return true;
    } else {
      break; // Break if a mismatch is found
    }
  }

  return false; // No vertical win found
};

export const checkDiagonalLTR = (
  board: (number | null)[][],
  lastCol: number,
  lastRow: number,
  player: number
) => {
  let count = 0;

  // Check from top-left to bottom-right
  for (let i = -3; i <= 3; i++) {
    const col = lastCol + i;
    const row = lastRow + i;
    if (col < 0 || col >= board.length || row < 0 || row >= board[col].length) {
      continue;
    }
    if (board[col][row] === player) {
      count++;
      if (count >= 4) return true;
    } else {
      count = 0; // Reset count if sequence breaks
    }
  }

  return false; // No diagonal win found
};

export const checkDiagonalRTL = (
  board: (number | null)[][],
  lastCol: number,
  lastRow: number,
  player: number
) => {
  let count = 0;

  // Check from top-right to bottom-left
  for (let i = -3; i <= 3; i++) {
    const col = lastCol + i;
    const row = lastRow - i;
    if (col < 0 || col >= board.length || row < 0 || row >= board[col].length) {
      continue;
    }
    if (board[col][row] === player) {
      count++;
      if (count >= 4) return true;
    } else {
      count = 0; // Reset count if sequence breaks
    }
  }

  return false; // No diagonal win found
};

export const checkWinner = (
  board: (number | null)[][],
  lastCol: number,
  lastRow: number,
  player: number
) => {
  return (
    checkHorizontal(board, lastCol, lastRow, player) ||
    checkVertical(board, lastCol, lastRow, player) ||
    checkDiagonalLTR(board, lastCol, lastRow, player) ||
    checkDiagonalRTL(board, lastCol, lastRow, player)
  );
};
