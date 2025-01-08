import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FilterAgeButton from "../buttons/FilterAgeButton.jsx";
import FilterNameButton from "../buttons/FilterNameButton.jsx";
import I18Btn from "../../i18n/I18Btn.jsx";

const SearchBar = ({ search, setSearch, onSortAge, onSortName }) => {
  return (
    <Form>
      <div className="language">
        <I18Btn />
      </div>
      <div className="display">
        <FilterAgeButton onSort={onSortAge} />
        <FilterNameButton onFilterName={onSortName} />
      </div>

      <InputGroup className="my-3">
        <Form.Control
          className="form"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
