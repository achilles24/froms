import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const isEmailValid = email.trim() === "" ? false : true;
  const isPasswordValid = password.trim() === "" ? false : true;

  const isEmailInputValid = !isEmailValid && isEmailTouched;
  const isPasswordInputValid = !isPasswordValid && isPasswordTouched;

  let isFormValid = false;

  if (isEmailValid && isPasswordValid) {
    isFormValid = true;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const emailBlurHandler = () => {
    setIsEmailTouched(true);
  };

  const passwordBlurHandler = () => {
    setIsPasswordTouched(true);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: "8px" }}>
          <label htmlFor="email">name</label>
          <input
            id="email"
            value={email}
            onChange={emailHandler}
            onBlur={emailBlurHandler}
          />
        </div>
        {isEmailInputValid && <p>Email is Invalid</p>}
        <div style={{ marginBottom: "8px" }}>
          <label htmlFor="password">password</label>
          <input
            id="password"
            value={password}
            onChange={passwordHandler}
            onBlur={passwordBlurHandler}
          />
        </div>
        {isPasswordInputValid && <p>Password is Invalid</p>}
        <button disabled={!isFormValid}>submit</button>
      </form>
    </>
  );
};
export default Form;
