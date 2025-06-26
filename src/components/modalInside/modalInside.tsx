import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ModalInsideProps {
  open: boolean;
  onClose: () => void;
  content?: React.ReactNode;
  image?: string;
  children?: React.ReactNode;
}

const ModalInsideC: React.FC<ModalInsideProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-black/70 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-auto cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-black w-full max-w-7xl shadow-2xl cursor-default relative overflow-hidden h-auto"
          >
            <button
							onClick={onClose}
							className="absolute button-blue-changan text-white cursor-pointer  top-3 right-3 z-10 bg-gray-200 hover:bg-gray-300 text-black rounded-full p-2 flex items-center justify-center"
							style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
							aria-label="Cerrar"
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalInsideC;