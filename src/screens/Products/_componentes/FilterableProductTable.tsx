import { useState } from "react";
import { Product } from "../../../redux/product/productTypes";
import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";

export const FilterableProductTable = ({
  products,
}: {
  products: Product[];
}) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="flex flex-col">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};
