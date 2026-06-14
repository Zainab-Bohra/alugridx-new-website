"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2.8 सेकंड के बाद लोडर हट जाएगा
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#DDF4E7] flex flex-col items-center justify-center z-[99999] overflow-hidden"
          >
            {/* 3D CUBE STYLES WITH YOUR ORIGINAL BRAND COLORS */}
            <style jsx global>{`
              .scene-cube {
                width: 140px;
                height: 140px;
                perspective: 800px;
                margin: 0 auto;
              }
              .cube-3d-object {
                width: 100%;
                height: 100%;
                position: relative;
                transform-style: preserve-3d;
                /* Multi-axis rotation to give it a true 3D spatial rolling cube feel */
                animation: continuousCubeRoll 6s infinite linear;
              }
              .cube-face-node {
                position: absolute;
                width: 140px;
                height: 140px;
                background: #124170; /* आपका ओरिजinal गहरा नेवी ब्लू ब्रांड कलर */
                border: 2px solid #67C090; /* मिंट ग्रीन प्रीमियम बॉर्डर्स */
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 12px;
                box-shadow: inset 0 0 25px rgba(103, 192, 144, 0.2);
              }
              .cube-face-node img {
                width: 100%;
                height: auto;
                object-contain: fit;
              }
              
              /* 3D Box geometry mapping for 6 faces */
              .f-front  { transform: rotateY(0deg) translateZ(70px); }
              .f-back   { transform: rotateY(180deg) translateZ(70px); }
              .f-left   { transform: rotateY(-90deg) translateZ(70px); }
              .f-right  { transform: rotateY(90deg) translateZ(70px); }
              .f-top    { transform: rotateX(90deg) translateZ(70px); }
              .f-bottom { transform: rotateX(-90deg) translateZ(70px); }

              /* Continuous diagonal tumbling rotation for true 3D effect */
              @keyframes continuousCubeRoll {
                0%   { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
                100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(180deg); }
              }
            `}</style>

            {/* Architectural Blueprint Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417003_1px,transparent_1px),linear-gradient(to_bottom,#12417005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
            
            {/* Subtle Core Glow Behind Cube */}
            <div className="absolute w-[30rem] h-[30rem] bg-[#124170]/5 rounded-full blur-[100px] pointer-events-none" />

            {/* 3D TUMBLING LOGO CUBE ONLY */}
            <div className="relative z-10">
              <div className="scene-cube">
                <div className="cube-3d-object">
                  {/* Front Face */}
                  <div className="cube-face-node f-front">
                    <img src="/images/alugridx-without-bg-1.webp" alt="AlugridX" />
                  </div>
                  {/* Back Face */}
                  <div className="cube-face-node f-back">
                    <img src="/images/alugridx-without-bg-1.webp" alt="AlugridX" />
                  </div>
                  {/* Left Face */}
                  <div className="cube-face-node f-left">
                    <img src="/images/alugridx-without-bg-1.webp" alt="AlugridX" />
                  </div>
                  {/* Right Face */}
                  <div className="cube-face-node f-right">
                    <img src="/images/alugridx-without-bg-1.webp" alt="AlugridX" />
                  </div>
                  {/* Top Face */}
                  <div className="cube-face-node f-top">
                    <img src="/images/alugridx-without-bg-1.webp" alt="AlugridX" />
                  </div>
                  {/* Bottom Face */}
                  <div className="cube-face-node f-bottom">
                    <img src="/images/alugridx-without-bg-1.webp" alt="AlugridX" />
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Layout children mount */}
      <motion.div animate={{ opacity: loading ? 0 : 1 }} transition={{ duration: 0.4 }}>
        {!loading && children}
      </motion.div>
    </>
  );
}