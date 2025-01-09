import { ChangeEvent, useState } from 'react';

type InputValue = string | number;
type InputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void;
type InputResetHandler = () => void;

type UseInputValueResult = [InputValue, InputChangeHandler, InputResetHandler];

const useInputValue = (initialValue: InputValue): UseInputValueResult => {
  const [value, setValue] = useState(initialValue);

  const handleChange: InputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const resetValue: InputResetHandler = () => {
    setValue(initialValue);
  };

  return [value, handleChange, resetValue];
};

export default useInputValue;
