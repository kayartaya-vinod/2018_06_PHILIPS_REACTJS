import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import ContactList from './components/ContactList';
import { BASE_URL } from './constants';

class App extends Component {

  state = {
    contacts: []
  };

  searchAndFilter(token) {
    fetch(BASE_URL + '?q=' + token)
      .then(resp => resp.json())
      .then(data => this.setState({ contacts: data }));
  }

  deleteContact(id) {
    let options = {
      method: 'delete'
    };

    fetch(BASE_URL + id, options)
      .then(() => {
        let data = [...this.state.contacts];
        let index = data.findIndex(d => d.id === id);
        data.splice(index, 1);
        this.setState({ contacts: data });
      })
      .catch(err => console.log(err));
  }

  constructor(props) {
    super(props);
    fetch(BASE_URL)
      .then(resp => resp.json())
      .then(data => this.setState({ contacts: data }))
      .catch(err => console.log(err));
  }

  render() {
    const childProps = {
      ...this.state,
      deleteContact: this.deleteContact.bind(this),
      searchAndFilter: this.searchAndFilter.bind(this)
    };

    return (
      <React.Fragment>
        <Header />
        <ContactList {...childProps} />
      </React.Fragment>
    );
  }
}

export default App;
