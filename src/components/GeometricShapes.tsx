import { motion } from "framer-motion";

const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large diagonal stripes - top left */}
      <motion.div
        className="absolute -top-20 -left-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="relative w-[600px] h-[600px]">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary"
              style={{
                width: "8px",
                height: "200px",
                left: `${i * 25}px`,
                top: `${i * 25}px`,
                transform: "rotate(-45deg)",
                opacity: 1 - i * 0.07,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [1 - i * 0.07, 0.8 - i * 0.05, 1 - i * 0.07],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating cubes - mid left */}
      <motion.div
        className="absolute top-1/3 -left-10"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-primary"
              style={{
                width: `${30 - i * 5}px`,
                height: `${30 - i * 5}px`,
                left: `${i * 15}px`,
                top: `${i * 15}px`,
                transform: `rotate(${45 + i * 5}deg)`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Diagonal lines pattern - right side */}
      <motion.div
        className="absolute top-0 right-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="relative w-[400px] h-[500px]">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary/60"
              style={{
                width: "6px",
                height: "150px",
                right: `${i * 30}px`,
                top: `${i * 30}px`,
                transform: "rotate(-45deg)",
              }}
              animate={{
                scaleY: [1, 1.2, 1],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Glowing orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small floating squares */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`square-${i}`}
          className="absolute w-4 h-4 border border-primary/40"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            transform: `rotate(${45 + i * 15}deg)`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [45 + i * 15, 90 + i * 15, 45 + i * 15],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Stacked diagonal blocks - bottom left */}
      <motion.div
        className="absolute bottom-20 left-10"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary"
            style={{
              width: "40px",
              height: "40px",
              left: `${i * 20}px`,
              bottom: `${i * 20}px`,
              clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)",
            }}
            animate={{
              opacity: [0.9 - i * 0.15, 1 - i * 0.1, 0.9 - i * 0.15],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Animated grid dots */}
      <div className="absolute bottom-1/4 right-20 grid grid-cols-5 gap-3">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="w-1.5 h-1.5 rounded-full bg-primary/40"
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GeometricShapes;
