import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600">ReduxStore</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Главная</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Каталог</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">О нас</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Контакты</a>
        </nav>
        {/* Mobile menu button could go here, but for now just basic links */}
      </div>
    </header>
  );
};

export default Header;
