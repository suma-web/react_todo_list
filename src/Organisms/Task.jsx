import { useState } from "react";
import { TodoItem } from "../Molecule/TodoItem";
import { InputForm } from "../Molecule/InputForm";


export const Task = () => {
    const [todoContent, setTodoContent] = useState("");
    const [todoList, setTodoList] = useState([]);

    const onClickCheck = (id) => {
        setTodoList(
            todoList.map((todo) => {
                if (todo.id === id){
                    return {
                        ...todo,
                        isCompleted: !(todo.isCompleted)
                    }
                } else {
                    return todo;
                }
            })
        )
    }

    const onClickRewrite = (id) => {
        const rewriteContent = prompt(
            "Do you want to rewrite this content？", todoList.find((todo) => todo.id === id).content
        )
        if (rewriteContent !== null && rewriteContent.trim() !== ""){
            setTodoList(
                todoList.map((todo)=>{
                    if (todo.id === id){
                        return {
                                ...todo,
                                content: rewriteContent
                            };
                    } else {
                        return todo;
                    }
                })
            );
        }
    }
    
    const onClickDelete = (id) => {
        if (confirm("Do you want to delete this task?")) {
            setTodoList(
                [...todoList.filter((todo) => {
                    return todo.id !== id;
                })]
            );
        } else {
            return;
        }
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

    const styleTodoList = {
        paddingLeft: "5px",
        listStyle: "none",
        backgroundColor: "green",
        color: "white",
        borderRadius: "20px",
        boxShadow: "5px 5px 10px rgba(192, 192, 192, 0.5)"
    }

    const styleTaskShow = {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        gap: "15px",
    }

    const styleInput = {
        fontSize: "15px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        gap: "20px"
    }


    return ( 
        <div style={{
            width: "80%",
            position: "relative",
            left: "10%"
        }}>
            <h3>Task Input</h3>
            <div style={styleInput}>
                <InputForm
                    todoContent={todoContent}
                    setTodoContent={setTodoContent}
                    onClickCreateContent={onClickCreateContent}
                />
            </div>

            <div style={styleTaskShow}>
                <label>All-tasks:</label><p>{todoList.length}</p>
                <label>Completed:</label><p>{todoList.filter(todo => todo.isCompleted).length}</p>
                <label>Incompleted:</label><p>{todoList.filter(todo => !todo.isCompleted).length}</p>
            </div>

            <h3>All-Todo Lists</h3>
            <ul style={styleTodoList}>
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