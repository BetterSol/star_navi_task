import './App.css';
import { Gameboard } from './components/Gameboard';
import { Table } from './components/Table';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Gameboard />
        <Table />
      </header>
    </div>
  );
};
