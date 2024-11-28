import styles from "./ButtonWithIcon.module.css";

function ButtonWithIcon({ text, iconSrc }) {
  return (
    <button
      className={`${styles.button} d-flex align-center bg-accent-primary clr-neutral-100 fs-300`}
    >
      <span>{text}</span>
      <img
        src={iconSrc}
        alt=""
        className="b-radius-circle img-20 bg-accent-secondary"
      />
    </button>
  );
}

export default ButtonWithIcon;
