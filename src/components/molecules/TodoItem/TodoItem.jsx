import styles from "./TodoItem.module.css";
import { SecondaryButton } from "../../atoms/SecondaryButton/SecondaryButton";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";

export const TodoItem = ({ todo, onCheck, onRewrite, onDelete }) => {
  return (
    <li className={styles.list}>
      <Checkbox
        checked={todo.isCompleted}
        onChange={() => onCheck(todo.id)}
      />

      <span className={styles.content}>{todo.content}</span>

      <div className={styles.buttonWrapper}>
        <SecondaryButton onClick={() => onRewrite(todo.id)}>
          Rewrite
        </SecondaryButton>

        <SecondaryButton onClick={() => onDelete(todo.id)}>
          Delete
        </SecondaryButton>
      </div>
    </li>
  );
};