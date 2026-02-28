import styles from "./Checkbox.module.css";

export const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      className={styles.checkbox}
      checked={checked}
      onChange={onChange}
    />
  );
};