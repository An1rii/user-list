import Table from "react-bootstrap/Table";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import SearchUser from "../search/SearchUser.js";
import useUserActions from "../../redux/ReduxComponent/RemoveSetUsersToRedux.jsx";
function UserTableView({ userSearch, search, favorites, toggleFavorite }) {
  const { t } = useTranslation();
  const { handleRemoveUser } = useUserActions();
  return (
    <Table className="custom-table" striped bordered hover>
      <thead>
        <tr>
          <th>{t("id")}</th>
          <th>{t("favourite")}</th>
          <th>{t("name")}</th>
          <th>{t("age")}</th>
          <th>{t("phone")}</th>
          <th>{t("image")}</th>
          <th>{t("phrase")}</th>
          <th>{t("video")}</th>
          <th>{t("Actions")}</th>
        </tr>
      </thead>
      <tbody>
        {userSearch
          .filter((item) => SearchUser(item, search))
          .map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <FaStar
                  onClick={() => toggleFavorite(item.id)}
                  style={{
                    cursor: "pointer",
                    color: favorites.includes(item.id) ? "yellow" : "gray",
                  }}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.phone}</td>
              <td>
                {item.image && (
                  <img
                    src={`/content/images/${item.image}.svg`}
                    alt={item.image}
                    className="user-image"
                  />
                )}
              </td>
              <td>{item.phrase}</td>
              <td>{item.video}</td>
              <td>
                <button
                  onClick={() => handleRemoveUser(item.id)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default UserTableView;
