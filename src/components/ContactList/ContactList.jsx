import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/phoneBookSlice';
import { getContacts } from 'redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  console.log(contacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, phone }) => (
        <li className={css.contactListItem} key={id}>
          <span>{name}</span>
          <span>{phone}</span>
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
