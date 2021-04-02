import Header from './header/Header'
import './App.css'
import Main from './main/Main'
import Footer from './footer/Footer'
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <div className = 'wrapper'> 
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
