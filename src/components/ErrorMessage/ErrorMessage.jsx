import styles from "./ErrorMessage.module.css";

function ErrorMessage({ error }) {
  console.log(error);
  if (error.data.message) {
    return <p className={styles.error}>{error.data.message}</p>;
  }

  if (error.data.errors) {
    return error.data.errors.map((err) => (
      <p className={styles.error} key={err.message}>
        {err.message.split(".")[1]}
      </p>
    ));
  }

  return (
    <p className={styles.error}>
      Oops, something went wrong, please try again!
    </p>
  );
}

export default ErrorMessage;
