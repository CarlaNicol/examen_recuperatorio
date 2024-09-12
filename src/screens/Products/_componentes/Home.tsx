import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../../../redux/product/productActions";
import { useTypedSelector } from "../../../redux/reducers";
import { FilterableProductTable } from "./FilterableProductTable";

const Home = () => {
  const product = useTypedSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setProducts([
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        {
          category: "Fruits",
          price: "$2",
          stocked: false,
          name: "Passionfruit",
        },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        {
          category: "Vegetables",
          price: "$4",
          stocked: false,
          name: "Pumpkin",
        },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
      ])
    );
  }, []);

  return (
    <>
      <FilterableProductTable products={product.PRODUCTS} />
    </>
  );
};

export default Home;
