import React from "react";

import Toggle from "components/Toggle/Toggle";

import SearchBar from "components/SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="nav-section-container">
      <div className="nav-inner-wrapper">
        <div className="heading-toggle-container">
          <h1 className="nav-heading">devjobs</h1>
          <div className="night-day-mode-toggle">
            <Toggle />
          </div>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
