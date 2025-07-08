import React from "react";
import { motion } from "framer-motion";
import { FaTrash, FaCheckCircle, FaRegCircle } from "react-icons/fa";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <motion.div
      className="flex items-center justify-between bg-[#F3EEE8] rounded-2xl p-4 shadow-inner mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-3">
        <div
          onClick={() => toggleComplete(todo.id)}
          className="cursor-pointer text-[#A3C9A8] text-xl"
        >
          {todo.completed ? <FaCheckCircle /> : <FaRegCircle />}
        </div>
        <p className={`text-gray-700 ${todo.completed ? "line-through opacity-50" : ""}`}>
          {todo.text}
        </p>
      </div>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-gray-400 hover:text-red-400 transition-colors duration-300"
      >
        <FaTrash />
      </button>
    </motion.div>
  );
};

export default TodoItem;
