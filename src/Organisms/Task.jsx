import { useState } from "react";
import { TodoItem } from "../Molecule/TodoItem";
import { InputForm } from "../Molecule/InputForm";


export const Task = () => {
    const [todoContent, setTodoContent] = useState("");
    const [todoListArr, setTodoListArr] = useState([]);

    const onClickCheck = (checkIndex) => {
        setTodoListArr(
            todoListArr.map((value) => {
                if (value.id === checkIndex){
                    return {
                        ...value,
                        isCompleted: !(value.isCompleted)
                    }
                } else {
                    return value;
                }
            })
        )
    }

    const onClickRewrite = (rewriteIndex) => {
        const rewiteContent = prompt(
            "再編集しますか？", todoListArr.find((todo) => todo.id === rewriteIndex).content
        )
        if (rewiteContent !== null && rewiteContent.trim() !== ""){
            setTodoListArr(
                todoListArr.map((value)=>{
                    if (value.id === rewriteIndex){
                        return {
                                ...value,
                                content: rewiteContent
                            };
                    } else {
                        return value;
                    }
                })
            );
        }
    }
    
    const onClickDelete = (deleteIndex) => {
        if (confirm("Do you want to delete this task?")) {
            setTodoListArr(
                [...todoListArr.filter((value) => {
                    return value.id !== deleteIndex;
                })]
            );
        } else {
            return;
        }
    };

    const onClickCreateContent = () => {
        setTodoListArr(
            [...todoListArr, 
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
    <>  
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
                <label>All-tasks:</label><p>{todoListArr.length}</p>
                <label>Completed:</label><p>{todoListArr.filter(todo => todo.isCompleted).length}</p>
                <label>Incompleted:</label><p>{todoListArr.filter(todo => !todo.isCompleted).length}</p>
            </div>

            <h3>All-Todo Lists</h3>
            <ul style={styleTodoList}>
                {todoListArr.map(todo => (
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
    </>
    );
}