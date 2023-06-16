import styles from "./FormRegistration.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const FormRegistration = () => {
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
      "https://finance-7df36-default-rtdb.firebaseio.com/newUser.json",
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
            <label htmlFor="name">Name</label>
            <input
              {...register("name", {
                required: "Name input is empty!",
                minLength: {
                  value: 2,
                  message: "Min length 2",
                },
                maxLength: {
                  value: 15,
                  message: "Max length 15",
                },
              })}
            />
            <div>
              {errors?.name && <p>{errors?.name.message || "Error !"}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="surname">Surname</label>
            <input
              {...register("surname", {
                required: "Surname input is empty!",
                minLength: {
                  value: 2,
                  message: "Min length 2",
                },
                maxLength: {
                  value: 15,
                  message: "Max length 15",
                },
              })}
            />
            <div>
              {errors?.surname && <p>{errors?.surname.message || "Error !"}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "Email input is empty!",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Email invalid!",
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
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                  message: "Password invalid!",
                },
              })}
            />
            <div>
              {errors?.password && (
                <p>{errors?.password.message || "Error !"}</p>
              )}
            </div>
          </div>
          <div>
            {/* Fix repeat password */}
            <label htmlFor="repeatPassword">Repeat password</label>
            <input
              {...register("repeatPassword", {
                required: "Repeat password input is empty!",
                minLength: {
                  value: 2,
                  message: "Min length 2",
                },
              })}
            />
            <div>
              {errors?.repeatPassword && (
                <p>{errors?.repeatPassword.message || "Error !"}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="currencyCategory">Currency</label>
            <select
              {...register("currencyCategory", {
                required: "Currency is not selected!",
              })}
            >
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GPB">GPB</option>
            </select>
            <div>
              {errors?.currencyCategory && (
                <p>{errors?.currencyCategory.message || "Error !"}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="languageCategory">Language</label>
            <select
              {...register("languageCategory", {
                required: "Language is not selected!",
              })}
            >
              <option value="UA">UA</option>
              <option value="ENG">ENG</option>
            </select>
            <div>
              {errors?.languageCategory && (
                <p>{errors?.languageCategory.message || "Error !"}</p>
              )}
            </div>
          </div>

          <Button type="submit">Registration</Button>
          <NavLink to="/login">
            <Button>Back to Log In</Button>
          </NavLink>
        </form>
      </Card>
    </>
  );
};

export default FormRegistration;
