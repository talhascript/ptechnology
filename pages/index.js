import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Partners from "@/components/Partners";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1, // Add a delay for a smoother entrance
      duration: 0.1, // Adjust the duration as needed
      type: "spring", // Use spring animation for a natural effect
      stiffness: 20, // Adjust stiffness for the bounce effect
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2, // Adjust the duration as needed
      type: "spring", // Use spring animation for a natural effect
      stiffness: 20, // Adjust stiffness for the bounce effect
    },
  },
};

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <HeroSection />
      </motion.div>
      <hr />
      <motion.div variants={itemVariants}>
        <Partners />
      </motion.div>
      <hr />
      <motion.div variants={itemVariants}>
        <FeaturesSection />
      </motion.div>
    </motion.div>
  );
}