import './App.css'
import StarShipsContainer from './components/StarShipsContainer'
import { GamesContextProvider } from './contexts/gamescontext'
import ButtonAppBar from './components/nav/ButtonAppBar'
import { Route, Switch } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Adventure from './pages/Adventures'
import LoginForm from './components/login/LoginForm'
import GameDetails from './pages/GameDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <GamesContextProvider>
      <ButtonAppBar />
        <Switch>
        <Route path="/">
        <StarShipsContainer />
        </Route>
        <Route path="/Favorites">
        <Favorites />
        </Route>
        <Route path="/Adventures">
        <Adventure />
        </Route>
        <Route path="/GameDetails/:gameId" exact>
        <GameDetails />
        </Route>
        <Route path="/login">
        <LoginForm />
        </Route>
        <Route path="*">
        <NotFound />
        </Route>
        </Switch>
      </GamesContextProvider>
    </div>
  )
}

export default App
