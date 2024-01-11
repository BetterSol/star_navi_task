import { useState } from 'react';
import './App.css';
import { Gameboard } from './components/Gameboard';
import { Table } from './components/Table';

export const App = () => {
  const [hoveredCells, setHoveredCells] = useState<string[]>([])

  return (
    <div className="App">
      <div className="App-container">
        <Gameboard 
          hoveredCells={hoveredCells}
          setHoveredCells={setHoveredCells}
        />
        <Table hoveredCells={hoveredCells} />
      </div>
    </div>
  );
};
