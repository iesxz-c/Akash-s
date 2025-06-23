import { motion } from "framer-motion";

const Alert = ({ type, text }: { type: string; text: string }) => {
  const alertVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={alertVariants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div
        className={`flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg text-white ${
          type === "danger" ? "bg-red-800" : "bg-pink-900"
        }`}
      >
        <span
          className={`text-xs font-semibold px-2 py-1 rounded ${
            type === "danger" ? "bg-red-700" : "bg-pink-700"
          }`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </span>
        <p className="text-sm">{text}</p>
      </div>
    </motion.div>
  );
};

export default Alert;
