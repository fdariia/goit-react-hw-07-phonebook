import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/phoneBookSlice';
import { getFilteredContacts } from 'redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactListItem} key={id}>
          <span>{name}</span>
          <span>{number}</span>
          <button
            className={css.contactListButton}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
