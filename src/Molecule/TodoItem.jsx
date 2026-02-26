import "./style/todoitem.css"

export const TodoItem = ({todo, onCheck, onRewrite, onDelete}) => {
    const list = {
        padding: "7px 0",
        display: "flex",
        alignItems: "center"
    }
    const checkbox = {
        margin: "0 10px",
    }

    return (
        <>
            <li style={list} key={todo.id}>
                <input style={checkbox}
                    type="checkbox" 
                    checked={todo.isCompleted} 
                    onChange={() => onCheck(todo.id)} />{todo.content}
                <div className="buttonWrapper">
                    <input className="listButton"
                        type="button"
                        value="Rewite" 
                        onClick={() => onRewrite(todo.id)}/>
                    <input className="listButton"
                        type="button"
                        value="Delete"
                        onClick={() => onDelete(todo.id)}/>
                </div>
            </li>

        </>
    );
}