import styles from './Grid.module.css';

type GridProps = {
  grid: number[][];
  setHoveredColumn: React.Dispatch<React.SetStateAction<number | null>>;
  dropPiece: (columnIndex: number) => void;
};

export const Grid = ({ grid, setHoveredColumn, dropPiece }: GridProps) => {
  const generateBoard = () =>
    grid.map((column: number[], colIndex: number) => (
      <div
        key={`col-${colIndex}`}
        className={styles.column}
        onMouseOver={() => setHoveredColumn(colIndex)}
        onClick={() => dropPiece(colIndex)}
      >
        {column.map((cell, rowIndex) => {
          console.log('%c cell: ', 'color: crimson; font-weight: bold;', cell);
          return (
            <div className={styles.gridCell} key={`${colIndex}-${rowIndex}`}>
              {cell === 1 && <div className={styles.player1Piece}></div>}
              {cell === 2 && <div className={styles.player2Piece}></div>}
            </div>
          );
        })}
      </div>
    ));

  const gameBoard = generateBoard();

  return <div className={styles.grid}>{gameBoard}</div>;
};
