const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockChange,
}) => {
  return (
    <form className="search_bar_container">
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockChange(e.target.checked)}
        />
        {""}
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
