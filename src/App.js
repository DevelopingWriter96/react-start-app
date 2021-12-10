import './App.css'
import StarShipsContainer from './components/StarShipsContainer'
import { GamesContextProvider } from './contexts/gamescontext'

function App() {
  return (
    <div className="App">
      <GamesContextProvider>
        <StarShipsContainer />
      </GamesContextProvider>
    </div>
  )
}

export default App
