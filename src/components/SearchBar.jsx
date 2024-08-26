import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PressButton from "./buttons/PressButton.jsx";
import PressButton1 from "./buttons/PressButton1.jsx";
import PressButton2 from "./buttons/PressButton2.jsx";



const SearchBar = ({ search, setSearch }) => {
    return (
        <Form>
            <div className='display'>
                <PressButton/>
                <PressButton1/>
                <PressButton2/>
            </div>
                <InputGroup className='my-3'>
                    <Form.Control
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search'
                    />
                </InputGroup>
        </Form>
);
}

export default SearchBar;
