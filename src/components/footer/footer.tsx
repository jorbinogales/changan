import React from "react";

const FooterC: React.FC = () => (
  <footer className="bg-[#F0F0F0] border-t border-gray-200 py-10 px-4 text-gray-700">
    <div className="w-full flex justify-center my-6 mb-6">
        <img
        src="/assets/divisor1.png"
        alt="Divisor Pie de pagina"
        className="w-full max-w-[1320px] h-auto"
        srcSet="
            /assets/divisor1.png 1320w,
            /assets/divisor1-300x2.png 300w,
            /assets/divisor1-1024x7.png 1024w,
            /assets/divisor1-768x5.png 768w
        "
        sizes="(max-width: 1320px) 100vw, 1320px"
        />
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8" style={{
        marginTop:'50px'
    }}>
      {/* Logo y descripción */}
      <div className="flex flex-col items-start gap-4 md:w-1/4">
        <img
          src="https://changanvzla.com/wp-content/uploads/2024/10/CHANGAN-Venezuela-2025.svg"
          alt="CHANGAN Venezuela 2025"
          className="w-48 h-auto"
        />
        <p className="text-sm play-regular">Somos la marca líder en el mercado automotriz en Venezuela.</p>
        <div className="flex gap-3 mt-2">
          <a className="cursor-pointer flex items-center justify-center w-8 h-8 button-blue-changan text-white button-rounded-changan" href="https://www.instagram.com/changanvenezuela/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="w-4 h-4 transition" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </a>
          <a className="cursor-pointer flex items-center justify-center w-8 h-8 button-blue-changan text-white button-rounded-changan" href="https://www.facebook.com/?locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg className="w-4 h-4 transition" fill="currentColor" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
          </a>
          <a className="cursor-pointer flex items-center justify-center w-8 h-8 button-blue-changan text-white button-rounded-changan" href="https://www.youtube.com/@changanvenezuela" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg className="w-4 h-4 transition" fill="currentColor" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
          </a>
          <a className="cursor-pointer flex items-center justify-center w-8 h-8 button-blue-changan text-white button-rounded-changan" href="https://www.tiktok.com/@changanvenezuela" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg className="w-4 h-4  transition" fill="currentColor" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
          </a>
          <a className="cursor-pointer flex items-center justify-center w-8 h-8 button-blue-changan text-white button-rounded-changan" href="https://open.spotify.com/user/31cchkhkvmufljjfjpa6n3uveuyq" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
            <svg className="w-4 h-4  transition" fill="currentColor" viewBox="0 0 496 512"><path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/></svg>
          </a>
        </div>
      </div>
      {/* Descubre Changan */}
      <div className="md:w-1/5">
        <h2 className="play-bold font-bold mb-3 text-primary-changan" style={{fontSize: '15px'}}>Descubre Changan</h2>
        <ul className="space-y-2 text-sm play-regular">
          <li><a href="https://changanvzla.com/changan-global/" className="hover:underline">Changan Global</a></li>
          <li><a href="https://changanvzla.com/changan-en-venezuela/" className="hover:underline">Changan Vzla</a></li>
          <li><a href="https://changanvzla.com/repuestos-y-servicio/" className="hover:underline">Repuestos y Accesorios</a></li>
          <li><a href="https://changanvzla.com/repuestos-y-servicio/" className="hover:underline">Servicios</a></li>
        </ul>
      </div>
      {/* Contacto */}
      <div className="md:w-1/5">
        <h2 className="play-bold font-bold mb-3 text-primary-changan" style={{fontSize: '15px'}}>Contacto</h2>
        <ul className="space-y-2 text-sm play-regular">
          <li><a href="https://changanvzla.com/concesionarios/" className="hover:underline">Concesionarios</a></li>
          <li><a href="https://changanvzla.com/agenda-tu-cita/" className="hover:underline">Agenda tu Cita</a></li>
          <li><a href="https://changanvzla.com/vehiculos-2/" className="hover:underline">Blog</a></li>
        </ul>
      </div>
      {/* Modelos */}
      <div className="md:w-1/5">
        <h2 className="play-bold font-bold mb-3 text-primary-changan" style={{fontSize: '15px'}}>Modelos</h2>
        <ul className="space-y-2 text-sm play-regular">
          <li><a href="https://changanvzla.com/camioneta-hunter/" className="hover:underline">Hunter</a></li>
          <li><a href="https://changanvzla.com/camioneta-suv-cs35-plus/" className="hover:underline">CS35 Plus</a></li>
          <li><a href="https://changanvzla.com/camioneta-suv-cs55-plus/" className="hover:underline">CS55 Plus</a></li>
          <li><a href="https://changanvzla.com/sedan-alsvin/" className="hover:underline">Alsvin</a></li>
          <li><a href="https://changanvzla.com/camioneta-suv-cs15/" className="hover:underline">CS15</a></li>
          <li><a href="https://changanvzla.com/auto-electrico-benni/" className="hover:underline">Benni</a></li>
        </ul>
      </div>
      {/* Ubícanos */}
      <div className="md:w-1/5">
        <h2 className="play-bold font-bold mb-3 text-primary-changan" style={{fontSize: '15px'}}>Ubícanos</h2>
        <ul className="space-y-2 text-sm play-regular">
          <li><a href="https://changanvzla.com/concesionario-changan-maracay/" target="_blank" className="hover:underline">Maracay</a></li>
          <li><a href="https://changanvzla.com/concesionario-changan-maracaibo/" target="_blank" className="hover:underline">Maracaibo</a></li>
          <li><a href="https://changanvzla.com/concesionario-changan-el-tigrito/" target="_blank" className="hover:underline">El Tigrito</a></li>
          <li><a href="https://changanvzla.com/concesionario-changan-el-vigia/" target="_blank" className="hover:underline">El Vigía</a></li>
          <li><a href="https://changanvzla.com/concesionario-changan-valencia/" target="_blank" className="hover:underline">Valencia</a></li>
          <li><a href="https://changanvzla.com/concesionario-changan-caracas/" target="_blank" className="hover:underline">Caracas</a></li>
          <li><a href="https://changanvzla.com/concesionario-changan-acarigua/" target="_blank" className="hover:underline">Acarigua</a></li>
          <li><a href="https://changanvzla.com/concesionario-changan-barinas/" target="_blank" className="hover:underline">Barinas</a></li>
          <li><a href="https://changanvzla.com/concesionario-changan-puerto-la-cruz/" target="_blank" className="hover:underline">Puerto La Cruz</a></li>
          <li><a href="https://changanvzla.com/concesionario-changan-puerto-ordaz/" target="_blank" className="hover:underline">Puerto Ordaz</a></li>
          <li><span className="hover:underline">Maturín</span></li>
        </ul>
      </div>
    </div>
    <div className="bg-white-changan max-w-7xl m-auto flex flex-col md:flex-row items-center justify-between gap-2 mt-4 border-t border-gray-200 pt-4">
      <p className="text-xs play-bold text-primary-changan" style={{
        fontSize: '15px'
      }}>© 2025 Changan Venezuela</p>
      <p className="text-xs text-gray-500 play-bold text-primary-changan" style={{
        fontSize: '15px'
      }}>
        <a
          href="https://changanvzla.com/nuevo-politicas-de-privacidad/"
          className="text-primary-changan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Políticas de Privacidad
        </a>
      </p>
    </div>
  </footer>
);

export default FooterC;