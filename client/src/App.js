import './App.css';
import './index.css';
// import Dash from './Components/Dash';
import Nav from './components/Nav';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Download from './components/Download';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        
        <Switch>
          
          <Route exact path='/' component={Download} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
