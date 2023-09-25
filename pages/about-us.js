import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Team from '@/components/Team';
import ShareHolders from '@/components/ShareHolders';


export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
      controls.start({ filter: 'blur(0)' }); // Remove blur
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, [controls]);

  return (
    <div className="team-container">
      <motion.div
        className={`team ${loaded ? 'opacity-100' : 'opacity-0'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Team />
        <ShareHolders />
      </motion.div>
    </div>
  );
}