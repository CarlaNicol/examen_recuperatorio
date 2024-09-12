import Logo from "./Default/_components/Logo";
import Description from "./Default/_components/Description";
import OpenLink from "../components/OpenLink";
import Contador from "./Default/_components/Contador";

const Default = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Contador />
      <Logo />
      <Description />
      <OpenLink title="Learn React" url="https://react.dev/" />
      <OpenLink title="Mi proyecto react (Github)" url="" />
    </div>
  );
};

export default Default;
