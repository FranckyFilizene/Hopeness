import React from 'react'
import Mec from '../assets/elect.webp';
import { Link } from 'react-router-dom'
import mecanic from '../assets/Circuit.webp'
import apprendreElec from '../data/apprendreElec'
import { FaCheckCircle } from 'react-icons/fa';
import formationElec from '../data/formationElec';
import img1 from '../assets/Mecanique.webp';
import img2 from '../assets/Mecanique2.webp';
import img3 from '../assets/Mecanique3.webp';
import img4 from '../assets/Meca.webp';
import { useTranslation } from 'react-i18next';
import { translate as tr } from '../i18n/i18n';

const SectionTitle = ({ title, subtitle }) => (
  <div className='border-l-4 border-emerald-600 dark:border-emerald-400 pl-4'>
    <h2 className='text-2xl font-bold tracking-tight text-slate-900 dark:text-white'>{title}</h2>
    <p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>{subtitle}</p>
  </div>
);

const cardBase =
  'flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ' +
  'transition-all duration-300 hover:border-emerald-300 hover:shadow-md ' +
  'dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-emerald-500/60';

const iconStyle = 'rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300';

const Electronique = () => {
  useTranslation();

  const galerie = [
    { src: img1, alt: 'Imgage1' },
    { src: img2, alt: 'Imgage2' },
    { src: img3, alt: 'Imgage3' },
    { src: img4, alt: 'Imgage4' },
  ];

  const formationsListe = [
    "Electronique de base",
    "Electronique appliquée (systémes embarqués)",
    "Maintenance des equipements electronique",
    "Autorisation et controle industriel",
    "Electronique",
  ];

  return (
    <div className='min-h-screen relative bg-slate-50 dark:bg-slate-900'>

      {/* ===================== HERO ===================== */}
      <section className='relative flex items-center overflow-hidden min-h-[45vh]'>
        <img src={Mec} alt={tr("Cours électronique")} className='absolute inset-0 z-0 h-full w-full object-cover' />
        <div className='absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30'></div>

        <div className='relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <div className='max-w-2xl space-y-6'>
            <div className='inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-100 backdrop-blur-sm'>
              <p>{tr("Cours Electronique")}</p>
            </div>

            <div className='flex flex-col gap-3'>
              <h1 className='text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl'>
                {tr("Cours électronique")}
              </h1>
              <h2 className='text-lg font-extrabold uppercase tracking-wide text-emerald-300 md:text-xl'>
                {tr("Apprendre , convoir, innover")}
              </h2>
              <p className='max-w-xl text-sm leading-relaxed text-slate-200 md:text-base'>
                {tr("Maitrisez les technologies d'aujoud'hui et ")}<br />
                {tr("préparez-vous aux métiers de demain dans le domaine de l'électronique et de l'electrotechnique.")}
              </p>
            </div>

            <div>
              <Link
                to='/contact'
                className='inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-900/30 transition-colors duration-300 hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900'
              >
                {tr("Inscrivez-vous")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTENU ===================== */}

      {/* ---- Ce que vous allez apprendre ---- */}
      <section className='py-16 transition-colors'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
          <SectionTitle
            title={tr("Ce que vous aller apprendre")}
            subtitle={tr("Une programmme complet pour tous les niveaux.")}
          />
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {apprendreElec.map((item) => (
              <div key={item.id} className={cardBase}>
                <div className='mb-5'>
                  {item.icon.map(({ Icon, Style }, index) => (
                    <Icon key={index} className={`${Style} ${iconStyle}`} size={52} />
                  ))}
                </div>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>{tr(item.titre)}</h3>
                <p className='mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400'>
                  {tr(item.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Nos formations ---- */}
      <section className='border-y border-slate-200 bg-white py-16 transition-colors dark:border-slate-800 dark:bg-slate-800/40'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>

            {/* Texte de présentation */}
            <div className='space-y-5'>
              <div className='inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400'>
                <span>{tr("Electronique")}</span>
              </div>

              <h2 className='text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl'>
                {tr("Nos formations")}
              </h2>

              <p className='max-w-xl leading-relaxed text-slate-600 dark:text-slate-400'>
                {tr("Des formations complètes pour devenir un professionnel.")}
              </p>

              <ul className='divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-800/70'>
                {formationsListe.map((texte) => (
                  <li key={texte} className='flex items-center gap-3 px-5 py-3.5'>
                    <FaCheckCircle size={18} className='shrink-0 text-emerald-600 dark:text-emerald-400' />
                    <span className='text-sm font-medium text-slate-800 dark:text-slate-200'>{tr(texte)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Illustration de l'atelier */}
            <div className='rounded-3xl border border-emerald-500/20 bg-linear-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-2'>
              <div className='overflow-hidden rounded-2xl shadow-lg'>
                <img
                  src={mecanic}
                  alt={tr("Atelier d'électronique")}
                  loading='lazy'
                  className='h-full w-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Pourquoi choisir + Galerie ---- */}
      <section className='space-y-16 py-16 transition-colors'>
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
          <SectionTitle
            title={tr("Pourquoi choisir notre formation ?")}
            subtitle={tr("Une formation pensée pour votre réussite")}
          />
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {formationElec.map((item) => (
              <div key={item.id} className={cardBase}>
                <div className='mb-5'>
                  {item.icon.map(({ Icon, Style }, index) => (
                    <Icon key={index} className={`${Style} ${iconStyle}`} size={52} />
                  ))}
                </div>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>{tr(item.titre)}</h3>
                <p className='mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400'>
                  {tr(item.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Electronique