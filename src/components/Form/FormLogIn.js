import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import styles from "./FormLogIn.module.css";
import { useState } from "react";

const FormLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const logInHandler = async () => {
    let regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let regexPassword = new RegExp(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
    );

    if (!regexEmail.test(email)) {
      console.log("incorect email");
      setError({
        title: "Incorect email",
        message: "Incorect email",
      });
    }

    if (!regexPassword.test(password)) {
      console.log("incorect password");
      setError({
        title: "Incorect password",
        message: "Incorect password",
      });
    }

    const data = { email: email, password: password };
    console.log(data);

    /* const response = await fetch(
      "https://finance-7df36-default-rtdb.firebaseio.com/authentication.json",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const dataSend = await response.json();
    console.log(dataSend); */
  };

  const errorHandler = () => {
    setError(false);
  };

  const registrationHandler = () => {};

  return (
    <>
      <Card className={styles.input}>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={emailHandler}
              onClick={errorHandler}
            />
            {error && <p>{error.message}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={passwordHandler}
            />
            {error && <p>{error.message}</p>}
          </div>
          <Button onClick={logInHandler}>Log In</Button>
          <Button onClick={registrationHandler}>Registration</Button>
        </form>
      </Card>
    </>
  );
};

export default FormLogIn;
