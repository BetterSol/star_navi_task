import React, { useEffect, useState } from 'react';
import { fetchModes } from '../api/api';
import { Mode } from '../types/Mode';
import { CellGrid } from './CellGrid';

type Props = {
    hoveredCells: string[];
    setHoveredCells: (value: string[]) => void;
}

export const Gameboard: React.FC<Props> = ({ hoveredCells, setHoveredCells }) => {
    const [gameModes, setGameModes] = useState<Mode[]>([]);
    const [selectedMode, setSelectedMode] = useState<Mode | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const modes = await fetchModes();
                setGameModes(modes);
                setSelectedMode(modes[0]);
            } catch (e) {
                throw new Error('Failed to fetch modes');
            }
        };

        fetchData();
    }, []);

    const handleMode = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedModeId = event.target.value;
        const mode = gameModes.find((mode) => mode.id === selectedModeId);
        setSelectedMode(mode || null);
    }

    const handleStart = () => {
        if (!selectedMode) {
            alert('Please select a mode before starting the game');
            return;
        }

    }

    return (
        <div>
            <div>
                <label htmlFor="modeDropdown"></label>
                <select 
                    id="modeDropdown"
                    onChange={handleMode}
                    value={selectedMode?.id}
                >
                    <option value="" disabled hidden>
                        Pick Mode
                    </option>
                    {gameModes.map((mode) => (
                        <option 
                            key={mode.id}
                            value={mode.id}
                        >
                            {mode.name}
                        </option>
                    ))}                    
                </select>
                <button onClick={handleStart}>START</button>
            </div>
            {selectedMode && 
                <CellGrid 
                    size={selectedMode.field} 
                    hoveredCells={hoveredCells}
                    setHoveredCells={setHoveredCells}
                />
            }
        </div>
    )
}