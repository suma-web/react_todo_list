import styles from "./Checkbox.module.css";

export const Checkbox = ({ checked, onChange, ...props }) => {
  return (
    <input
      type="checkbox"
      className={styles.checkbox}
      checked={checked}
      onChange={onChange}
      {...props}
    />
  );
};