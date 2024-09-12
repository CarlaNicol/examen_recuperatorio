import { ProductItem } from "../../../redux/product/productTypes";

export function ProductRow({ item }: { item: ProductItem }) {
  const productName = item.stocked ? (
    item.name
  ) : (
    <span className="line-through text-red-500">{item.name}</span>
  );

  return (
    <tr className="border-b">
      <td className="p-2 font-semibold">{productName}</td>
      <td>{item.price}</td>
    </tr>
  );
}
