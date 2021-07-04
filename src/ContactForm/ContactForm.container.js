import { connect } from 'react-redux';
import { addContact } from '../redux/contacts/contacts-actions';
import ContactForm from './ContactForm';

const mapStateToProps = state => {
  const { items } = state.contacts;
  return { contacts: items };
};

const mapDispatchToProps = dispatch => ({
  submitHandler: ({ name, number }) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
