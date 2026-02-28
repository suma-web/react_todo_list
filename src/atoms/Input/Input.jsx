export const Input = ({todoContent, setTodoContent}) => {
    const input = {
        width: "20%",
        minWidth: "200px",
        padding: "10px",
        borderRadius: "25px",
        border: "none",
        boxShadow: "5px 5px 10px rgba(192, 192, 192, 0.5)"
    }

    return (
        <input 
            style={input}
            value={todoContent}
            onChange={(e) => setTodoContent(e.target.value) }
            placeholder="Here, write a task"
        />
    );

}