import styles from './DropZone.module.css';

type DropZoneProps = {
  activePlayer: number;
  hoveredColumn: number | null;
};
export const DropZone = ({ activePlayer, hoveredColumn }: DropZoneProps) => {
  const hoveringPieceStyle =
    hoveredColumn !== null
      ? {
          gridColumn: hoveredColumn + 1, // Position the piece above the hovered column
          transition: 'transform 0.5s ease-in-out', // Optional: for smooth movement
          transform: 'translateY(-100%)' // Adjust as needed to position above the grid
        }
      : {
          visibility: 'hidden' as const // Hide the piece when not hovering
        };

  return (
    <div className={styles.dropZone}>
      <div
        className={`${styles.piece} ${activePlayer === 1 ? styles.p1 : styles.p2}`}
        style={hoveringPieceStyle}
      ></div>
    </div>
  );
};
