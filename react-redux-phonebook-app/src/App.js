import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import ContactList from './components/ContactList';

class App extends Component {
  render() {
  
    return (
      <React.Fragment>
        <Header />
        <ContactList/>
      </React.Fragment>
    );
  }
}

export default App;
