import styles from "./ErrorMessage.module.css";

function ErrorMessage({ message }) {
  return <p className={styles.error}>{message}</p>;
}

export default ErrorMessage;
