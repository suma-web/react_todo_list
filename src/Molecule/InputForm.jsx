import { Input } from "../Atomics/Input"
import { InputButton } from "../Atomics/InputButton"

export const InputForm = ({todoContent,setTodoContent, onClickCreateContent}) => {
    return (
        <>
            <Input
                todoContent={todoContent}
                setTodoContent={setTodoContent}
            />
            {todoContent.length > 0 && 
                <InputButton onClickCreateContent={onClickCreateContent} />}
        </>
    );
}