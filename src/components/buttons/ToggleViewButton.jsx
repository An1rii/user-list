import { useTranslation } from "react-i18next";

const ToggleViewButton = ({ isTableView, toggleView }) => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <button onClick={toggleView} className="showContent">
        {t(isTableView ? "Show Card" : "Show Table")}
      </button>
    </div>
  );
};

export default ToggleViewButton;
