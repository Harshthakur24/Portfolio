import React from "react";
import { motion } from "framer-motion";

const AnimatedComponent = () => {
  return (
    <div>
      <motion.div
        initial={{
          x: -100, // Initial x position (off-screen to the left)
          y: 0,
          scale: 0.5, // Initial scale (50% smaller)
          rotate: -180, // Initial rotation (-180 degrees)
        }}
        animate={{
          x: 0, // Target x position (center of the screen)
          y: 0, // Target y position (same as initial)
          scale: 1, // Target scale (original size)
          rotate: 0, // Target rotation (0 degrees)
        }}
        transition={{
          duration: 1, // Animation duration (1 second)
          ease: "easeInOut", // Easing function
        }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "blue",
        }}
      >
        Hello
      </motion.div>
    </div>
  );
};

export default AnimatedComponent;
