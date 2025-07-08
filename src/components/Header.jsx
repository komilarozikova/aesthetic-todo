import React from "react";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <motion.header
            className="text-center py-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
    >
            <h1 className="text-4xl font-bold text-[#383324">My Aesthetic Todo✨</h1>
        </motion.header>
    )
}

export default Header