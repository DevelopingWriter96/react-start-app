import './App.css'
import StarShipsContainer from './components/StarShipsContainer'
import { GamesContextProvider } from './contexts/gamescontext'
import ButtonAppBar from './components/nav/ButtonAppBar'
import { Route, Switch, Redirect } from 'react-router-dom'
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
        <Route path = "/" exact>
        <Redirect to="/games" />
        </Route>
        <Route path="/games">
        <StarShipsContainer />
        </Route>
        <Route path="/favorites">
        <Favorites />
        </Route>
        <Route path="/adventures">
        <Adventure />
        </Route>
        <Route path="/gameDetails/:gameId" exact>
        <GameDetails />
        </Route>
        <Route path="/login">
        <LoginForm />
        </Route>
        <Route path="*">
        <NotFound/>
        </Route>
        </Switch>
      </GamesContextProvider>
    </div>
  )
}

export default App
