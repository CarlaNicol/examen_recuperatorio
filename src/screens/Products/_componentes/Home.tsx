import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateProducts } from "../../../redux/product/productActions";
import { useAppSelector } from "../../../redux/reducers";
import { FilterableProductTable } from "./FilterableProductTable";

const Home = () => {
  const productState = useAppSelector((appState) => appState.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateProducts([
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
  }, [dispatch]);

  return (
    <>
      <FilterableProductTable productList={productState.productList} />
    </>
  );
};

export default Home;
