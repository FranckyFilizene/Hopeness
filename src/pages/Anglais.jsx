import React from 'react';
import Ifr from '../assets/USA.webp';
import { Link } from 'react-router-dom';
import formation from '../data/formation';
import apprendref from '../data/apprendref';
import { MdKeyboardArrowRight } from "react-icons/md";
import img1 from '../assets/Imanglais1.webp';
import img2 from '../assets/Imanglais2.webp';
import img3 from '../assets/imanglais3.webp';
import img4 from '../assets/Imanglais4.webp';
import niveaux from '../data/niveaux';
import { GoVerified } from 'react-icons/go';
import { useTranslation } from 'react-i18next';
import { translate as tr } from '../i18n/i18n';

/* ---------- Petits composants de mise en page (design uniquement) ---------- */

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

const Anglais = () => {
    useTranslation();

    const methode = [
        { id: 1, icon: [{ Icon: GoVerified, Style: 'text-white' }], titre: 'Cours en présentiel' },
        { id: 2, icon: [{ Icon: GoVerified, Style: 'text-white' }], titre: 'Supports pédagogiques modernes' },
        { id: 3, icon: [{ Icon: GoVerified, Style: 'text-white' }], titre: 'Mise en situation réelle' },
        { id: 4, icon: [{ Icon: GoVerified, Style: 'text-white' }], titre: 'Suivi personnalisé' },
        { id: 5, icon: [{ Icon: GoVerified, Style: 'text-white' }], titre: 'Evaluation regulières' },
    ]

    const galerie = [
        { src: img1, alt: 'Imgage1' },
        { src: img2, alt: 'Imgage2' },
        { src: img3, alt: 'Imgage3' },
        { src: img4, alt: 'Imgage4' },
    ];

    return (
        <div className='min-h-screen relative bg-slate-50 dark:bg-slate-900'>

            {/* ===================== HERO ===================== */}
            <section className='relative flex items-center overflow-hidden min-h-[45vh]'>
                <img src={Ifr} alt={tr("Cours de langue")} className='absolute inset-0 z-0 h-full w-full object-cover' />
                <div className='absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30'></div>

                <div className='relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
                    <div className='max-w-2xl space-y-6'>
                        <div className='inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-100 backdrop-blur-sm'>
                            <p>{tr("Cours de langue")}</p>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <h1 className='text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl'>
                                {tr("Cours d'Anglais")}
                            </h1>
                            <h2 className='text-lg font-medium text-emerald-200 md:text-xl'>
                                {tr("Apprenez l'anglais, construire votre futur!")}
                            </h2>
                            <p className='max-w-xl text-sm leading-relaxed text-slate-200 md:text-base'>
                                {tr("L'anglais est une langue de communication ,de culture et d'opportunités. ")}<br />
                                {tr("Notre centre")} <span className='font-extrabold text-emerald-400'>HOPENESS</span> {tr("vous propose une formation complète et pratique ")}<br />
                                {tr("pour maitriser l'anglais, a l'oral comme a l'écrit, quel que soit votre niveau.")}
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
            <section className='space-y-16 py-16 transition-colors'>

                {/* ---- Pourquoi choisir notre formation ---- */}
                <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
                    <SectionTitle
                        title={tr("Pourquoi choisir notre formation ?")}
                        subtitle={tr("Une formation pensée pour votre réussite")}
                    />
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                        {formation.map((item) => (
                            <div key={item.id} className={cardBase}>
                                <div className='mb-5'>
                                    {item.icon.map(({ Icon, Style }, index) => (
                                        <Icon key={index} className={`${Style} rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300`} size={52} />
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

                {/* ---- Ce que vous allez apprendre ---- */}
                <div className='bg-white py-16 dark:bg-slate-800/40'>
                    <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
                        <SectionTitle
                            title={tr("Ce que vous aller apprendre")}
                            subtitle={tr("Une programmme complet pour tous les niveaux.")}
                        />
                        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                            {apprendref.map((item) => (
                                <div key={item.id} className='flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors duration-300 hover:border-emerald-300 dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-emerald-500/60'>
                                    <div className='mb-5'>
                                        {item.icon.map(({ Icon, Style }, index) => (
                                            <Icon key={index} className={`${Style} rounded-xl bg-emerald-600 p-3 text-white shadow-sm`} size={52} />
                                        ))}
                                    </div>
                                    <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>{tr(item.titre)}</h3>
                                    <ul className='mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400'>
                                        <li className='flex items-start gap-2'>
                                            <MdKeyboardArrowRight className='mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400' size={18} />
                                            <p>{tr(item.desc1)}</p>
                                        </li>
                                        <li className='flex items-start gap-2'>
                                            <MdKeyboardArrowRight className='mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400' size={18} />
                                            <p>{tr(item.desc2)}</p>
                                        </li>
                                        <li className='flex items-start gap-2'>
                                            <MdKeyboardArrowRight className='mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400' size={18} />
                                            <p>{tr(item.desc3)}</p>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ---- Niveaux + Méthode ---- */}
                <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
                    <SectionTitle
                        title={tr("Les niveaux proposés")}
                        subtitle={tr("Du débutant a l'avancé, nous avons un parcours adapté a vos besoins..")}
                    />
                    <div className='grid grid-cols-1 items-start gap-8 lg:grid-cols-3'>
                        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2'>
                            {niveaux.map((item) => (
                                <div key={item.id} className={cardBase}>
                                    <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-600 text-2xl font-bold text-white shadow-sm dark:bg-emerald-500 dark:text-slate-900'>
                                        <p>{item.niv}</p>
                                    </div>
                                    <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>{tr(item.titre)}</h3>
                                    <p className='mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400'>
                                        {tr(item.desc)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <aside className='overflow-hidden rounded-2xl bg-slate-900 shadow-xl dark:border dark:border-slate-700 lg:sticky lg:top-24'>
                            <div className='border-b border-white/10 bg-emerald-700 px-6 py-5'>
                                <h2 className='text-xl font-bold text-white'>{tr("Notre méthode")}</h2>
                                <p className='mt-1 text-sm text-emerald-100'>{tr("Une approche moderne et efficace")}</p>
                            </div>
                            <ul className='divide-y divide-white/10 px-6 py-2'>
                                {methode.map((item) => (
                                    <li key={item.id} className='flex items-center gap-3 py-3'>
                                        {item.icon.map(({ Icon, Style }, index) => (
                                            <div key={index} className='shrink-0 rounded-full bg-emerald-600 p-1.5 shadow-md'>
                                                <Icon className={`${Style}`} size={16} />
                                            </div>
                                        ))}
                                        <p className='text-sm font-medium text-slate-100'>{tr(item.titre)}</p>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                </div>

                {/* ---- Galerie ---- */}
                <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
                    <SectionTitle
                        title={tr("Quelques images de nos cours")}
                        subtitle={tr("Decouvrez notre environnement d'apprentissage.")}
                    />
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                        {galerie.map((img) => (
                            <div key={img.alt} className='group aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 shadow-sm dark:border-slate-700'>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading='lazy'
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Anglais