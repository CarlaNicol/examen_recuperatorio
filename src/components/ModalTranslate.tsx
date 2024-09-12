import { motion } from "framer-motion";
import { cn } from "../libs";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { Word } from "../redux/dictionary/dictionaryReducer";

export const ModalTranslate = ({
  isVisible,
  onClose,
  status,
}: {
  isVisible: boolean;
  onClose: () => void;
  status: "success" | "error" | "info";
}) => {
  const words = useSelector((state: RootState) => state.dictionary.words);
  const [wordToTranslate, setWordToTranslate] = useState("");
  const [language, setLanguage] = useState<keyof Word>("en");
  const [translation, setTranslation] = useState("");

  const handleTranslateWord = () => {
    setTranslation(""); 

    const normalizeWord = (word: string) =>
      word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const normalizedWord = normalizeWord(wordToTranslate);

    const wordData = Object.values(words).find(
      (word: Word) =>
        normalizeWord(word.es) === normalizedWord ||
        normalizeWord(word.en) === normalizedWord ||
        normalizeWord(word.pt) === normalizedWord
    );

    if (wordData) {
      setTranslation(wordData[language]);
    } else {
      setTranslation("La palabra no existe en el diccionario.");
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
          <h2 className="text-3xl font-bold mb-4">Traducir Palabra</h2>

          <div className="flex flex-col space-y-2">
            <label>
              Palabra a traducir:
              <input
                type="text"
                value={wordToTranslate}
                onChange={(e) => {
                  setWordToTranslate(e.target.value);
                  setTranslation(""); 
                }}
                className="border px-2 py-1 w-full"
              />
            </label>

            <label>
              Idioma de traducción:
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as keyof Word)}
                className="border px-2 py-1 w-full"
              >
                <option value="en">Inglés</option>
                <option value="es">Español</option>
                <option value="pt">Portugués</option>
              </select>
            </label>

            <button
              onClick={handleTranslateWord}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
            >
              Traducir
            </button>

            <textarea
              value={translation}
              readOnly
              className="border px-2 py-1 mt-4 w-full h-20"
            />
          </div>
        </div>
      </motion.div>
    </div>
  ) : null;
};
