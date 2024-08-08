import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchBar = ({ search, setSearch }) => {
    return (
        <Form>
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

SearchBar.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
};

export default SearchBar;
