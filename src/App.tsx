import { useState } from 'react';
import './App.css';
import { GameContext } from './helpers/GameContext';
import { Table } from './components/Table';

export const App = () => {
  const [hoveredCells, setHoveredCells] = useState<string[]>([])

  return (
    <div className="App">
      <div className="App-container">
        <GameContext 
          hoveredCells={hoveredCells}
          setHoveredCells={setHoveredCells}
        />
        <Table hoveredCells={hoveredCells} />
      </div>
    </div>
  );
};
