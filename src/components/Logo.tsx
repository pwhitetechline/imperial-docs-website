/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface LogoProps {
  className?: string;
  variant?: "navy" | "white";
}

export default function Logo({ className = "w-10 h-10", variant = "navy" }: LogoProps) {
  const color = variant === "navy" ? "#0A192F" : "#FFFFFF";
  const accentColor = variant === "navy" ? "#1B3022" : "rgba(255,255,255,0.6)";

  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Crown - simplified professional version */}
        <path
          d="M30 35L40 45L50 30L60 45L70 35V50H30V35Z"
          fill={color}
        />
        
        {/* Document Shape */}
        <path
          d="M35 52V75C35 76.1046 35.8954 77 37 77H63C64.1046 77 65 76.1046 65 75V58L59 52H35Z"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Circular Loop */}
        <path
          d="M25 70C20 60 20 40 35 30M75 70C80 60 80 40 65 30"
          stroke={accentColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
        
        {/* Detail lines on document */}
        <path d="M42 62H58" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <path d="M42 67H58" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <path d="M42 72H50" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}
