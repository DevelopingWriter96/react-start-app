import './App.css'
import StarShipsContainer from './components/StarShipsContainer'
import { GamesContextProvider } from './contexts/gamescontext'
import ButtonAppBar from './components/nav/ButtonAppBar'
import { Route, Routes } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Adventure from './pages/Adventures'
import LoginForm from './components/login/LoginForm'

function App() {
  return (
    <div className="App">
      <GamesContextProvider>
      <ButtonAppBar />
      <Routes>
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Adventures" element={<Adventure />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <StarShipsContainer />
      </GamesContextProvider>
    </div>
  )
}

export default App
