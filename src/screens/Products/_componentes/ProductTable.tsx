import { ProductItem } from "../../../redux/product/productTypes";
import { CategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

export function ProductTable({
  productList,
  searchText,
  isInStockOnly,
}: {
  productList: ProductItem[];
  searchText: string;
  isInStockOnly: boolean;
}) {
  const rows: JSX.Element[] = [];
  let lastCategory: string | null = null;

  productList.forEach((item) => {
    if (item.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
      return;
    }
    if (isInStockOnly && !item.stocked) {
      return;
    }
    if (item.category !== lastCategory) {
      rows.push(
        <CategoryRow
          categoryName={item.category}
          key={item.category}
        />
      );
    }
    rows.push(<ProductRow item={item} key={item.name} />);
    lastCategory = item.category;
  });

  return (
    <table className="table-auto border rounded-md max-w-[1000px] mx-auto w-full mt-5">
      <thead>
        <tr className="text-left bg-gray-100">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Price</th>
        </tr>
      </thead>
      <tbody className="bg-white">{rows}</tbody>
    </table>
  );
}
