import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const desktopBreakPoint = 1440;

  const TabletBreakPoint = 768;

  useEffect(() => {
    //call function to set viewport width in state
    const handleWindowResize = () => setViewportWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const filterIcon = (
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
        fill="#fff"
        fill-rule="nonzero"
        className="filter-icon"
      />
    </svg>
  );

  const searchIcon = (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
        fill="#fff"
        fill-rule="nonzero"
        className="search-icon"
      />
    </svg>
  );

  const searchDesktopIcon = (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className="search-desktop-icon"
    >
      <path
        d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
        fill="#5964e0"
        fill-rule="nonzero"
      />
    </svg>
  );

  const locationIcon = (
    <svg
      width="17"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className="location-icon"
    >
      <path
        d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
        fill="#5964E0"
        fill-rule="nonzero"
      />
    </svg>
  );

  const titleSearch = (
    <div className="search-icon-input-container">
      {viewportWidth >= TabletBreakPoint && searchDesktopIcon}
      <input
        type="text"
        className="title-search-field"
        placeholder={
          viewportWidth >= desktopBreakPoint
            ? "Filter by title, companies, expertise…"
            : "Filter by title ..."
        }
      />
    </div>
  );

  const desktopFilterSection = (
    <>
      <div className="vertical-line"></div>
      <div className="filter-icon-input-desktop-container">
        {locationIcon}
        <input
          type="text"
          className="location-search-field"
          placeholder="Filter by location…"
        />
      </div>
      <div className="vertical-line two"></div>
    </>
  );

  const mobileFilterSearch = (
    <div className="icon-button-group">
      {filterIcon}
      <button className="search-button">{searchIcon}</button>
    </div>
  );

  const desktopSearchSection = (
    <div className="search-button-input-container">
      <div className="input-label-container">
        <input
          type="checkbox"
          className="full-time-only-checkbox"
          id="full-time-only-checkbox"
          name="vehicle1"
          value="Bike"
        />
        <label for="full-time-only-checkbox" className="check-box-label">
          {viewportWidth >= TabletBreakPoint ? "full time" : "full time only"}
        </label>
      </div>
      <button className="tablet-desktop-search-button">search</button>
    </div>
  );

  return (
    <>
      <div className="search-container">
        <form className="search-form">
          <fieldset className="field-set">
            {titleSearch}
            {viewportWidth >= TabletBreakPoint
              ? desktopFilterSection
              : mobileFilterSearch}
            {viewportWidth >= TabletBreakPoint && desktopSearchSection}
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
