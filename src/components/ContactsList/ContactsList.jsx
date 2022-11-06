import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteCont }) => {
  return (
    <ul>
      {contacts.map(cont => (
        <li key={cont.id}>
          {cont.name}:<span>{cont.number}</span>
          <button id={cont.id} onClick={deleteCont}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
