import ProjectLogo from "./Default/_components/Logo";
import ModuleDescription from "./Default/_components/Description";
import ExternalLink from "../components/OpenLink";
import Counter from "./Default/_components/Contador";

const Default = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Counter />
      <ProjectLogo />
      <ModuleDescription />
      <ExternalLink title="Learn React" url="https://react.dev/" />
      <ExternalLink title="Mi proyecto react (Github)" url="" />
    </div>
  );
};

export default Default;
