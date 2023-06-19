import FormRegistration from "../Form/FormRegistration";
import styles from "./Pages.module.css";

const RegistrationPage = () => {
  return (
    <>
      <div className={styles.pages}>
        <h1>REGISTRATION PAGE</h1>
        <FormRegistration />
      </div>
    </>
  );
};

export default RegistrationPage;
