import { useState } from 'react';
import { CellProps } from '../types/CellProps';
import '../styles/GameCell.css'

export const Cell: React.FC<CellProps> = ({ 
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