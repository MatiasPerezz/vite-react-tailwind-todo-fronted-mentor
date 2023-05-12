const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="py-3 px-3 flex justify-between bg-white rounded-b-md">
      <span className="text-gray-400">{computedItemsLeft} item left</span>
      <button className="text-gray-400" onClick={clearCompleted}>
        Clear Completed
      </button>
    </section>
  );
};
export default TodoComputed;
