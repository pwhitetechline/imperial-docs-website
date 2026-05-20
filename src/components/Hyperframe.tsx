/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ReactNode } from "react";

interface HyperframeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Hyperframe({ children, className = "", delay = 0.2 }: HyperframeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
      className={`relative group ${className}`}
    >
      {/* Outer Glow / Halo */}
      <div className="absolute -inset-4 bg-legal-navy/5 blur-2xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      {/* Layered Borders */}
      <div className="relative p-[1px] rounded-sm bg-gradient-to-b from-legal-border/50 via-legal-border/20 to-legal-border/50 shadow-2xl overflow-hidden backdrop-blur-3xl">
        {/* Secondary Inner Border */}
        <div className="p-1 rounded-[calc(2px)] bg-white/40">
           {/* Main Content Area */}
           <div className="relative bg-white rounded-[calc(2px)] overflow-hidden shadow-inner">
             {/* Subtle Texture Overlay */}
             <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                 <filter id="noise">
                   <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                 </filter>
                 <rect width="100%" height="100%" filter="url(#noise)" />
               </svg>
             </div>
             
             {/* Content */}
             <div className="relative z-10">
               {children}
             </div>
           </div>
        </div>
      </div>

      {/* Decorative Corners (Optional but adds 'refined' feel) */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-legal-navy/10 -translate-x-2 -translate-y-2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-legal-navy/10 translate-x-2 translate-y-2 pointer-events-none" />
    </motion.div>
  );
}
