import React, { useEffect, useRef } from "react";

export default function Filtermodal({ setShowFilterModal }) {
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

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowFilterModal(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const filterModalRef = useRef(null);
  useOutsideAlerter(filterModalRef);

  return (
    <div className="filter-modal">
      <div className="filter-modal-content" ref={filterModalRef}>
        {/* location input field */}
        <div className="mobile-icon-input-container">
          {locationIcon}
          <input
            type="text"
            className="location-search-field"
            placeholder="Filter by location…"
          />
        </div>
        <hr className="horizontal-line" />
        {/* full time check box */}
        <div className="mobile-checkbox-button-container">
          <div className="input-label-container">
            <input
              type="checkbox"
              className="full-time-only-checkbox"
              id="full-time-only-checkbox"
              name="vehicle1"
              value="Bike"
            />
            <label for="full-time-only-checkbox" className="check-box-label">
              full time only
            </label>
          </div>
          <button className="mobile-filter-search-button">search</button>
        </div>
      </div>
    </div>
  );
}
