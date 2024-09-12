import { motion } from "framer-motion";
import { cn } from "../libs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWord } from "../redux/dictionary/dictionaryActions";

export const ModalAddWord = ({
  isVisible,
  onClose,
  status,
}: {
  isVisible: boolean;
  onClose: () => void;
  status: "success" | "error" | "info";
}) => {
  const dispatch = useDispatch();
  const [newWord, setNewWord] = useState({ en: "", es: "", pt: "" });

  const handleAddWord = () => {
    if (newWord.en && newWord.es && newWord.pt) {
      dispatch(addWord(newWord));
      setNewWord({ en: "", es: "", pt: "" });
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
          <h2 className="text-3xl font-bold mb-4">Agregar nueva palabra</h2>

          <div className="flex flex-col space-y-2">
            <label>
              Español:
              <input
                type="text"
                value={newWord.es}
                onChange={(e) =>
                  setNewWord({ ...newWord, es: e.target.value })
                }
                className="border px-2 py-1 w-full"
              />
            </label>
            <label>
              Inglés:
              <input
                type="text"
                value={newWord.en}
                onChange={(e) =>
                  setNewWord({ ...newWord, en: e.target.value })
                }
                className="border px-2 py-1 w-full"
              />
            </label>
            <label>
              Portugués:
              <input
                type="text"
                value={newWord.pt}
                onChange={(e) =>
                  setNewWord({ ...newWord, pt: e.target.value })
                }
                className="border px-2 py-1 w-full"
              />
            </label>
            <button
              onClick={handleAddWord}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
            >
              Agregar
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  ) : null;
};
