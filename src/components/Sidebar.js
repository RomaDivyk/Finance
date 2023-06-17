import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <aside className={styles.aside}>
        <div>Dashboard</div>
        <div>Costs</div>
        <div>Groups</div>
        <div>Plan</div>
        <div>Users list (admin)</div>
        <div>Add default categories</div>
        <div>Leave a feedback</div>
        <div>Profile</div>
        <div>Exit</div>
      </aside>
    </>
  );
};

export default Sidebar;
