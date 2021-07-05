import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './components/Home'
import Favorite from './components/Favorite'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Header />
        <switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/favorite'>
            <Favorite />
          </Route>
        </switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
