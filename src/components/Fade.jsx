"use client";

import { motion } from "framer-motion";

const Fade = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.7,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
};

export default Fade;