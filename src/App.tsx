import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto grow">
        <Outlet />
      </div>
      <div className="justify-center font-bold flex p-2">
        <span className="">&copy; 2024 Modulo 7</span>
      </div>
    </div>
  );
};
