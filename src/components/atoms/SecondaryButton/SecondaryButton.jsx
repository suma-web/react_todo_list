import styles from "./SecondaryButton.module.css";

export const SecondaryButton = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};