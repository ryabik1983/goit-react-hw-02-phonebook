import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm/ContactForm';
// import logo from './logo.svg';
import styles from './App.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  // handleNameChange = event => {
  //   console.log(event.currentTarget.value);
  // this.setState({name: event.currentTarget.value});
  // };
  // handleNameChange = e => {
  //   console.log(e.currentTarget.value);
  //   this.setState({number: e.currentTarget.value})
  // };

  render() {
    // console.log(Date.now());

    return (
      <main className="main">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        {/* <ContactForm onSubmit={this.formSubmitData} /> */}
        <h2 className="title">Contacts</h2>
        {/* <Filter value={filter} onChange={this.changeFilter} />
    <ContactsList
      renderContacts={this.renderContacts()}
      deleteContact={this.deleteContact} */}
        {/* /> */}
      </main>

      // <Container>

      // </Container>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
