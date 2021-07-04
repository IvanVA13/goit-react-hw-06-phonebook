import PropTypes from 'prop-types';
import styles from './ContactList.module.scss';

const ContactList = props => {
  const { contacts, handleDelContact } = props;
  return (
    contacts.length !== 0 && (
      <ul className={styles['contacts-list']}>
        {contacts.map(({ name, number, id }) => {
          return (
            <li className={styles['contacts-list-item']} key={id}>
              <div className={styles['contact-container']}>
                <span className={styles.contact}>{name}:</span>
                <span className={styles.contact}>{number}</span>
                <button
                  className={styles.btn}
                  type="button"
                  onClick={() => handleDelContact(id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    )
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
