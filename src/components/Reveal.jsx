"use client";

import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0, y = 50 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;