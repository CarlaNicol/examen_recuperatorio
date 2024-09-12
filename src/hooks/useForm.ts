import { useState } from "react";

const useForm = <T extends Record<string, string | number>>(
  initialValues: T
) => {
  const [values, setValue] = useState<T>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValue(initialValues);
  };

  return [values, handleChange, resetForm] as const;
};

export default useForm;
