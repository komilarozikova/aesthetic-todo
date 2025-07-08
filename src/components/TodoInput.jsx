import React, { useState } from "react";
import { motion } from "framer-motion";


const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <motion.form
      className="flex items-center justify-between"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 px-5 py-3 mr-5 rounded-3xl bg-[#f1e9d6] placeholder-[#9d8f68] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#e6ffe7] transition-all duration-300 "
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="px-6 py-3 bg-[#c7cfb4] text-[#2b2312] font-medium rounded-full shadow-md hover:bg-[#88a58b] hover:text-[#f2ffef] transition-all duration-300"
      >
        Add
      </motion.button>
    </motion.form>

  );
};

export default TodoInput;
