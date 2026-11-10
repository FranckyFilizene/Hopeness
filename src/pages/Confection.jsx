import img1 from '../assets/realisation1.webp'
import img3 from '../assets/Tee-shirtB.webp'
import img2 from '../assets/Tee-ShirtN.webp'
import img4 from '../assets/realisation3.webp'
import build1 from '../assets/build1.webp'
import build2 from '../assets/build2.webp'
import build3 from '../assets/build3.webp'
import confec from '../assets/textile.webp';

import { Link } from 'react-router-dom';
import service from '../data/service';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
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

const iconStyle = 'rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300';

const Confection = () => {
    useTranslation();

    const galerie = [
        { src: img1, alt: 'Imgage1' },
        { src: img2, alt: 'Imgage2' },
        { src: img4, alt: 'Imgage3' },
        { src: img3, alt: 'Imgage4' },
    ];

    const builds = [
        { src: build1, alt: 'Imgage1' },
        { src: build2, alt: 'Imgage2' },
        { src: build3, alt: 'Imgage3' },
    ];

    return (
        <div className='min-h-screen relative bg-slate-50 dark:bg-slate-900'>

            {/* ===================== HERO ===================== */}
            <section className='relative flex items-center overflow-hidden min-h-[45vh]'>
                <img src={confec} alt={tr("Atelier & Sur-mesure")} className='absolute inset-0 z-0 h-full w-full object-cover' />
                <div className='absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30'></div>

                <div className='relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
                    <div className='max-w-2xl space-y-6'>
                        <div className='inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-100 backdrop-blur-sm'>
                            <p>{tr("Atelier & Sur-mesure")}</p>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <h1 className='text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl'>
                                {tr("Confection et Personnalisation")}
                            </h1>
                            <h2 className='text-lg font-medium text-emerald-200 md:text-xl'>
                                {tr("Votre idée, notre savoir-faire !")}
                            </h2>
                            <p className='max-w-xl text-sm leading-relaxed text-slate-200 md:text-base'>
                                {tr("HOPENESS vous accompagne dans la création et la personnalisation de ")}<br />
                                {tr("vetement, logos, et support visuels. Que ce soit pour votre entreprise. ")}<br />
                                {tr("club, association ou usage personnel, donnez vie a vos idée avec des produits de qualité et un service sur mesure.")}
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

                {/* ---- Nos services ---- */}
                <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
                    <SectionTitle
                        title={tr("Nos services")}
                        subtitle={tr("Une large gamme de prestations pour répondre à tous vos besoins.")}
                    />
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                        {service.map((item) => (
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

                {/* ---- Nos réalisations ---- */}
                <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
                    <SectionTitle
                        title={tr("Nos realisations")}
                        subtitle={tr("Decouvrez quelques exemple de nos créations.")}
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

            {/* ---- Pourquoi choisir HOPENESS ---- */}
            <section className='border-y border-slate-200 bg-white py-16 transition-colors dark:border-slate-800 dark:bg-slate-800/40'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>

                        {/* Texte de présentation */}
                        <div className='space-y-5'>
                            <h2 className='text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl'>
                                {tr("Pourquoi choisir HOPENESS ?")}
                            </h2>

                            <ul className='divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-800/70'>
                                <li className='flex items-center gap-3 px-5 py-3.5'>
                                    <FaCheckCircle size={18} className='shrink-0 text-emerald-600 dark:text-emerald-400' />
                                    <span className='text-sm font-medium text-slate-800 dark:text-slate-200'>{tr("Qualité des materiaux")}</span>
                                </li>
                                <li className='flex items-center gap-3 px-5 py-3.5'>
                                    <FaCheckCircle size={18} className='shrink-0 text-emerald-600 dark:text-emerald-400' />
                                    <span className='text-sm font-medium text-slate-800 dark:text-slate-200'>{tr("Equipe créative et professionelle")}</span>
                                </li>
                                <li className='flex items-center gap-3 px-5 py-3.5'>
                                    <FaCheckCircle size={18} className='shrink-0 text-emerald-600 dark:text-emerald-400' />
                                    <span className='text-sm font-medium text-slate-800 dark:text-slate-200'>{tr("Delais respectés")}</span>
                                </li>
                                <li className='flex items-center gap-3 px-5 py-3.5'>
                                    <FaCheckCircle size={18} className='shrink-0 text-emerald-600 dark:text-emerald-400' />
                                    <span className='text-sm font-medium text-slate-800 dark:text-slate-200'>Prix compétitifs</span>
                                </li>
                            </ul>
                        </div>

                        {/* Images de l'atelier */}
                        <div className='rounded-3xl border border-emerald-500/20 bg-linear-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-2'>
                            <div className='grid grid-cols-1 gap-2 sm:grid-cols-3'>
                                {builds.map((img) => (
                                    <div key={img.alt} className='aspect-[3/4] overflow-hidden rounded-xl shadow-md'>
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            loading='lazy'
                                            className='h-full w-full object-cover'
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---- Bandeau de contact ---- */}
            <section className='bg-emerald-700 dark:bg-emerald-800'>
                <div className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8'>
                    <div className='text-center md:text-left'>
                        <h2 className='text-2xl font-extrabold text-white md:text-3xl'>
                            {tr("Vous avez un projet ?")}
                        </h2>
                        <p className='mt-2 text-sm text-emerald-100'>
                            {tr("Contactez-nous des maintenant pour une devis personnalisé.")}
                        </p>
                    </div>
                    <div className='flex justify-center md:justify-end'>
                        <Link
                            to='/contact'
                            className='inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-emerald-800 shadow-lg transition-colors duration-300 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-700'
                        >
                            {tr("Nous contactez")}
                            <FaPhone />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Confection