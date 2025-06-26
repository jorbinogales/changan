import { AnimatePresence, motion } from 'framer-motion';

interface HintModalProps {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
    content?: string;
    image?: any;
}

const HintModalC: React.FC<HintModalProps> = ({
    isOpen,
    setIsOpen,
    content,
    image,
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur p-2 md:p-8 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-black p-0 rounded-lg w-full max-w-4xl shadow-xl cursor-default relative overflow-hidden h-auto md:h-[500px]"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute button-blue-changan text-white cursor-pointer  top-3 right-3 z-10 bg-gray-200 hover:bg-gray-300 text-black rounded-full p-2 flex items-center justify-center"
                            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                            aria-label="Cerrar"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="relative w-full h-full flex flex-col justify-end items-center">
                            <img
                                src={image}
                                alt="Hint ilustración"
                                className="w-full h-[300px] md:h-[500px] object-cover object-center block"
                            />
                            {/* Overlay degradado y contenido */}
                            <div className="absolute bottom-0 left-0 w-full" style={{height: '50%', pointerEvents: 'none'}}>
                                <div style={{
                                    position: 'absolute',
                                    left: 0,
                                    bottom: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.0) 100%)',
                                    zIndex: 2,
                                }} />
                                <div className="relative z-10 w-full flex flex-col items-center justify-end h-full pb-4 px-4">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white text-center drop-shadow-lg">
                                        <div
                                            className="hint-content"
                                            dangerouslySetInnerHTML={{ __html: content || '' }}
                                        />
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HintModalC;