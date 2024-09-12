import { useState } from "react";

const useForm = <T extends Record<string, string | number>>(
  defaultValues: T
) => {
  const [formValues, setFormValues] = useState<T>(defaultValues);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const resetFormValues = () => {
    setFormValues(defaultValues);
  };

  return [formValues, onInputChange, resetFormValues] as const;
};

export default useForm;
