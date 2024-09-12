import { useState, useEffect } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const handleContador1 = () => {
    setContador(contador + 1);
  };
  const handleContador2 = () => {
    setContador(contador - 1);
  };

  useEffect(() => {
    setContador(12);
  }, []);

  useEffect(() => {
    if (contador === 15) {
      alert("contador es 15");
    }
  }, [contador]);

  useEffect(() => {
    return () => {
      console.log("El componenete se desmonto");
    };
  });

  return (
    <div className="">
      <h4>Componente Contador</h4>
      <h5>{contador}</h5>
      <div className="flex gap-x-1">
        <button
          className="bg-blue-500 p-2 text-white hover:bg-blue-400"
          onClick={handleContador1}
        >
          Aumentar
        </button>
        <button
          className="bg-blue-500 p-2 text-white hover:bg-blue-400"
          onClick={handleContador2}
        >
          Disminuir
        </button>
      </div>
    </div>
  );
};

export default Contador;
