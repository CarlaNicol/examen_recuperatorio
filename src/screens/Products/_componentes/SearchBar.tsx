export function SearchBar({
    searchText,
    isInStockOnly,
    onSearchTextChange,
    onInStockOnlyChange,
  }: {
    searchText: string;
    isInStockOnly: boolean;
    onSearchTextChange: (value: string) => void;
    onInStockOnlyChange: (value: boolean) => void;
  }) {
    return (
      <div className="flex items-center justify-center mt-10">
        <form className="flex flex-col w-96">
          <input
            type="text"
            value={searchText}
            placeholder="Search..."
            onChange={(e) => onSearchTextChange(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <label>
            <input
              type="checkbox"
              checked={isInStockOnly}
              onChange={(e) => onInStockOnlyChange(e.target.checked)}
            />{" "}
            Only show products in stock
          </label>
        </form>
      </div>
    );
  }
  