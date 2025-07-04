import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Pagination } from 'swiper/modules';
import asientoImg from "../../../public/assets/vehicles/cs55plus/components/asiento.jpg";
import capoImg from "../../../public/assets/vehicles/cs55plus/components/capo.jpg";
import cauchosImg from "../../../public/assets/vehicles/cs55plus/components/cauchos.jpg";
import lucesImg from "../../../public/assets/vehicles/cs55plus/components/luces.jpg";
import maleteraImg from "../../../public/assets/vehicles/cs55plus/components/maletera.jpg";
import motorImg from "../../../public/assets/vehicles/cs55plus/components/motor.jpg";
import palancaImg from "../../../public/assets/vehicles/cs55plus/components/palanca.jpg";
import puertaImg from "../../../public/assets/vehicles/cs55plus/components/puerta.jpg";
import tableroImg from "../../../public/assets/vehicles/cs55plus/components/tablero.jpg";
import traseroImg from "../../../public/assets/vehicles/cs55plus/components/trasero.jpg";
import velocimetroImg from "../../../public/assets/vehicles/cs55plus/components/velocimetro.jpg";
import ventanasImg from "../../../public/assets/vehicles/cs55plus/components/ventanas.jpg";
import volantesImg from "../../../public/assets/vehicles/cs55plus/components/volante.jpg";

const images = [
  { src: asientoImg, alt: "Asiento" },
  { src: capoImg, alt: "Capo" },
  { src: cauchosImg, alt: "Cauchos" },
  { src: lucesImg, alt: "Luces" },
  { src: maleteraImg, alt: "Maletera" },
  { src: motorImg, alt: "Motor" },
  { src: palancaImg, alt: "Palanca" },
  { src: puertaImg, alt: "Puerta" },
  { src: tableroImg, alt: "Tablero" },
  { src: traseroImg, alt: "Trasero" },
  { src: velocimetroImg, alt: "Velocimetro" },
  { src: ventanasImg, alt: "Ventanas" },
  { src: volantesImg, alt: "Volantes" },
];
import { useState, useEffect } from 'react';
import './carousel.css';

export default function CaroucelC() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Pagination]}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        spaceBetween={10}
        virtual
        style={{ paddingBottom: 40 }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={img.alt} virtualIndex={idx} style={{width: '125px', height: '125px'}}>
            <div
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '1 / 1',
                borderRadius: '16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                backgroundImage: `url(${img.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              title={img.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}