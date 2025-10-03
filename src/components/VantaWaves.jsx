"use client";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

const VantaWaves = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x14532d, // Sua cor primária
          shininess: 35.0,
          waveHeight: 15.0,
          waveSpeed: 0.5,
          zoom: 0.65,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      id="vanta-bg"
      className="fixed top-0 left-0 w-full h-full z-[-1] opacity-30"
    ></div>
  );
};

export default VantaWaves;
