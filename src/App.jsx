import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import Footer from "./components/Footer";
import { useState } from "react";

const initialStateTodos = [
  { id: 1, title: "Complete online JS curse", completed: true },
  { id: 2, title: "Go to the gym", completed: false },
  { id: 3, title: "10 minutes meditation", completed: false },
  { id: 4, title: "Pick up groceries", completed: false },
  { id: 5, title: "Complete todo app on Frontend Mentor", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <Header />

      <main className="container mx-auto px-3">
        <TodoCreate createTodo={createTodo} />

        {/*TodoList (TodoItem) TodoUpdate & TodoDelete*/}
        <TodoList
          todos={filterTodos()}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />

        {/* TodoComputed*/}
        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />

        {/* TodoFilter¨*/}
        <TodoFilter changeFilter={changeFilter} filter={filter}/>
      </main>

      <Footer />
    </div>
  );
};
export default App;
