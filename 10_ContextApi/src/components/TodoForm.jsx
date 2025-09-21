import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form
      onSubmit={add}
      className="flex w-full max-w-lg mx-auto rounded-xl overflow-hidden shadow-lg 
                 bg-white/20 backdrop-blur-md border border-white/30"
    >
      <input
        type="text"
        placeholder="✨ Write a todo..."
        className="w-full px-4 py-2 text-black/80 placeholder:text-black/50 
                   bg-transparent outline-none"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="px-5 py-2 bg-gradient-to-r from-green-400 to-green-600 
                   text-white font-medium hover:opacity-90 transition-all"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
