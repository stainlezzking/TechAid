"use client";
import { motion, AnimatePresence } from "framer-motion";
const LoadingClose = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <svg className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 405 397" fill="none">
            <path
              d="M206.501 397C316.129 397 405.001 308.129 405.001 198.5C405.001 88.8715 316.129 0 206.501 0C165.431 0 127.274 12.4729 95.6112 33.8373C124.832 15.6414 160.069 5.01517 198.001 5.01517C299.069 5.01517 381.001 80.4552 381.001 173.515C381.001 266.575 299.069 342.015 198.001 342.015C164.304 342.015 132.734 333.629 105.618 319C55.6391 292.035 40.4388 232.329 42.0006 309.63C77.6853 362.349 138.046 397 206.501 397Z"
              fill="#08184E"
            />
            <path
              d="M87.3636 280.5C73.332 294.516 90.5515 358.843 116.364 376.5C-13.6364 298 8.57725 212 116.364 219C223.964 227.4 273.197 186.5 284.364 165C282.53 175.333 275.564 204.6 262.364 239C217.364 329 135.364 237.5 87.3636 280.5Z"
              fill="url(#paint0_linear_4_68)"
            />
            <path
              d="M257.299 69C255.466 79.3333 248.499 108.6 235.299 143C199.713 207.074 151.381 171.051 73.4358 175C19.4325 177.736 13.6025 233.5 17.4358 261L0 171.5C1.63311 140.038 34.3438 119.431 89.2994 123C196.899 131.4 246.133 90.5 257.299 69Z"
              fill="url(#paint1_linear_4_68)"
            />
            <defs>
              <linearGradient id="paint0_linear_4_68" x1={405.001} y1={198.5} x2={0} y2={198.5} gradientUnits="userSpaceOnUse">
                <stop stopColor="#3C4475" />
                <stop offset={0.535} stopColor="#2F9C80" />
              </linearGradient>
              <linearGradient id="paint1_linear_4_68" x1={257.299} y1={165} x2={0} y2={165} gradientUnits="userSpaceOnUse">
                <stop offset={0.445} stopColor="#3EBA8B" />
                <stop offset={0.925} stopColor="#0F2E70" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingClose;
