
// home
import Home from './pages/Home';

// tela de login 
import Login from "./pages/Login";

// css 
import {StyledContainer} from './components/Styles.js';


// routes 

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// app 

function App() {
  return (
    <Router>
      <StyledContainer>
        <Login />

      </StyledContainer>
      </Router>  
    );
}

export default App;
