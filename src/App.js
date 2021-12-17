import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactList/ContactList';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    console.log('App componentDidMount');

    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevState);
    console.log('this.state');

    if (prevProps.contacts !== this.state.contacts) {
      console.log('Обновилось поле contacts');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  formSubmitData = ({ name, number }) => {
    const newItem = { id: nanoid(), name: name, number: number };
    let isUnique = this.state.contacts.some(el => el.name === name);
    if (!isUnique) {
      this.setState(prevStates => ({
        contacts: [...prevStates.contacts, newItem],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  renderContacts = () => {
    const { filter, contacts } = this.state;
    const toLowerCaseFilter = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(toLowerCaseFilter),
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    console.log('App render');
    const { filter } = this.state;
    return (
      <main className="main">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitData} />
        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          renderContacts={this.renderContacts()}
          deleteContact={this.deleteContact}
        />
      </main>
    );
  }
}

export default App;
