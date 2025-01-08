import i18next from "i18next";
import { LOCALS } from "./constans.js";

const I18Dropdown = () => {
  const handleChange = (event) => {
    i18next.changeLanguage(event.target.value);
  };

  return (
    <div>
      {/* */}
      <select value={i18next.language} onChange={handleChange}>
        <option value={LOCALS.EN} disabled={i18next.language === LOCALS.EN}>
          English
        </option>
        <option value={LOCALS.UK} disabled={i18next.language === LOCALS.UK}>
          Ukraine
        </option>
      </select>
    </div>
  );
};

export default I18Dropdown;
