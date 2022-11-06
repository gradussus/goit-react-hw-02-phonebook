import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddContact } from './AddContact/AddContact';
import { ContactList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContact = ({ name, number }) => {
    const includeName = name => {
      return this.state.contacts.find(
        elem => elem.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      );
    };
    const includeNumber = number => {
      return this.state.contacts.find(elem => elem.number === number);
    };

    const contact = {
      id: nanoid(10),
      name,
      number,
    };
    if (includeName(contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }
    if (includeNumber(contact.number)) {
      return alert(`${contact.number} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = e => {
    const id = e.currentTarget.id;

    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(el => el.id !== id)],
    }));
  };

  // changeFilter = e => {
  //   this.setState({ filter: e.target.value });
  // };

  filtredContacts = () => {
    const { contacts, filter } = this.state;

    const toLowCaseFilter = filter.toLocaleLowerCase();

    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(toLowCaseFilter)
    );
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <AddContact onSubmit={this.addContact} />
        <ContactList
          contacts={this.filtredContacts()}
          deleteCont={this.deleteContact}
        />
      </>
    );
  }
}
