import './App.css';
import StarShipsContainer from './components/StarShipsContainer'
import { GamesContextProvider } from './contexts/gamescontext'

function App() {
  return (
    <div className="App">
      <StarShipsContainer />
    </div>
  );
}

export default App;
