import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import {
  Button,
  Table,
  THName,
  THNumber,
  TR,
  THButton,
} from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Table>
      <tbody>
        {visibleContacts.map(({ name, id, number }) => {
          return (
            <TR key={id}>
              <THName>{name}</THName>
              <THNumber>{number}</THNumber>
              <THButton>
                <Button
                  type="button"
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  Delete
                </Button>
              </THButton>
            </TR>
          );
        })}
      </tbody>
    </Table>
  );
};
