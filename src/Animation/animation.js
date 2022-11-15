import { motion } from "framer-motion";

const animations = {
  initial: { y: "100%" },
  animate: { y: "0%" },
  exit: { opacity: "1" },
};

const Animation = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
