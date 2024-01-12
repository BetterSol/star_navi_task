import React, { useEffect, useState } from 'react';
import { fetchModes } from '../api/api';
import { ContextProps } from '../types/ContextPrps';
import { Mode } from '../types/Mode';
import { GameBoard } from '../components/GameBoard';
import '../styles/Gameboard.css'


export const GameContext: React.FC<ContextProps> = ({ hoveredCells, setHoveredCells }) => {
    const [gameModes, setGameModes] = useState<Mode[]>([]);
    const [selectedMode, setSelectedMode] = useState<Mode | null>(null);
    const [startGame, setStartGame] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const modes = await fetchModes();
                setGameModes(modes);
            } catch (e) {
                throw new Error('Failed to fetch modes');
            }
        };

        fetchData();
    }, [selectedMode]);

    const handleMode = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedModeId = event.target.value;
        const mode = gameModes.find((mode) => mode.id === selectedModeId);
        setSelectedMode(mode || null);
        setStartGame(false);
        setHoveredCells([]);
    }

    const handleStart = () => {
        if (!selectedMode) {
            alert('Please select a mode before starting the game');
            return;
        }
        setStartGame(true);
    }

    return (
        <div className='game-block'>
            <div className='select-block'>
                <label htmlFor="modeDropdown"></label>
                <select 
                    id="modeDropdown"
                    onChange={handleMode}
                    value={selectedMode? selectedMode.id : ''}
                    className='mode-dropdown'
                >
                    <option value="" disabled>
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
                <button 
                    onClick={handleStart}
                    className='button'
                    disabled={startGame}
                >
                    START
                </button>
            </div>
            {selectedMode && startGame &&
                <GameBoard
                    size={selectedMode.field} 
                    hoveredCells={hoveredCells}
                    setHoveredCells={setHoveredCells}
                />
            }
        </div>
    )
}