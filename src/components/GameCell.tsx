import { useState } from 'react';
import '../styles/GameCell.css'

export const Cell: React.FC = () => {
    const [color, setColor] = useState('white');
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseIn = () => {
        if (!isHovered) {
            setIsHovered(true);

            if (color === 'blue') {
                setColor('white');
            } else {
                setColor('blue');
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