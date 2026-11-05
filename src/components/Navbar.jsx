import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaChevronDown, FaGlobe, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

import { Link } from 'react-router-dom'
import { translate as tr } from '../i18n/i18n'

const Navbar = ({darkMode, setDarkMode}) => {

  const { t, i18n } = useTranslation();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className='bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 border-b border-emerald-100 dark:border-gray-800 transition-colors'>

      <div className='max-w-7xl max-auto px-4 md:px-6 lg:px-8'>
        <div className='flex justify-between h-20 items-center'>

          <Link to='/' className='flex flex-col'>
            <span className='text-2xl font-bold text-emerald-700 dark:text-emerald-500 tracking-wide'>HOPENESS</span>
            <span className='text-xs italic dark:text-red-400 text-red-500 font-medium'>Hopeness Always Hopeness</span>
          </Link>

          <div className='hidden md:flex items-center space-x-6'>
            <Link to='/' className='text-gray-700 dark:text-gray-200 hover:text-emerald-600 font-medium transition'> {t('nav.home')} </Link>

            <div className='relative'>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                className='flex items-center text-gray-700 dark:text-gray-200 hover:text-emerald-600 font-medium focus:outline-none'
              >
                <span>{t('nav.activities')}</span>
                <FaChevronDown className='w-3 h-3 ml-1' />
              </button>

              {dropdownOpen && (
                <div className='absolute left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-xl py-2 border border-emerald-100 dark:border-gray-700 z-50 '>
                  <div className='px-4 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide bg-emerald-50 dark:bg-gray-700'>
                    {t('nav.courses.title')}
                  </div>
                  <Link to='activites/francais' className='block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-700 hover:text-emerald-600'>
                    {t('nav.courses.french')}
                  </Link>
                  <Link to="/activites/anglais" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-700 hover:text-emerald-600">
                    {t('nav.courses.english')}
                  </Link>
                  <Link to="/activites/informatique" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-700 hover:text-emerald-600">
                    {t('nav.courses.computer')}
                  </Link>
                  <Link to="/activites/mecanique" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-700 hover:text-emerald-600 font-medium text-emerald-600">
                    {t('nav.courses.mechanics')}
                  </Link>
                  <Link to="/activites/electronique" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-700 hover:text-emerald-600">
                    {t('nav.courses.electronics')}
                  </Link>
                  <Link to="/activites/confection" className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-700 border-t border-gray-100 dark:border-gray-700">
                    {t('nav.courses.confection')}
                  </Link>
                </div>
              )}
            </div>

            <Link to='/a-propos' className='text-gray-700 dark:text-gray-200 hover:text-emerald-600 font-medium transition'>
            {t('nav.about')}
            </Link>
            <Link to='/boutique' className='text-gray-700 dark:text-gray-200 hover:text-emerald-600 font-medium transition'>
            {t('nav.shop')}
            </Link>
            

            <div className='flex space-x-2 items-center border-l pl-4 border-gray-200 dark:border-gray-700'>
              <button
              onClick={toggleLanguage}
              title={tr('Changer de langue')}
              className='flex items-center space-x-1 p-2 rounded-lg bg-emerald-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition'
              >
                <FaGlobe className='text-base'/>
                <span className='text-xs font-bold'>{i18n.language.toUpperCase()}</span>
              </button>

              <button
              
              onClick={()=> setDarkMode(!darkMode)}
              title={tr('Basculer le thème')}
              className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-200 dark:hover:bg-gray-700 transition'
              >
                {darkMode ? <FaSun className='text-base'/> : <FaMoon className='text-base'/>}
              </button>
            </div>

            <Link to="/contact" className="bg-emerald-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-emerald-700 transition shadow-sm">
              {t('nav.contactUs')}
            </Link>
          </div>

          {/* 3. Menu Mobile (Boutons rapides + Menu Hamburger) */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Icône Langue mobile */}
            <button 
              onClick={toggleLanguage} 
              className="flex items-center space-x-1 px-2.5 py-1.5 text-xs font-bold bg-emerald-50 dark:bg-gray-800 text-emerald-700 dark:text-emerald-400 rounded-lg"
            >
              <FaGlobe className='text-base'/>
              <span className="uppercase">{i18n.language}</span>
            </button>

            {/* Icône Mode Sombre mobile */}
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400"
            >
              {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            {/* Bouton Hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-gray-700 dark:text-gray-200 p-1 focus:outline-none"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile Déroulant (s'affiche si mobileMenuOpen est true) */}
      {/* Menu Mobile Déroulant en absolute par-dessus la page */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-gray-900 border-b border-emerald-100 dark:border-gray-800 shadow-2xl px-6 py-6 space-y-4 z-50 transition-colors">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-700 dark:text-gray-200 font-medium hover:text-emerald-600"
          >
            {t('nav.home')}
          </Link>

          <div className="py-2 border-t border-gray-100 dark:border-gray-800">
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-2">
              {t('nav.activities')}
            </p>
            <div className="pl-4 space-y-2.5 flex flex-col">
              <Link to="/activites/francais" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600">
                {t('nav.courses.french')}
              </Link>
              <Link to="/activites/anglais" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600">
                {t('nav.courses.english')}
              </Link>
              <Link to="/activites/informatique" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600">
                {t('nav.courses.computer')}
              </Link>
              <Link to="/activites/mecanique" onClick={() => setMobileMenuOpen(false)} className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                {t('nav.courses.mechanics')}
              </Link>
              <Link to="/activites/electronique" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600">
                {t('nav.courses.electronics')}
              </Link>
              <Link to="/activites/confection" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600">
                {t('nav.courses.confection')}
              </Link>
            </div>
          </div>

          <Link 
            to="/a-propos" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-700 dark:text-gray-200 font-medium border-t border-gray-100 dark:border-gray-800 hover:text-emerald-600"
          >
            {t('nav.about')}
          </Link>
          <Link 
            to="/boutique" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-700 dark:text-gray-200 font-medium hover:text-emerald-600"
          >
            {t('nav.shop')}
          </Link>

          <Link 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-emerald-600 text-white py-3 rounded-xl font-medium mt-4 shadow-md hover:bg-emerald-700 transition"
          >
            {t('nav.contactUs')}
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar
