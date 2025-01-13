import { ChangeEvent, useState } from 'react';

type InputValue = string;
type InputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void;
type InputResetHandler = () => void;

const useInputValue = (initialValue: InputValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange: InputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const resetValue: InputResetHandler = () => {
    setValue(initialValue);
  };

  return { value, handleChange, resetValue };
};

export default useInputValue;
