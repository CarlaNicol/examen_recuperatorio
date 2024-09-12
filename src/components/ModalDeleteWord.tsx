import { motion } from "framer-motion";
import { cn } from "../libs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteWord } from "../redux/dictionary/dictionaryActions";

export const ModalDeleteWord = ({
  isVisible,
  onClose,
  status,
}: {
  isVisible: boolean;
  onClose: () => void;
  status: "success" | "error" | "info";
}) => {
  const dispatch = useDispatch();
  const words = useSelector((state: any) => state.dictionary.words);
  const [wordToDelete, setWordToDelete] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDeleteWord = () => {
    if (!wordToDelete) {
      setErrorMessage("Por favor ingresa una palabra.");
      return;
    }

 
    if (!words[wordToDelete]) {
      setErrorMessage("La palabra no existe en el diccionario.");
    } else {
      dispatch(deleteWord(wordToDelete));
      setWordToDelete("");
      setErrorMessage("");
      onClose();
    }
  };

  if (!isVisible) return null;

  return isVisible ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <motion.div
        className={cn(
          "p-10 rounded-md border max-w-[500px] relative",
          `${
            status === "success"
              ? "bg-green-200"
              : status === "error"
              ? "bg-red-200"
              : "bg-blue-200"
          }`
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 right-1">
          <button
            className="bg-red-500 text-white size-5 rounded-md text-sm"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4">Eliminar palabra</h2>

          <div className="flex flex-col space-y-2">
            <label>
              Palabra:
              <input
                type="text"
                value={wordToDelete}
                onChange={(e) => setWordToDelete(e.target.value)}
                className="border px-2 py-1 w-full"
              />
            </label>
            {errorMessage && (
              <p className="text-red-500">{errorMessage}</p>
            )}
            <button
              onClick={handleDeleteWord}
              className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
            >
              Eliminar
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  ) : null;
};
