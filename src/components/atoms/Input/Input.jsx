import styles from "./Input.module.css";

export const Input = ({value, onChange, placeholder="Enter text", ...props}) => {
    return (
        <input 
            className={styles.input}
            value={value}
            onChange={(e) => onChange(e.target.value) }
            placeholder={placeholder}
            {...props}
        />
    );

}