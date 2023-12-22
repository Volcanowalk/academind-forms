import { useRef, useState } from "react";

export default function Login() {
  const [emailInvalid, setEmailInvalid] = useState();

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const inputEmail = email.current.value;
    const inputPassword = password.current.password;

    const emailIsValid = inputEmail.includes("@");

    if (!emailIsValid) {
      setEmailInvalid(true);
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
