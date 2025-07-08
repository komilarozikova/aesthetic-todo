import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";
import { AnimatePresence } from "framer-motion";

const App = () => {

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  // 2. Har safar todos o‘zgarganda localStorage'ga yozish
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#f1e9d6] text-[#383324] font-[Poppins] flex items-center justify-center px-4">
       <div className="w-full max-w-md bg-white/30 backdrop-blur-lg shadow-xl rounded-3xl p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-700">
        My Aesthetic To-Do
      </h1>

      <TodoInput addTodo={addTodo} />

      <div className="w-full max-w-lg mt-10">
        <AnimatePresence>
          {todos.map((todo) => (
            <TodoItems
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </AnimatePresence>
      </div>
      </div>
       </div>
  );
};

export default App;
