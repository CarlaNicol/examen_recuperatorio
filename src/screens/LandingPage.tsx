export const LandingPage = () => {
  return (
    <div className="">
      <div className="bg-green-400 text-5xl mt-10 py-10 px-16 text-white">
        Modulo 7: DESARROLLO FRONTEND CON REACTJS
      </div>

      <h1 className="text-3xl mt-10">Bienvenido</h1>

      <hr className="mt-5 mb-10 border-t-2 border-green-500" />

      <p>
        Este módulo se centra en el uso de{" "}
        <span className="font-bold">React</span>, incluyendo la creación de
        componentes, el manejor de hooks, y el uso de Redux
      </p>

      <hr className="mt-5 mb-10 border-t-2 border-green-500" />

      <h1 className="text-3xl mt-10">Temas Cubiertos</h1>

      <hr className="mt-5 mb-10 border-t-2 border-green-500" />

      <div className="flex gap-x-2">
        <p>Componentes funcionales y de clase</p>
        <p>Uso de React hooks como useState y useEffect</p>
        <p>Creación de custom hooks como useForm</p>
        <p>Gestión de variables de estado con useState</p>
        <p>Gestión de estado global con Redux</p>
        <p>Integración de Redux con React</p>
        <p>Manejo de Formularios en React</p>
        <p>Publicando nuestra Página con GitHub Pages</p>
      </div>

      <h1 className="text-3xl mt-10">Recursos Adicionales</h1>

      <hr className="mt-5 mb-10 border-t-2 border-green-500" />

      <p>
        Para profundizar en los temas cubiertos, consulta los siguientes
        recursos:{" "}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          React Documentation
        </a>
        ,{" "}
        <a
          href="https://reactjs.org/docs/hooks-intro.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          React Hooks
        </a>
        ,{" "}
        <a
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Redux Documentation
        </a>
      </p>
    </div>
  );
};
