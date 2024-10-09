import styles from "./Form.module.css";

function Form({ children, title = "", onSubmit }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {title && <h2>{title}</h2>}
      {children}
    </form>
  );
}

export default Form;
