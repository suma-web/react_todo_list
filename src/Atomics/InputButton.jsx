import "./style/inputbutton.css"

export const InputButton = ({onClickCreateContent}) => {
    return (
        <button className="inputButton" onClick={onClickCreateContent}>Create a Task</button>
    );
}