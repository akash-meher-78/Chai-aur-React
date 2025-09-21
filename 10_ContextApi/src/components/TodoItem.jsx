import { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <div
            className={`flex items-center gap-3 w-full max-w-lg mx-auto rounded-xl px-4 py-3 
                  shadow-lg border border-white/20 backdrop-blur-md bg-white/20 transition-all
                  ${todo.completed ? "opacity-70" : "opacity-100"}`}
        >
            <input
                type="checkbox"
                className="cursor-pointer w-5 h-5 accent-green-500"
                checked={todo.completed}
                onChange={toggleCompleted}
            />

            <input
                type="text"
                className={`flex-1 bg-transparent outline-none text-black/90 rounded-md px-2
          ${isTodoEditable ? "border border-white/40" : "border-transparent"}
          ${todo.completed ? "line-through text-black/50" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            {/* Edit / Save Button */}
            <button
                className="w-9 h-9 flex items-center justify-center rounded-lg 
                   bg-white/30 hover:bg-white/40 transition disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>

            {/* Delete Button */}
            <button
                className="w-9 h-9 flex items-center justify-center rounded-lg 
                   bg-red-500/70 hover:bg-red-500 text-white transition"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
