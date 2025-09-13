"use client"

import { motion } from "framer-motion"
import { FaCode, FaLaptop, FaRocket, FaCog, FaDatabase, FaCloud } from "react-icons/fa"

const floatingIcons = [
  { Icon: FaCode, delay: 0, x: "10%", y: "20%" },
  { Icon: FaLaptop, delay: 0.5, x: "80%", y: "15%" },
  { Icon: FaRocket, delay: 1, x: "15%", y: "70%" },
  { Icon: FaCog, delay: 1.5, x: "85%", y: "75%" },
  { Icon: FaDatabase, delay: 2, x: "50%", y: "10%" },
  { Icon: FaCloud, delay: 2.5, x: "70%", y: "60%" },
]

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay, duration: 1 }}
          className="absolute"
          style={{ left: x, top: y }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Icon className="h-8 w-8 text-primary/20" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
