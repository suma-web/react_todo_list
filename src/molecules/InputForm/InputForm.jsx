import { Input } from "../../atoms/Input/Input"
import { InputButton } from "../../atoms/Button/Button"

export const InputForm = ({todoContent, setTodoContent, onClickCreateContent}) => {
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