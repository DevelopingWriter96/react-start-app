import './App.css';
import StarShipsContainer from './components/StarShipsContainer';
import { ThemeProvider} from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
    <div className="App">
      <StarShipsContainer />
    </div>
      </ThemeProvider>
  );
}

export default App;
