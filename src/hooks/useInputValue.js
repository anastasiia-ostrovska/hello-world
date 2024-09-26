import { useState } from 'react';

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const resetValue = () => {
    setValue(initialValue);
  };

  return [value, handleChange, resetValue];
};

export default useInputValue;
