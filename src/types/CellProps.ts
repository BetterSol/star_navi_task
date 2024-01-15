export type CellProps = {
  rowNumber: number;
  columnNumber: number;
  hoveredCells: string[];
  setHoveredCells: (value: string[]) => void;
}

