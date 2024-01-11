import { useState } from 'react';
import '../styles/GameCell.css'

type Props = {
    rowNumber: number;
    columnNumber: number;
    hoveredCells: string[];
    setHoveredCells: (value: string[]) => void;
}

export const Cell: React.FC<Props> = ({ 
    rowNumber, 
    columnNumber, 
    hoveredCells, 
    setHoveredCells 
}) => {
    const [color, setColor] = useState('white');
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseIn = () => {
        if (!isHovered) {
            setIsHovered(true);
            const cellLocation = `row ${rowNumber} col ${columnNumber}`

            if (color === 'blue') {
                setColor('white');
                setHoveredCells(hoveredCells.filter((cell: string) => cell !== cellLocation));
            } else {
                setColor('blue');
                setHoveredCells([...hoveredCells, cellLocation])
            }
        }
    };

    const handleMouseOut = () => {
        setIsHovered(false)
    }
    return (
        <div
            className={`cell ${color}`}
            onMouseEnter={handleMouseIn}
            onMouseLeave={handleMouseOut}
        >
        </div>
    )
}