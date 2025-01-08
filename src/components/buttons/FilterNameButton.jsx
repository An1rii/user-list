import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const FilterNameButton = ({ onFilterName }) => {
  const [isAscending, setIsAscending] = useState(true);
  const [clickLimit, setClickLimit] = useState(0);
  const { t } = useTranslation();
  const handleFilterName = (e) => {
    e.preventDefault();

    if (clickLimit < 2) {
      setIsAscending(!isAscending);
      onFilterName(isAscending);
      setClickLimit(clickLimit + 1);
    }
  };

  return (
    <div>
      <button
        onClick={handleFilterName}
        className="pressButton"
        disabled={clickLimit >= 2}
      >
        {t(isAscending ? "Sort Name A-Z" : "Sort Name Z-A")}
      </button>
    </div>
  );
};

export default FilterNameButton;
