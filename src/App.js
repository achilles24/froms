import React from "react";
//import Form from "./Form";
import useInput from "./useInput";
import "./styles.css";

export default function App() {
  const {
    value: email,
    isInputValid: isEmailValid,
    onChange: onEmailChange,
    onBlur: onEmailBlur,
    reset: resetEmail
  } = useInput((value) => (value.trim() === "" ? false : true));
  const {
    value: password,
    isInputValid: isPasswordValid,
    onChange: onPasswordChange,
    onBlur: onPasswordBlur,
    reset: resetPassword
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (email && password) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(email, password);
    resetEmail();
    resetPassword();
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div style={{ marginBottom: "8px" }}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            value={email}
            onChange={onEmailChange}
            onBlur={onEmailBlur}
          />
        </div>
        {isEmailValid && <p>Email should not empty</p>}
        <div style={{ marginBottom: "8px" }}>
          <label htmlFor="password">password</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={onPasswordChange}
            onBlur={onPasswordBlur}
          />
        </div>
        {isPasswordValid && <p>Password should not empty</p>}
        <button disabled={!formIsValid}>submit</button>
      </form>
    </div>
  );
}
