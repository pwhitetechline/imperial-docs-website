/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "light" | "muted" | "dark";
}

export default function Section({ children, className = "", id, variant = "light" }: SectionProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "muted":
        return "bg-legal-muted";
      case "dark":
        return "bg-legal-navy text-white";
      default:
        return "bg-legal-offwhite";
    }
  };

  return (
    <section id={id} className={`${getVariantStyles()} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-padding"
      >
        {children}
      </motion.div>
    </section>
  );
}
