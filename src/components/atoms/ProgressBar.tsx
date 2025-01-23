'use client'

import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className='progressBar' style={{ scaleX: scrollYProgress }} />
  );
};

export default ProgressBar;