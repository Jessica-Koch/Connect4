import { useState } from 'react';
import './App.css';
import { DropZone } from './Components/DropZone/DropZone';
import { Grid } from './Components/Grid/Grid';
import { initializeGrid } from './Components/Grid/utils';

function App() {
  const [activePlayer, setActivePlayer] = useState(1);
  const [grid, setGrid] = useState(initializeGrid());
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

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
    <div className="app">
      <DropZone activePlayer={activePlayer} hoveredColumn={hoveredColumn} />
      <Grid
        grid={grid}
        setHoveredColumn={setHoveredColumn}
        dropPiece={dropPiece}
      />
    </div>
  );
}

export default App;
