import { useState } from "react";

const useInput = (validate) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let isValid = validate(value);
  let isInputValid = !isValid && isTouched;

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onBlur = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    isInputValid,
    onChange,
    onBlur,
    reset
  };
};

export default useInput;
