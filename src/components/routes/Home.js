import Content from "../Content";
import styles from "./Pages.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.pages}>
        <h1>HOME PAGE</h1>
        <Content />
      </div>
    </>
  );
};

export default Home;
