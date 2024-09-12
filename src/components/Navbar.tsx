import { Link } from "react-router-dom";
import { useTypedSelector } from "../redux/reducers";

const Navbar = () => {
  const formState = useTypedSelector((appState) => appState.formState);

  return (
    <nav className="bg-slate-800 p-4">
      <ul className="flex justify-start gap-x-4 text-white font-bold max-w-7xl mx-auto">
        <li className="hover:text-yellow-500">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-yellow-500">
          <Link to="/default">Default</Link>
        </li>
        <li className="hover:text-yellow-500">
          <Link to="/products">Product</Link>
        </li>
        <li className="hover:text-yellow-500">
          <Link to="/login">LoginForm</Link>
        </li>
        {formState.formData.username && (
          <div className="ml-auto">
            <p>
              Bienvenido{" "}
              <span className="font-bold text-yellow-500 capitalize">
                {formState.formData.username}
              </span>
              : {formState.formData.email}
            </p>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
