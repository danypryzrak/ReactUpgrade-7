import { useDispatch, useSelector } from 'react-redux';
import css from './Form.module.css';
import { Notify } from 'notiflix';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ev => {
    ev.preventDefault();
    const name = ev.currentTarget.name.value;
    const number = ev.currentTarget.number.value;
    const contact = {
      name,
      number,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notify.warning('This contact is already in the list');
    }

    dispatch(addContact(contact));
    // ev.currentTarget.reset();
  };

  return (
    <>
      <form className={css.Form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[\p{L}]+(([' \-][\p{L} ])?[\p{L}]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
};
