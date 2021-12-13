import './App.css'
import StarShipsContainer from './components/StarShipsContainer'
import { GamesContextProvider } from './contexts/gamescontext'
import ButtonAppBar from './components/nav/ButtonAppBar'
import { Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'

function App() {
  return (
    <div className="App">
      <GamesContextProvider>
      <ButtonAppBar />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/starshipscontainer" element={<StarShipsContainer />} />
      </Routes>
      </GamesContextProvider>
    </div>
  )
}

export default App
