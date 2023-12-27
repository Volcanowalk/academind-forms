import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordError,
  } = useInput("", (value) => {
    return hasMinLength(value, 6);
  });

  // const emailIsInvalid =
  //   didEdit.email &&
  //   !isEmail(inputValues.email) &&
  //   !isNotEmpty(inputValues.email);
  // const passwordIsInvalid =
  //   didEdit.password && !hasMinLength(inputValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();

    if (emailError || passwordError) {
      return;
    }
  }

  // function handleEmailChange(event) {
  //   setEmail(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailError && "Please enter a valid email address"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordError && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
