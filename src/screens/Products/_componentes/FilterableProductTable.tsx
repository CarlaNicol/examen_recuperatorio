import { useState } from "react";
import { ProductItem } from "../../../redux/product/productTypes";
import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";

export const FilterableProductTable = ({
  productList,
}: {
  productList: ProductItem[];
}) => {
  const [searchText, setSearchText] = useState("");
  const [isInStockOnly, setIsInStockOnly] = useState(false);

  return (
    <div className="flex flex-col">
      <SearchBar
        filterText={searchText}
        inStockOnly={isInStockOnly}
        onFilterTextChange={setSearchText}
        onInStockOnlyChange={setIsInStockOnly}
      />
      <ProductTable
        products={productList}
        filterText={searchText}
        inStockOnly={isInStockOnly}
      />
    </div>
  );
};
