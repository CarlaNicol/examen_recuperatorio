import { motion } from "framer-motion";
import { cn } from "../libs";

export const InfoModal = ({
  visible,
  text,
  handleClose,
  alertType,
  content,
}: {
  visible: boolean;
  text: string;
  handleClose: () => void;
  alertType: "success" | "error" | "info";
  content?: JSX.Element;
}) => {
  if (!visible) return null;

  return visible ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <motion.div
        className={cn(
          "p-10 rounded-md border max-w-[500px] relative",
          `${
            alertType === "success"
              ? "bg-green-200"
              : alertType === "error"
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
            onClick={handleClose}
          >
            X
          </button>
        </div>

        <div className="flex flex-col">
          <p>{text}</p>
        </div>
        <div>{content}</div>
      </motion.div>
    </div>
  ) : null;
};
