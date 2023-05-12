import { useState } from "react";

const TodoCreate = ({createTodo}) => {
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setTitle("");
    } else {
      createTodo(title);
      setTitle("");
    }
  };
  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className=" flex rounded-md bg-white overflow-hidden py-2 gap-4 items-center px-3 mt-3"
    >
      <span className="rounded-full inline-block border-2 h-4 w-4"></span>
      <input
        type="text"
        placeholder="Create a new ToDo..."
        className="w-full text-gray-400 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};
export default TodoCreate;
