import React from "react";
import { Cell } from "./GameCell";

type GridProps = {
    size: number;
}

export const CellGrid: React.FC<GridProps> = ({ size }) => {
    return (
        <table>
            <tbody>
                {Array.from(Array(size).keys()).map((rowNumber) => (
                    <tr key={rowNumber}>
                        {Array.from(Array(size).keys()).map((columnNumber) => (
                            <td key={columnNumber}>
                                <Cell />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
