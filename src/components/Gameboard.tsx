import React from "react";
import { GridProps } from "../types/GridProps";
import { Cell } from "./GameCell";
import '../styles/CellGrid.css'

export const GameBoard: React.FC<GridProps> = ({ size, hoveredCells, setHoveredCells }) => {
    return (
        <table className="gameboard-container">
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
