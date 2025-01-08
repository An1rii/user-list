const includesSearch = (value, search) => {
  return value.toString().toLowerCase().includes(search.toLowerCase());
};

const searchUser = (item, search) => {
  const fieldsToSearch = ["id", "name", "age"];
  return fieldsToSearch.some((field) => includesSearch(item[field], search));
};

export default searchUser;
