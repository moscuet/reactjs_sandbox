import { Component } from 'react';
import './App.css';
import Counter from './counter/Counter'
import Header from './header/Header'
import Footer from './footer/Footer'


class App extends Component {
  render(){
    return (
      <div className = "wrapper">
        <Header/>
        <Counter/>
        <Footer/>
      </div>
    );
  }

}

export default App;
