import { Component } from 'react';
// import PropTypes from 'prop-types';

export class AddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const event = e.target;
    if (event.type === 'text') {
      this.setState({ name: event.value });
    }
    if (event.type === 'tel') {
      this.setState({ number: event.value });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
