export const Header = () => {
    const header = {
        fontSize: "10px",
        padding: "8px",
        color: "white",
        backgroundColor: "green"

    }

    const H1 = {
        marginLeft: "20px"
    }

    return (
        <div style={header}>
            <h1 style={H1}>React Todo List</h1>
        </div>
    )
}