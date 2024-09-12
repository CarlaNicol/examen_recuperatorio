import { motion } from "framer-motion";
import { cn } from "../libs";

export const ModalInfo = ({
  isVisible,
  message,
  onClose,
  status,
  children,
}: {
  isVisible: boolean;
  message: string;
  onClose: () => void;
  status: "success" | "error" | "info";
  children?: JSX.Element;
}) => {
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
          <p>{message}</p>
        </div>
        <div>{children}</div>
      </motion.div>
    </div>
  ) : null;
};
