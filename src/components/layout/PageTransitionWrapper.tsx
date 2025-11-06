import { motion, type Transition } from "framer-motion";

const pageVariants = {
    initial: {
        opacity: 0,
        filter: "blur(8px) brightness(1.05)",
        backdropFilter: "blur(8px)",
    },
    animate: {
        opacity: 1,
        filter: "blur(0px) brightness(1)",
        backdropFilter: "blur(0px)",
    },
    exit: {
        opacity: 0,
        filter: "blur(10px) brightness(1.1)",
        backdropFilter: "blur(10px)",
    },
};

const pageTransition: Transition = {
    type: "tween",
    ease: [0.45, 0, 0.25, 1],
    duration: 0.35,
};

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="
        min-h-[calc(100vh-10rem)]
        relative
        backdrop-blur-lg
        overflow-hidden
        transition-all
      "
        >
            {children}
        </motion.div>
    );
};
