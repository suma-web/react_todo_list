import { useState } from "react";
import { TodoItem } from "../../molecules/TodoItem/TodoItem";
import { InputForm } from "../../molecules/InputForm/InputForm";

import styles from "./TaskList.module.css"

export const TaskList = () => {
    const [todoContent, setTodoContent] = useState("");
    const [todoList, setTodoList] = useState([]);

    const onClickCheck = (id) => {
    setTodoList(() =>
        todoList.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
    );
    };

    const onClickRewrite = (id) => {
        const targetTodo = todoList.find((todo) => todo.id === id);
        
        if(!targetTodo) return;   // 存在チェック
        
        const rewriteContent = prompt(
            "Do you want to rewrite this？", targetTodo.content
        )

        if (rewriteContent === null || rewriteContent.trim() === "") return;

        setTodoList(
            todoList.map((todo) =>
                todo.id === id ? { ...todo, content: rewriteContent } : todo
            )
        );
    }
    
    const onClickDelete = (id) => {
        confirm("Do you want to delete this task?") ? setTodoList(todoList.filter((todo) => todo.id !== id)): null;
    };

    const onClickCreateContent = () => {
        setTodoList(
            [...todoList, 
                {
                    id: crypto.randomUUID(),
                    content: todoContent,
                    isCompleted: false
                }
            ]
        );
        setTodoContent("");
    };

    return ( 
        <div className={styles.content}>
            <h3>Task Input</h3>
            <div className={styles.input}>
                <InputForm
                    todoContent={todoContent}
                    setTodoContent={setTodoContent}
                    onClickCreateContent={onClickCreateContent}
                />
            </div>

            <div className={styles.show}>
                <label>All-tasks:</label><p>{todoList.length}</p>
                <label>Completed:</label><p>{todoList.filter(todo => todo.isCompleted).length}</p>
                <label>Incompleted:</label><p>{todoList.filter(todo => !todo.isCompleted).length}</p>
            </div>

            <h3>All-Todo Lists</h3>
            <ul className={styles.list}>
                {todoList.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onCheck={onClickCheck}
                        onRewrite={onClickRewrite}
                        onDelete={onClickDelete}
                    />
                ))}
            </ul>
        </div>
    );
}