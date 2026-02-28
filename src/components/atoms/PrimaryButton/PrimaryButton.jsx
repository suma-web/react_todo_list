import styles from "./PrimaryButton.module.css";

export const PrimaryButton = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};