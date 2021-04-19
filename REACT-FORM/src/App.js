import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

import Form from './components/form/Form'
import Popup from './components/popup/Popup'
import View from './components/view/View'
import Notes from './components/notes/Notes'

class App extends Component {
  state = {
    firstname:'',
    lastname:'',
    phonenumber:'',
    role:'',
    message:'',
    showPopup:false,
    notes : []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/notes')
    .then( res => {
      this.setState({notes:res.data})
    })
  }

submit =()=>{
  
}

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  popupHandler = (e) => {
    this.setState({ showPopup: true });
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <Form  changeHandler ={this.changeHandler} submit={this.popupHandler } />
        <View {...this.state}/>
        <Notes notes = {this.state.notes}/>
        {this.state.showPopup && <Popup data= {this.state} submit = {this.submit} />}
      </div>
    );
  }
}

export default App;

