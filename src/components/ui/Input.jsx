import styles from "./Input.module.css";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <div className={styles.wrap}>
      {label && <label>{label}</label>}
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
