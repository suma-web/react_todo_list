import { Input } from "../../atoms/Input/Input"
import { PrimaryButton } from "../../atoms/Button/PromaryButton"

export const InputForm = ({todoContent,setTodoContent,onClickCreateContent,}) => {
  return (
    <>
      <Input
        value={todoContent}
        onChange={(e) => setTodoContent(e.target.value)}
        placeholder="Here, write a task"
      />

      {todoContent.length > 0 && (
        <PrimaryButton onClick={onClickCreateContent}>
          Add
        </PrimaryButton>
      )}
    </>
  );
};