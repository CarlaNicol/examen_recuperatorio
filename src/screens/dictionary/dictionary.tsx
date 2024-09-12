import { useState } from "react";
import { ModalDeleteWord } from "../../components/ModalDeleteWord"; 
import { ModalAddWord } from "../../components/ModalAddWord";
import {ModalTranslate} from "../../components/ModalTranslate";

const Dictionary = () => {
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isTranslateModalVisible, setTranslateModalVisible] = useState(false); 

  return (
    <div className="dictionary-container flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6">DICTIONARY USIP</h1>
      <p className="text-center">
        Este <b>modulo(diccionario)</b> corresponde al recuperatorio del{" "}
        <span className="text-red-500 font-bold">modulo-7</span> ReactJS. URL:{" "}
        <a
          href="https://carlanicol.github.io/examen_recuperatorio/dictionary"
          className="underline"
        >
          https://carlanicol.github.io/examen_recuperatorio/dictionary
        </a>
      </p>

      <div className="flex mt-8 space-x-10">
        <button
          onClick={() => setAddModalVisible(true)}
          className="border-2 border-black px-4 py-2 rounded shadow-lg"
        >
          Agregar Palabra
        </button>

        <button
          onClick={() => setDeleteModalVisible(true)}
          className="border-2 border-black px-4 py-2 rounded shadow-lg"
        >
          Eliminar Palabra
        </button>
      </div>

      <button  
      onClick={() => setTranslateModalVisible(true)}
      className="border-2 border-black px-8 py-2 mt-8 rounded shadow-lg">
        Traducir
      </button>

      <ModalAddWord
            isVisible={isAddModalVisible}
            onClose={() => setAddModalVisible(false)}
            status="info"
      />

      <ModalDeleteWord
        isVisible={isDeleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        status="info"
      />
       <ModalTranslate
        isVisible={isTranslateModalVisible}
        onClose={() => setTranslateModalVisible(false)}
        status="info"
      />
    </div>
  );
};

export default Dictionary;
