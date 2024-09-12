import { useAppSelector } from "../../../redux/reducers";

const Description = () => {
  const moduleState = useAppSelector((appState) => appState.module);

  return (
    <>
      <h4>{moduleState.moduleName}</h4>
    </>
  );
};

export default Description;
