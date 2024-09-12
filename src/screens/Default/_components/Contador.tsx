import { useState, useEffect } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setCount(12);
  }, []);

  useEffect(() => {
    if (count === 15) {
      alert("El contador es 15");
    }
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("El componente se desmontó");
    };
  });

  return (
    <div className="">
      <h4>Componente Contador</h4>
      <h5>{count}</h5>
      <div className="flex gap-x-1">
        <button
          className="bg-blue-500 p-2 text-white hover:bg-blue-400"
          onClick={increaseCount}
        >
          Aumentar
        </button>
        <button
          className="bg-blue-500 p-2 text-white hover:bg-blue-400"
          onClick={decreaseCount}
        >
          Disminuir
        </button>
      </div>
    </div>
  );
};

export default Contador;
