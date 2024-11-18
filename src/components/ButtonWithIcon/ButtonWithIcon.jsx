import styles from "./ButtonWithIcon.module.css";

function ButtonWithIcon({ text, iconSrc }) {
  return (
    <button className={styles.button}>
      <span>{text}</span>
      <img src={iconSrc} alt="" />
    </button>
  );
}

export default ButtonWithIcon;
