'use client'

import { motion } from 'framer-motion';
import { ReactNode } from 'react';


type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
}
const RiseAnimation = (props:Props) => {
  const { children, delay=0, duration=0.5 } = props;
  return (
    <motion.div
      variants={{
        offscreen: { // 画面外の場合のスタイル
          y: 100,
          opacity: 0,
        },
        onscreen: { // 画面内の場合のスタイル
          y: 0,
          opacity: 1,
          transition: {
            delay: (delay+1)*0.1,
            duration: duration,
          },
        },
      }}
      initial="offscreen" // 初期表示はoffscreen
      whileInView="onscreen" // 画面内に入ったらonscreen
      viewport={{ once: false, amount: 0 }}
    >
      { children }
    </motion.div>
  )
}
export default RiseAnimation;