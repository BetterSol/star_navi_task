import React from "react"

type Props = {
    hoveredCells: string[]
}

export const Table: React.FC<Props> = ({ hoveredCells }) => {
    console.log(hoveredCells);
    return (
        <div>
            {}
        </div>
    )
}