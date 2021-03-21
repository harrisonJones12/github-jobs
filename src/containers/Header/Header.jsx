import React, { useState } from "react";

import Toggle from "components/Toggle/Toggle";
import SearchBar from "components/SearchBar/SearchBar";
import FilterModal from "components/FilterModal/FilterModal";

const Header = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);

  return (
    <>
      <div className="nav-section-container">
        <div className="nav-inner-wrapper">
          <div className="heading-toggle-container">
            <h1 className="nav-heading">devjobs</h1>
            <div className="night-day-mode-toggle">
              <Toggle />
            </div>
          </div>
          <SearchBar setShowFilterModal={setShowFilterModal} />
        </div>
      </div>
      {showFilterModal && (
        <FilterModal setShowFilterModal={setShowFilterModal} />
      )}
    </>
  );
};

export default Header;
