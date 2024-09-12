import { useTypedSelector } from "../../../redux/reducers";

const Description = () => {
  const defaultState = useTypedSelector((state) => state.default);

  return (
    <>
      <h4>{defaultState.name}</h4>
    </>
  );
};

export default Description;
