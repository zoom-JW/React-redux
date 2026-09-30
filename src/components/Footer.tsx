import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold">ReduxStore &copy; {new Date().getFullYear()}</span>
          <p className="text-gray-400 text-sm mt-1">Все права защищены.</p>
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Главная</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Каталог</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">О нас</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Контакты</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
