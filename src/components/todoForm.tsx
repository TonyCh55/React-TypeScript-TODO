import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>("");
  //
  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  // };

  const ref = useRef<HTMLInputElement>(null);

  const onEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && ref.current!.value !== "") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // onChange={onChange}
        // value={title}
        onKeyPress={onEnter}
        ref={ref}
        type="text"
        id="title"
        placeholder="Task"
      />
      <label htmlFor="title" className="active">
        Input a task name
      </label>
    </div>
  );
};
