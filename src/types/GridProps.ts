export type GridProps = {
  size: number;
  hoveredCells: string[];
  setHoveredCells: (value: string[]) => void;
}