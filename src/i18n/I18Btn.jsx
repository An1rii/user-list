"use client";

import { useState, useEffect } from "react";
import i18next from "i18next";
import { LOCALS } from "./constans.js";

const I18Dropdown = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  const handleChange = (event) => {
    const newLanguage = event.target.value;
    i18next.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  useEffect(() => {
    document.body.className = `lang-${currentLanguage}`;
  }, [currentLanguage]);

  return (
    <div className="dropdown-container">
      <select value={currentLanguage} onChange={handleChange}>
        <option value={LOCALS.EN} disabled={currentLanguage === LOCALS.EN}>
          English
        </option>
        <option value={LOCALS.UK} disabled={currentLanguage === LOCALS.UK}>
          Ukraine
        </option>
      </select>
    </div>
  );
};

export default I18Dropdown;
