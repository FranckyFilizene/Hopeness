import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { translate as tr } from '../i18n/i18n';

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* 1. Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-emerald-400 tracking-wide">HOPENESS</span>
              <span className="text-xs italic text-gray-400 font-medium">Hopeness always hopeness</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {tr("Centre de formation professionnelle, confection textile et création sur mesure.")}
            </p>
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 pt-2">
              <a href="#facebook" className="text-gray-400 hover:text-emerald-400 transition text-lg"><FaFacebook /></a>
              <a href="#instagram" className="text-gray-400 hover:text-emerald-400 transition text-lg"><FaInstagram /></a>
              <a href="#youtube" className="text-gray-400 hover:text-emerald-400 transition text-lg"><FaYoutube /></a>
              <a href="#linkedin" className="text-gray-400 hover:text-emerald-400 transition text-lg"><FaLinkedin /></a>
            </div>
          </div>

          {/* 2. Formations */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-b border-emerald-600/30 pb-1 w-max">
              {t('nav.courses.title')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/activites/francais" className="hover:text-emerald-400 transition">{t('nav.courses.french')}</Link></li>
              <li><Link to="/activites/anglais" className="hover:text-emerald-400 transition">{t('nav.courses.english')}</Link></li>
              <li><Link to="/activites/informatique" className="hover:text-emerald-400 transition">{t('nav.courses.computer')}</Link></li>
              <li><Link to="/activites/mecanique" className="hover:text-emerald-400 transition text-emerald-400 font-medium">{t('nav.courses.mechanics')}</Link></li>
              <li><Link to="/activites/electronique" className="hover:text-emerald-400 transition">{t('nav.courses.electronics')}</Link></li>
            </ul>
          </div>

          {/* 3. Services */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-b border-emerald-600/30 pb-1 w-max">
              {tr("Services")}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/activites/confection" className="hover:text-emerald-400 transition">{tr("Confection sur mesure")}</Link></li>
              <li><Link to="/activites/confection" className="hover:text-emerald-400 transition">{tr("Création de logos")}</Link></li>
              <li><Link to="/activites/confection" className="hover:text-emerald-400 transition">{tr("Personnalisation T-shirts/Polos")}</Link></li>
              <li><Link to="/boutique" className="hover:text-emerald-400 transition">{tr("Boutique de costumes")}</Link></li>
            </ul>
          </div>

          {/* 4. Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-b border-emerald-600/30 pb-1 w-max">
              {t('nav.contact')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-emerald-400 mt-1 flex-shrink-0" />
                <span>{tr("Mahavatse II,TOLIARA Madagascar")}</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-emerald-400 flex-shrink-0" />
                <span>+261 38 48 783 50</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-emerald-400 flex-shrink-0" />
                <span>Zahgascar@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bas de page (Copyright & Langue) */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-3 md:space-y-0">
          <p>{tr("© 2026 HOPENESS. Tous droits réservés.")}</p>
          <p>{tr("Designed & Developed by ")}<span className='font-bold text-white'>View <span className='text-sky-600'>Tech</span></span></p>
          <div className="flex space-x-4 font-semibold">
            <button type="button" onClick={() => i18n.changeLanguage('fr')} aria-label="Français"
              className={i18n.language.startsWith('fr') ? 'text-emerald-400' : 'text-gray-500'}>FR</button>
            <span>|</span>
            <button type="button" onClick={() => i18n.changeLanguage('en')} aria-label="English"
              className={i18n.language.startsWith('en') ? 'text-emerald-400' : 'text-gray-500'}>EN</button>
          </div>
        </div>
      </div>
    </footer>
  );
}