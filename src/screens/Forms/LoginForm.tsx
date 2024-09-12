import useCustomForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { storeFormDetails } from "../../redux/form/formActions";
import { motion } from "framer-motion";
import { ModalInfo } from "../../components/ModalInfo";
import { useRef, useState } from "react";
import { useAppSelector } from "../../redux/reducers";

const LoginForm = () => {
  const [formValues, handleInputChange, resetFormValues] = useCustomForm({
    username: "",
    email: "",
    password: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const formState = useAppSelector((appState) => appState.form);
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const inputFieldRef = useRef<HTMLInputElement | null>(null);

  const [formStatus, setFormStatus] = useState<"success" | "error" | "info">(
    "error"
  );
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formValues.email === "" || formValues.password === "") {
      return;
    }
    setModalOpen(true);

    if (formValues.password === formState.password) {
      dispatch(
        storeFormDetails({
          username: formValues.username,
          email: formValues.email,
        })
      );
      setFeedbackMessage("Login Successful");
      setFormStatus("success");
    } else {
      setFeedbackMessage("Login Failed");
      setFormStatus("error");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <ModalInfo
        isVisible={isModalOpen}
        message={feedbackMessage}
        onClose={() => {
          setModalOpen(false);
        }}
        status={formStatus}
      />
      <ModalInfo
        isVisible={isLogoutModalOpen}
        message={"¿Estas seguro de querer cerrar sesion?"}
        onClose={() => {
          setLogoutModalOpen(false);
        }}
        status={"info"}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => {
              setLogoutModalOpen(false);
              dispatch(storeFormDetails({ username: "", email: "" }));
              resetFormValues();
              inputFieldRef.current?.focus();
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
          <form onSubmit={handleSubmitForm} className="space-y-2">
            {formState.formData.username && (
              <>
                <h5 className="text-center font-bold">
                  USERNAME: {formState.formData.username}
                </h5>
                <h5 className="text-center font-bold">
                  EMAIL: {formState.formData.email}
                </h5>
              </>
            )}
            <div className="flex flex-col">
              <label htmlFor="username">Username:</label>
              <input
                ref={inputFieldRef}
                className="border border-gray-500 rounded-md px-1.5 py-2"
                type="text"
                id="username"
                name="username"
                autoFocus
                value={formValues.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
                className="border border-gray-500 rounded-md px-1.5 py-2"
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password:</label>
              <div className="flex">
                <input
                  className="border border-gray-500 rounded-md px-1.5 py-2 w-full"
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!isPasswordVisible)}
                  className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                >
                  {isPasswordVisible ? "Hide" : "Show"}
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
              {formState.formData.username && (
                <button
                  type="button"
                  className="bg-red-500 text-white p-2 rounded w-full hover:bg-red-700"
                  onClick={() => {
                    setLogoutModalOpen(true);
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
