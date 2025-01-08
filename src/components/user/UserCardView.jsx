import React from "react";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Додано для перекладів
import SearchUser from "../search/SearchUser";

function UserCardView({ userSearch, search, favorites, toggleFavorite }) {
  const { t } = useTranslation(); // Хук для використання перекладів (t — функція перекладу)

  return (
    <div className="card-container">
      {userSearch
        .filter((item) => SearchUser(item, search))
        .map((item, index) => (
          <div className="card" key={index}>
            {/* Використання динамічного перекладу з i18next */}
            <h3>
              {t("name")}: {item.name}
            </h3>
            <p>
              <strong>{t("favourite")}:</strong>
              <FaStar
                onClick={() => toggleFavorite(item.id)}
                style={{
                  cursor: "pointer",
                  color: favorites.includes(item.id) ? "yellow" : "gray",
                  marginLeft: "10px",
                }}
              />
            </p>
            <p>
              <strong>{t("age")}:</strong> {item.age}
            </p>
            <p>
              <strong>{t("phone")}:</strong> {item.phone}
            </p>
            <img src={`/content/images/${item.image}.svg`} alt={item.image} />
            <p>
              <strong>{t("phrase")}:</strong> {item.phrase}
            </p>
            <p>
              <strong>{t("video")}:</strong>{" "}
              {item.video ? (
                <video
                  src={`/content/videos/${item.video}.mp4`}
                  controls
                  className="video-player"
                />
              ) : null}
            </p>
          </div>
        ))}
    </div>
  );
}

export default UserCardView;
