import { Route, Routes } from 'react-router-dom';
import './App.css';
import Love from './components/Love';
import LoveMove from './components/LoveMove';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.root} Component={Love} />
        <Route path={routes['love-move']} Component={LoveMove} />
      </Routes>
    </div>
  );
}

export default App;
