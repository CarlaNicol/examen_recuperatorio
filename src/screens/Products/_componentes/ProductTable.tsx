import { Product } from "../../../redux/product/productTypes";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

export function ProductTable({
  products,
  filterText,
  inStockOnly,
}: {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}) {
  const rows: JSX.Element[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
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
