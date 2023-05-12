import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex gap-4 border-b border-b-gray-400">
      <button
        className={`rounded-full inline-block border-2 h-4 w-4 flex-none ${
          completed &&
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        }`}
        onClick={() => updateTodo(id)}
      >
        {completed && <IconCheck />}
      </button>
      <p className={`text-gray-400 flex-grow ${completed && "line-through"}`}>
        {title}
      </p>
      <button className="flex-none"
      onClick={() => removeTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
};
export default TodoItem;
