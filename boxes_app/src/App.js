import Header from './header/Header'
import './App.css'
import MainRouter from './mainRouter/MainRouter'
import Footer from './footer/Footer'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router> 
      <Header/>
      <MainRouter/>
      <Footer/>
    </Router>
  );
}

export default App;
