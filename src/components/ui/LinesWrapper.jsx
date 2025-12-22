import React from "react";

const LinesWrapper = ({ children }) => {
      return (
            <div className="min-h-screen w-full bg-white relative overflow-hidden">
                  <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                              background: `
        linear-gradient(
          90deg, 
          transparent 0%,
          transparent 30%,
          rgba(138, 43, 226, 0.4) 50%,
          transparent 70%,
          transparent 100%
        ),
        linear-gradient(
          to bottom,
          #1a1a2e 0%,
          #2d1b69 50%,
          #0f0f23 100%
        )
      `,
                              backgroundImage: `
        repeating-linear-gradient(
          90deg,
          transparent 0px,
          transparent 79px,
          rgba(44, 42, 42, 0.05) 80px,
          rgba(44, 42, 42, 0.05) 81px
        )
      `,
                        }}
                  />
                  {children}
            </div>
      );
};

export default LinesWrapper;
