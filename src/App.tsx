import { useState } from 'react';
import styles from './App.module.css';
import { DropZone } from './Components/DropZone/DropZone';
import { Grid } from './Components/Grid/Grid';
import { initializeGrid } from './Components/Grid/utils';
import { Button } from './Components/Button/Button';

function App() {
  const [activePlayer, setActivePlayer] = useState(1);
  const [grid, setGrid] = useState(initializeGrid());
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  const resetGame = () => {
    setActivePlayer(1);
    setGrid(initializeGrid());
  };

  const dropPiece = (columnIndex: number) => {
    // Find the first empty slot in the column from the bottom
    for (let i = grid[columnIndex].length - 1; i >= 0; i--) {
      if (grid[columnIndex][i] === null) {
        const newGrid = [...grid];
        newGrid[columnIndex][i] = activePlayer; // Set the slot to the active player
        setGrid(newGrid);
        setActivePlayer(activePlayer === 1 ? 2 : 1);
        break;
      }
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.heading}>
        <h1 className={styles.gameTitle}>Connect 4</h1>
        <Button
          className={styles.resetButton}
          onClick={resetGame}
          label="Reset"
        />
        <div className={styles.activePlayer}>
          {activePlayer === 1 ? 'Player 1' : 'Player 2'}
        </div>
      </div>
      <div className={styles.gameBoard}>
        <DropZone activePlayer={activePlayer} hoveredColumn={hoveredColumn} />
        <Grid
          grid={grid}
          setHoveredColumn={setHoveredColumn}
          dropPiece={dropPiece}
        />
      </div>
    </div>
  );
}

export default App;
