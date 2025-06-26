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
                        className="bg-white text-black p-0 rounded-lg w-full max-w-4xl shadow-xl cursor-default relative overflow-hidden h-auto md:h-[400px]"
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
                        <div className="flex flex-col md:grid md:grid-cols-[2fr_3fr] h-full">
                            {/* Sección imagen */}
                            <div className="w-full h-48 md:h-full">
                                <img
                                    src={image}
                                    alt="Hint ilustración"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Sección contenido */}
                            <div className="p-4 md:p-6 flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-2 open-sans-regular text-center">
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