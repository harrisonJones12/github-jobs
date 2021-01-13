import React from "react";

import Toggle from "components/Toggle/Toggle";

const Header = () => {
  return (
    <div className="nav-section-container">
      <div className="nav-background">
        <h1 className="nav-heading">devjobs</h1>
        <div className="night-day-mode-toggle">
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
