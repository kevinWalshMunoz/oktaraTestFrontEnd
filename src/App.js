import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <switch>
          <Route path='/' />
        </switch>
      </Router>
    </>
  );
}

export default App;
