import React from "react";
import { Cell } from "./GameCell";

type GridProps = {
    size: number;
    hoveredCells: string[];
    setHoveredCells: (value: string[]) => void;
}

export const CellGrid: React.FC<GridProps> = ({ size, hoveredCells, setHoveredCells }) => {
    return (
        <table>
            <tbody>
                {Array.from(Array(size).keys()).map((rowNumber) => (
                    <tr key={rowNumber}>
                        {Array.from(Array(size).keys()).map((columnNumber) => (
                            <td key={columnNumber}>
                                <Cell 
                                    rowNumber={rowNumber + 1} 
                                    columnNumber={columnNumber + 1}
                                    hoveredCells={hoveredCells}
                                    setHoveredCells={setHoveredCells}
                                />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
