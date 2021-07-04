import { connect } from 'react-redux';
import { delContact } from '../redux/contacts/contacts-actions';
import ContactList from './ContactList';

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const visibleContacts = getVisibleContacts(items, filter);
  return { contacts: visibleContacts };
};

const mapDispatchToProps = dispatch => ({
  handleDelContact: id => dispatch(delContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
