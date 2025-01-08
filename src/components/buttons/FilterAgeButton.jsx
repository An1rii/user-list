import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const FilterAgeButton = ({ onSort }) => {
  const [isAsc, setIsAsc] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const { t } = useTranslation();

  const handleSort = (event) => {
    event.preventDefault();
    if (clickCount < 2) {
      onSort(isAsc);
      setIsAsc(!isAsc);
      setClickCount(clickCount + 1);
    }
  };

  return (
    <button
      onClick={handleSort}
      className="pressButton"
      disabled={clickCount >= 2}
    >
      {t(isAsc ? "Sort ASC" : "Sort DESC")}
    </button>
  );
};

export default FilterAgeButton;
