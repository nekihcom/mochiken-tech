'use client'

import { motion } from 'framer-motion';
import { ReactNode } from 'react';


type Props = {
  children: ReactNode;
}
const OpacityAnimation = (props:Props) => {
  const { children } = props;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}>
      { children }
    </motion.div>
  )
}
export default OpacityAnimation;