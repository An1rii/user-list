import React, { useState, useEffect } from "react";
import UserTableView from "./UserTableView.jsx";
import UserCardView from "./UserCardView.jsx";
import ToggleViewButton from "../buttons/ToggleViewButton.jsx";

function UserTableContainer({ userSearch, search }) {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const [isTableView, setIsTableView] = useState(true);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleView = () => {
    setIsTableView(!isTableView);
  };

  const toggleFavorite = (userId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(userId)
        ? prevFavorites.filter((id) => id !== userId)
        : [...prevFavorites, userId],
    );
  };

  return (
    <>
      <ToggleViewButton isTableView={isTableView} toggleView={toggleView} />
      {isTableView ? (
        <UserTableView
          userSearch={userSearch}
          search={search}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      ) : (
        <UserCardView
          userSearch={userSearch}
          search={search}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
    </>
  );
}

export default UserTableContainer;
