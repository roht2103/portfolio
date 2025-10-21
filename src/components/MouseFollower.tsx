'use client'
import { useMousePosition } from "@/app/utils/useMousePosition"
import { motion } from 'framer-motion'

export default function MouseFollower() {
  const { x, y } = useMousePosition();
  
  return (
    <>
      {/* Glass Morphism Mouse Follower Mask Effect - Desktop Only */}
      <motion.div 
        className="hidden md:block fixed inset-0 pointer-events-none z-50"
        style={{
          maskImage: 'url(/mask.svg)',
          WebkitMaskImage: 'url(/mask.svg)',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: '150px',
          WebkitMaskSize: '150px',
          maskPosition: `${x - 75}px ${y - 75}px`,
          WebkitMaskPosition: `${x - 75}px ${y - 75}px`,
        }}
      >
        <div 
          className="w-full h-full dark:bg-gradient-to-br dark:from-white/10 dark:to-white/5 bg-gradient-to-br from-slate-900/20 to-slate-800/15"
          style={{
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.4), 0 8px 32px rgba(59, 130, 246, 0.2)',
          }}
        />
      </motion.div>

      {/* Subtle Glow Border Effect - Desktop Only */}
      <motion.div
        className="hidden md:block fixed pointer-events-none z-40 rounded-full"
        style={{
          width: '160px',
          height: '160px',
          left: x - 80,
          top: y - 80,
          background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(147,51,234,0.2) 50%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 150,
        }}
      />

      {/* Glass edge highlight - Desktop Only */}
      <motion.div
        className="hidden md:block fixed pointer-events-none z-40 rounded-full border-2"
        style={{
          width: '150px',
          height: '150px',
          left: x - 75,
          top: y - 75,
          borderColor: 'rgba(59, 130, 246, 0.5)',
          boxShadow: '0 0 30px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.3)',
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 200,
        }}
      />
    </>
  );
}
