import React from "react";

const FooterC: React.FC = () => (
  <footer className="bg-[#F0F0F0] border-t border-gray-200 py-10 px-4 text-gray-700">
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