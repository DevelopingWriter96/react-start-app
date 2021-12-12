import './App.css'
import StarShipsContainer from './components/StarShipsContainer'
import { GamesContextProvider } from './contexts/gamescontext'
import ButtonAppBar from './components/nav/ButtonAppBar'

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <GamesContextProvider>
        <StarShipsContainer />
      </GamesContextProvider>
    </div>
  )
}

export default App
