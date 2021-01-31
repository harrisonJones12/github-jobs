const SearchBar = () => {
  return (
    <>
      <div className="search">
        <input
          type="text"
          className="search-field"
          placeholder="Filter by title"
        />
        <button className="search-button"></button>
      </div>
    </>
  );
};

export default SearchBar;
