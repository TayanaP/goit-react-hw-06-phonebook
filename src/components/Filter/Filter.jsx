import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/filtersSlice';

import { Label, Input } from 'components/ContactForm/ContactForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        title="Enter name or surname"
        required
        onChange={e => dispatch(setContactsFilter(e.target.value))}
      />
    </Label>
  );
};
