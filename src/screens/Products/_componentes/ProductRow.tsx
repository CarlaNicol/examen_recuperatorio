import { Product } from "../../../redux/product/productTypes";

export function ProductRow({ product }: { product: Product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span className="line-through text-red-500">{product.name}</span>
  );

  return (
    <tr className="border-b">
      <td className="p-2 font-semibold">{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
