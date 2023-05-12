const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto mt-5">
      <div className="bg-white rounded-md p-3 flex justify-center gap-4">
        <button
          className={`${
            filter === "all"
              ? "text-blue-600 hover:text-gray-400"
              : "text-gray-300 hover:text-blue-600"
          }`}
          onClick={() => changeFilter("all")}
        >
          All
        </button>
        <button
          className={`${
            filter === "active"
              ? "text-blue-600 hover:text-gray-400"
              : "text-gray-300 hover:text-blue-600"
          }`}
          onClick={() => changeFilter("active")}
        >
          Active
        </button>
        <button
          className={`${
            filter === "completed"
              ? "text-blue-600 hover:text-gray-400"
              : "text-gray-300 hover:text-blue-600"
          }`}
          onClick={() => changeFilter("completed")}
        >
          completed
        </button>
      </div>
    </section>
  );
};
export default TodoFilter;
