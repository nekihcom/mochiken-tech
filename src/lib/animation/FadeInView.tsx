'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react'

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  directionFrom?: 'left' | 'right' | 'upper' | 'lower';
}
const FadeInView = (props: Props) => {
  const { children, delay=0,  duration=2, directionFrom='left' } = props;

  let ini_ani = {
    initial: { opacity:0, x:-100, y:0},
    animate: { opacity:1, x:0, y:0}
  };

  if(directionFrom === 'right') {
    ini_ani = {
      initial: { opacity: 0, x: 100, y:0 },
      animate: { opacity:1, x:0 , y:0 }
    };
  } else if(directionFrom === 'upper') {
    ini_ani = {
      initial: { opacity:0, x:0, y:-100 },
      animate: { opacity:1, x:0, y:0 }
    }
  } else if(directionFrom === 'lower') {
    ini_ani = {
      initial: { opacity:0, x:0, y:100 },
      animate: { opacity:1, x:0, y:0 }
    }
  }

  return (
    <>
      <motion.div
        initial={ini_ani.initial} 
        animate={ini_ani.animate} 
        transition={{ 
          duration: duration,
          delay: delay*0.1
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
export default FadeInView;