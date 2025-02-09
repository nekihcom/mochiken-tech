'use client'

import { motion } from 'framer-motion';
import { ReactNode } from 'react';


type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
}
const OpacityAnimation = (props:Props) => {
  const { children, delay=0.3, duration=0.4 } = props;
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ 
        delay: (delay+1)*0.1,
        duration: duration 
      }}
    >
      { children }
    </motion.div>
  )
}
export default OpacityAnimation;