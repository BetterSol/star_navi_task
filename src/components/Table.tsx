import React from "react"
import '../styles/Table.css'

type Props = {
    hoveredCells: string[]
}

export const Table: React.FC<Props> = ({ hoveredCells }) => {
    return (
        <div className="table-container">
            <div className="table-name">
                Hover squares
            </div>
            <div className="table-body">
                {hoveredCells.map((cellName, index) => (
                    <div key={index} className="hovered-cell">
                        {cellName}
                    </div>
                ))}
            </div>
        </div>
    )
}