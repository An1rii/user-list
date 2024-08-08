const includesSearch = (value, search) => {
    return value.toString().toLowerCase().includes(search.toLowerCase());
};

const SearchUser = (item, search) => {
    const fieldsToSearch = ['id', 'name', 'age'];
    return fieldsToSearch.some(field => includesSearch(item[field], search));
};

export default SearchUser;