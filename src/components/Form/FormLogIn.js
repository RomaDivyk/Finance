import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import styles from "./FormLogIn.module.css";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const FormLogIn = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    const response = await fetch(
      "https://finance-7df36-default-rtdb.firebaseio.com/authentication.json",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const dataSend = await response.json();
    console.log(dataSend);
    reset();
  };

  return (
    <>
      <Card className={styles.input}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "Email input is empty!",
                minLength: {
                  value: 2,
                  message: "Min length 2",
                },
              })}
            />
            <div>
              {errors?.email && <p>{errors?.email.message || "Error !"}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                required: "Password input is empty!",
                minLength: {
                  value: 2,
                  message: "Min length 2",
                },
              })}
            />
            <div>
              {errors?.password && (
                <p>{errors?.password.message || "Error!"}</p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            /* onClick={logInHandler} */
          >
            Log In
          </Button>
          <NavLink to="/registration">
            <Button>Registration</Button>
          </NavLink>
        </form>
      </Card>
    </>
  );
};

export default FormLogIn;
