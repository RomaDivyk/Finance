import FormLogIn from "../Form/FormLogIn";
import styles from "./Pages.module.css";

const LogInPage = () => {
  return (
    <>
      <div className={styles.pages}>
        <h1>LOGIN PAGE</h1>
        <FormLogIn />
      </div>
    </>
  );
};

export default LogInPage;
