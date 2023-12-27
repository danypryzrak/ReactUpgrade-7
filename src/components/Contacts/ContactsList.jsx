import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className="">
      {filteredContacts.length ? (
        filteredContacts.map(contact => (
          <li key={contact.id} className="">
            <p>
              <span>
                {contact.name}:{contact.number}
              </span>
            </p>
            <button
              type="button"
              onClick={() => handleDelete(contact.id)}
              className=""
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p>There are no contacts here</p>
      )}
    </ul>
  );
};
