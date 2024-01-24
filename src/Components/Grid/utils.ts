import { COLUMNS, ROWS } from '../constants';

export const initializeGrid = () =>
  Array.from({ length: COLUMNS }).map(() => Array(ROWS).fill(null));
