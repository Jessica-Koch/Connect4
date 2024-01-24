import {
  checkDiagonalLTR,
  checkDiagonalRTL,
  checkHorizontal,
  checkVertical,
  checkWinner
} from './gameLogic';
import { describe, expect, test } from 'vitest';

describe('GameLogic', () => {
  describe('checkHorizontal function', () => {
    test('identifies a horizontal win', () => {
      const board = Array(7)
        .fill(null)
        .map(() => Array(6).fill(null)); // Create 7x6 board
      board[1][0] = 1;
      board[2][0] = 1;
      board[3][0] = 1;
      board[4][0] = 1; // Set up a horizontal win in the first row

      expect(checkHorizontal(board, 1, 0, 1)).toBe(true);
      // Other similar expectations
    });

    test('returns false when there is no win', () => {
      const board = Array(7)
        .fill(null)
        .map(() => Array(6).fill(null));
      // Set up a scenario where there is no horizontal win
      board[2][0] = 1;
      board[3][0] = 2; // A different player's piece
      board[4][0] = 1;
      board[5][0] = 1;

      expect(checkHorizontal(board, 5, 0, 1)).toBe(false);
    });

    // Test cases for edge of the board
    test('handles edge cases correctly', () => {
      const board = Array(7)
        .fill(null)
        .map(() => Array(6).fill(null));
      board[3][0] = 1;
      board[4][0] = 1;
      board[5][0] = 1;
      board[6][0] = 1; // Horizontal win at the right edge

      expect(checkHorizontal(board, 6, 0, 1)).toBe(true);
    });
  });
  describe('checkVertical function', () => {
    test('identifies a vertical win', () => {
      const board = Array(7)
        .fill(null)
        .map(() => Array(6).fill(null));
      board[3][0] = 1;
      board[3][1] = 1;
      board[3][2] = 1;
      board[3][3] = 1; // Vertical win in column 3

      expect(checkVertical(board, 3, 0, 1)).toBe(true);
    });

    test('returns false when there is no win', () => {
      const board = Array(7)
        .fill(null)
        .map(() => Array(6).fill(null));
      board[3][0] = 1;
      board[3][1] = 1;
      board[3][2] = 2; // Different player's piece
      board[3][3] = 1;

      expect(checkVertical(board, 3, 0, 1)).toBe(false);
    });

    // Test cases for edge of the board (bottom)
    test('handles bottom edge cases correctly', () => {
      const board = Array(7)
        .fill(null)
        .map(() => Array(6).fill(null));
      board[3][2] = 1;
      board[3][3] = 1;
      board[3][4] = 1;
      board[3][5] = 1; // Vertical win at the bottom

      expect(checkVertical(board, 3, 2, 1)).toBe(true);
    });

    describe('checkDiagonalLTR function', () => {
      test('identifies a diagonal LTR win', () => {
        const board = Array(7)
          .fill(null)
          .map(() => Array(6).fill(null));
        board[2][2] = 1;
        board[3][3] = 1;
        board[4][4] = 1;
        board[5][5] = 1; // Diagonal win from top-left to bottom-right

        expect(checkDiagonalLTR(board, 5, 5, 1)).toBe(true);
      });

      test('returns false when there is no diagonal LTR win', () => {
        const board = Array(7)
          .fill(null)
          .map(() => Array(6).fill(null));
        board[2][2] = 1;
        board[3][3] = 2; // Different player's piece
        board[4][4] = 1;
        board[5][5] = 1;

        expect(checkDiagonalLTR(board, 5, 5, 1)).toBe(false);
      });
    });

    describe('checkDiagonalRTL function', () => {
      test('identifies a diagonal RTL win', () => {
        const board = Array(7)
          .fill(null)
          .map(() => Array(6).fill(null));
        board[4][2] = 1;
        board[3][3] = 1;
        board[2][4] = 1;
        board[1][5] = 1; // Diagonal win from top-right to bottom-left

        expect(checkDiagonalRTL(board, 1, 5, 1)).toBe(true);
      });

      test('returns false when there is no diagonal RTL win', () => {
        const board = Array(7)
          .fill(null)
          .map(() => Array(6).fill(null));
        board[4][2] = 1;
        board[3][3] = 2; // Different player's piece
        board[2][4] = 1;
        board[1][5] = 1;

        expect(checkDiagonalRTL(board, 1, 5, 1)).toBe(false);
      });
    });
    describe('checkWinner function', () => {
      test('identifies a win horizontally', () => {
        const board = Array(7)
          .fill(null)
          .map(() => Array(6).fill(null));
        // Setting up a horizontal win for player 1
        board[0][0] = 1;
        board[1][0] = 1;
        board[2][0] = 1;
        board[3][0] = 1;

        expect(checkWinner(board, 3, 0, 1)).toBe(true);
      });

      test('identifies a win vertically', () => {
        const board = Array(7)
          .fill(null)
          .map(() => Array(6).fill(null));
        board[3][0] = 1;
        board[3][1] = 1;
        board[3][2] = 1;
        board[3][3] = 1; // Vertical win in column 3

        expect(checkWinner(board, 3, 0, 1)).toBe(true);
      });

      test('identifies a win diagonally (top-left to bottom-right)', () => {
        const board = Array(7)
          .fill(null)
          .map(() => Array(6).fill(null));
        // Setting up a diagonal win for player 1
        board[0][0] = 1;
        board[1][1] = 1;
        board[2][2] = 1;
        board[3][3] = 1;

        expect(checkWinner(board, 3, 3, 1)).toBe(true);
      });

      test('identifies a win diagonally (top-right to bottom-left)', () => {
        const board = Array(7)
          .fill(null)
          .map(() => Array(6).fill(null));
        // Setting up a diagonal win for player 1
        board[6][0] = 1;
        board[5][1] = 1;
        board[4][2] = 1;
        board[3][3] = 1;

        expect(checkWinner(board, 3, 3, 1)).toBe(true);
      });

      test('returns false when there is no win', () => {
        const board = Array(7)
          .fill(null)
          .map(() => Array(6).fill(null));
        // No winning sequence
        board[0][0] = 1;
        board[1][0] = 2;
        board[2][0] = 1;
        board[3][0] = 1;
        board[4][0] = 2;

        expect(checkWinner(board, 4, 0, 1)).toBe(false);
      });
    });
  });
});
