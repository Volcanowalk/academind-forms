import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  //State variables
  const [inputValue, setInputValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(inputValue);

  //Functions

  function handleInputBlur() {
    setDidEdit(true);
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
    setDidEdit(false);
  }

  return {
    value: inputValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
