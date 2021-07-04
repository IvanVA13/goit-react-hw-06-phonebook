import { connect } from 'react-redux';

import { filterContact } from '../redux/contacts/contacts-actions';
import Filter from './Filter';

const mapStateToProps = ({ contacts: { filter } }) => ({
  value: filter,
});

const mapDispatchToProps = dispatch => ({
  onFilter: e => dispatch(filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
