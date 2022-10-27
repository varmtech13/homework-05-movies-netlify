import { FcSearch } from 'react-icons/fc';
import { Form } from './SearchBar.styled';
import { DebounceInput } from 'react-debounce-input';


export default function SearchBar({ value, onChange }) {

  return (
    <>
      <Form>
        <FcSearch size="25" />
        <DebounceInput
          minLength={2}
          debounceTimeout={500}
          placeholder={'input your query'}
          className="style-input"
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </Form>
    </>
  );
}
