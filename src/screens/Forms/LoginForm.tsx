import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { saveFormData } from "../../redux/form/formActions";
import { motion } from "framer-motion";
import { ModalInfo } from "../../components/ModalInfo";
import { useRef, useState } from "react";
import { useTypedSelector } from "../../redux/reducers";

const LoginForm = () => {
  const [values, handleChange, resetForm] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const form = useTypedSelector((state) => state.form);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [modalLogout, setModalLogout] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [formStatus, setformStatus] = useState<"success" | "error" | "info">(
    "error"
  );
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (values.email === "" || values.password === "") {
      return;
    }
    setIsOpen(true);

    if (values.password === form.password) {
      dispatch(
        saveFormData({
          username: values.username,
          email: values.email,
        })
      );
      setMessage("Login Successful");
      setformStatus("success");
    } else {
      setMessage("Login Failed");
      setformStatus("error");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <ModalInfo
        isVisible={isOpen}
        message={message}
        onClose={() => {
          setIsOpen(false);
        }}
        status={formStatus}
      />
      <ModalInfo
        isVisible={modalLogout}
        message={"¿Estas seguro de querer cerrar sesion?"}
        onClose={() => {
          setModalLogout(false);
        }}
        status={"info"}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => {
              setModalLogout(false);
              dispatch(saveFormData({ username: "", email: "" }));
              resetForm();
              inputRef.current?.focus();
            }}
            className="bg-gray-500 text-white font-bold py-1 px-2 rounded"
          >
            Si
          </button>
        </div>
      </ModalInfo>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="border-2 p-10 rounded-md mt-16 w-[500px]">
          <form onSubmit={handleSubmit} className="space-y-2">
            {form.formData.username && (
              <>
                <h5 className="text-center font-bold">
                  USERNAME: {form.formData.username}
                </h5>
                <h5 className="text-center font-bold">
                  EMAIL: {form.formData.email}
                </h5>
              </>
            )}
            <div className="flex flex-col">
              <label htmlFor="username">Username:</label>
              <input
                ref={inputRef}
                className="border border-gray-500 rounded-md px-1.5 py-2"
                type="text"
                id="username"
                name="username"
                autoFocus
                value={values.username}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
                className="border border-gray-500 rounded-md px-1.5 py-2"
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password:</label>
              <div className="flex">
                <input
                  className="border border-gray-500 rounded-md px-1.5 py-2 w-full"
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700"
              >
                Submit
              </button>
              {form.formData.username && (
                <button
                  type="button"
                  className="bg-red-500 text-white p-2 rounded w-full hover:bg-red-700"
                  onClick={() => {
                    setModalLogout(true);
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
