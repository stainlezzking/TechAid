"use client";
import { motion, AnimatePresence } from "framer-motion";
const LoadingClose = ({ message }) => {
  return (
    <AnimatePresence>
      <div className="backdrop-blur-[2px] bg-black/50 fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center">
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center backdrop-blur-[2px] bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg width="2705" height="397" viewBox="0 0 2705 397" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2506.5 397C2616.13 397 2705 308.129 2705 198.5C2705 88.8715 2616.13 0 2506.5 0C2465.43 0 2427.27 12.4729 2395.61 33.8373C2424.83 15.6414 2460.07 5.01517 2498 5.01517C2599.07 5.01517 2681 80.4552 2681 173.515C2681 266.575 2599.07 342.015 2498 342.015C2464.3 342.015 2432.73 333.629 2405.62 319C2355.64 292.035 2340.44 232.329 2342 309.63C2377.69 362.349 2438.05 397 2506.5 397Z"
              fill="#08184E"
            />
            <path
              d="M2387.36 280.5C2348.96 314.9 2390.7 358.833 2416.36 376.5C2286.36 298 2308.58 212 2416.36 219C2523.96 227.4 2573.2 186.5 2584.36 165C2582.53 175.333 2575.56 204.6 2562.36 239C2517.36 329 2435.36 237.5 2387.36 280.5Z"
              fill="url(#paint0_linear_1_19)"
            />
            <path
              d="M2557.3 69C2555.47 79.3333 2548.5 108.6 2535.3 143C2499.71 207.074 2451.38 171.051 2373.44 175C2319.43 177.736 2313.6 233.5 2317.44 261L2300 171.5C2301.63 140.038 2334.34 119.431 2389.3 123C2496.9 131.4 2546.13 90.5 2557.3 69Z"
              fill="url(#paint1_linear_1_19)"
            />
            <defs>
              <linearGradient id="paint0_linear_1_19" x1="2584.36" y1="270.75" x2="2327" y2="270.75" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3C4475" />
                <stop offset="0.535" stop-color="#2F9C80" />
              </linearGradient>
              <linearGradient id="paint1_linear_1_19" x1="2557.3" y1="165" x2="2300" y2="165" gradientUnits="userSpaceOnUse">
                <stop offset="0.445" stop-color="#3EBA8B" />
                <stop offset="0.925" stop-color="#0F2E70" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <p className="text-center mt-5 text-white text-lg">{message}</p>
      </div>
    </AnimatePresence>
  );
};

export default LoadingClose;
