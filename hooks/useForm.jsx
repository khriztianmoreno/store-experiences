import { useState, useCallback } from 'react';

const useForm = (initState = {}) => {
  const [form, setForm] = useState(initState);

  const handleChange = useCallback(({ target }) => {
    const { name, type, checked, value: inputValue } = target;
    const value = type === 'checkbox' ? checked : inputValue;

    setForm({
      ...form,
      [name]: value,
    });
  });

  return {
    form,
    handleChange,
  };
};

export default useForm;
