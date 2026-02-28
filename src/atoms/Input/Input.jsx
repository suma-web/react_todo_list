import styles from "./Input.module.css";

export const Input = ({value, onChange}) => {
    return (
        <input 
            style={styles.input}
            value={value}
            onChange={(e) => onChange(e.target.value) }
            placeholder="Here, write a task"
        />
    );

}