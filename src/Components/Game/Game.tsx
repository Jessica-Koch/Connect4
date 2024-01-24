import { useState } from 'react';
import './Game.css';
import { DropZone } from '../DropZone/DropZone';
import { Grid } from '../Grid/Grid';
import { initializeGrid } from '../Grid/utils';
import { Button } from '../Button/Button';
import { checkWinner } from './gameLogic';

function Game() {
  const [activePlayer, setActivePlayer] = useState(1);
  const [grid, setGrid] = useState(initializeGrid());
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  const resetGame = () => {
    setActivePlayer(1);
    setGrid(initializeGrid());
  };

  const dropPiece = (columnIndex: number) => {
    // track if a piece was successfully placed
    let foundSlot = false;
    let newRow = 0;

    // Find the first empty slot in the column from the bottom
    for (let row = grid[columnIndex].length - 1; row >= 0; row--) {
      if (grid[columnIndex][row] === null) {
        const newGrid = [...grid];
        newGrid[columnIndex][row] = activePlayer; // Set the slot to the active player
        setGrid(newGrid);
        foundSlot = true;
        newRow = row;

        break;
      }
    }

    if (foundSlot) {
      debugger;
      // Check for a win
      if (checkWinner(grid, columnIndex, newRow, activePlayer)) {
        // Handle the win (e.g., display a message or end the game)
        alert(`Player ${activePlayer} wins!`);
        resetGame(); // Reset the game or handle win differently
      } else {
        // Switch to the other player
        setActivePlayer(activePlayer === 1 ? 2 : 1);
      }
    } else {
      console.log('Column is full');
    }
  };

  return (
    <>
      <div className="heading">
        <h1 className="gameTitle">Connect 4</h1>
        <Button className="resetButton" onClick={resetGame} label="Reset" />
        <div className="activePlayer">
          {activePlayer === 1 ? 'Player 1' : 'Player 2'}
        </div>
      </div>
      {/* <div className="gameBoard"> */}
      <DropZone activePlayer={activePlayer} hoveredColumn={hoveredColumn} />
      <Grid
        grid={grid}
        setHoveredColumn={setHoveredColumn}
        dropPiece={dropPiece}
      />
    </>
  );
}

export default Game;
