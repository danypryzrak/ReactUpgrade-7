import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/phonebookSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = ev => {
    const filter = ev.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <label name="filter" className="">
      <span className="">You can find contacts by name</span>
      <input
        type="text"
        name="filter"
        onChange={handleFilterChange}
        className=""
      />
    </label>
  );
};
