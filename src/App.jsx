import "./style/App.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/search/SearchBar.jsx";
import UserTable from "./components/user/UserTableContainer.jsx";
import useFetchData from "./fetch/useFetchData.jsx";
import { useTranslation } from "react-i18next";
import "./i18n/index";

function App() {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const { data: userData, loading, error } = useFetchData("/data.json");
  const [sortedData, setSortedData] = useState([]);

  const sortDataByName = (asc) => {
    const sorted = [...userData].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return asc ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    setSortedData(sorted);
  };

  const sortDataByAge = (asc) => {
    const sorted = [...userData].sort((a, b) =>
      asc ? a.age - b.age : b.age - a.age,
    );
    setSortedData(sorted);
  };

  if (loading) {
    return (
      <div>
        <img src="/content/images/Loader.gif" alt="Loading..." />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <h1 className="text-center mt-4">{t("User Filter")}</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        onSortAge={sortDataByAge}
        onSortName={sortDataByName}
      />
      <UserTable
        userSearch={sortedData.length ? sortedData : userData}
        search={search}
      />
    </Container>
  );
}

export default App;
