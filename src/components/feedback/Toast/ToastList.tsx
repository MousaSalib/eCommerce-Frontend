import { useAppSelector } from "@store/hooks";
import { AnimatePresence, motion } from "motion/react";
import styles from "./styles.module.css";
import ToastItem from "./ToastItem";

const { toastList } = styles;

const ToastList = () => {
  const { records } = useAppSelector((state) => state.toasts);

  return (
    <div className={toastList}>
      <AnimatePresence>
        {records.map(
          ({ id, title, message, type, delayAppearance, onCloseToast }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut" }}
              layout
            >
              <ToastItem
                id={id}
                title={title}
                message={message}
                type={type}
                delayAppearance={delayAppearance}
                onCloseToast={onCloseToast}
              />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToastList;
