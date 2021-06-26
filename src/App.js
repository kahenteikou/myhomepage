import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IndexPage from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={IndexPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
