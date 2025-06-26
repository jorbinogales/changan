import Mouse from './../../assets/icons/mouse.svg';
import ArrowLeft from './../../assets/icons/arrow_left.svg';
import ArrowRight from './../../assets/icons/arrow_right.svg';
import Touch from './../../assets/icons/touch.svg';

import './indicator.css';
import { useEffect, useState } from 'react';

interface IndicatorCProps {
    onHide: () => void;
}

const isMobileOrTablet = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 1024px)').matches;

const IndicatorC: React.FC<IndicatorCProps> = ({ onHide }) => {
    const [visible, setVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(isMobileOrTablet());

    useEffect(() => {
        const handleResize = () => setIsMobile(isMobileOrTablet());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!visible) {
            onHide();
        }
    }, [visible, onHide]);

    const handleClickMove = () => setVisible(false);

    const handleMouseMove = () => {
        setTimeout(() => setVisible(false), 1000);
    };

    const handleTouchMove = () => setVisible(false);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('click', handleClickMove);
        return () => window.removeEventListener('click', handleClickMove);
    }, []);

    return (
        <div
            className={`indicator-wrapper ${
                visible ? 'indicator-visible' : 'indicator-hidden'
            }`}
        >
            <div className="indicator-box justify-center">
                <p className="text-center open-sans-regular text-white-changan mt-5">
                    ARRASTRA PARA ROTAR
                </p>
                <div className="flex items-center justify-center gap-5 relative w-40 m-auto mt-10">
                    <img src={ArrowLeft} style={{ display: isMobile ? 'none' : 'flex' }} className="animate-left-arrow absolute" />
                    <img
                        src={Mouse}
                        className="mouse"
                        style={{ display: isMobile ? 'none' : 'flex' }}
                    />
                    <img
                        src={Touch}
                        className="touch touch-animate"
                        style={{ display: isMobile ? 'flex' : 'none' }}
                    />
                    <img src={ArrowRight} style={{ display: isMobile ? 'none' : 'flex' }} className="animate-right-arrow absolute" />
                </div>
            </div>
        </div>
    );
};

export default IndicatorC;