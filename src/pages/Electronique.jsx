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
import { motion } from 'framer-motion';

// VARIANTS D'ANIMATION MOTION

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const fadeRight = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 45,
        scale: 0.94,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.65,
            ease: "easeOut",
        },
    },
};

const imageVariants = {
    hidden: {
        opacity: 0,
        scale: 0.85,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

// COMPOSANTS DE MISE EN PAGE

const SectionTitle = ({ title, subtitle }) => (
    <motion.div
        variants={fadeLeft}
        className='border-l-4 border-emerald-600 dark:border-emerald-400 pl-4'
    >
        <h2 className='text-2xl font-bold tracking-tight text-slate-900 dark:text-white'>
            {title}
        </h2>
        <p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>
            {subtitle}
        </p>
    </motion.div>
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

            {/*HERO*/}
            <section className='relative flex items-center overflow-hidden min-h-[45vh]'>
                <motion.img
                    src={Mec}
                    alt={tr("Cours électronique")}
                    initial={{ scale: 1.12 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                    }}
                    className='absolute inset-0 z-0 h-full w-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30'></div>

                <div className='relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className='max-w-2xl space-y-6'
                    >
                        <motion.div
                            variants={fadeUp}
                            className='inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-100 backdrop-blur-sm'
                        >
                            <p>{tr("Cours Electronique")}</p>
                        </motion.div>

                        <div className='flex flex-col gap-3'>
                            <motion.h1
                                variants={fadeUp}
                                className='text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl'
                            >
                                {tr("Cours électronique")}
                            </motion.h1>
                            <motion.h2
                                variants={fadeUp}
                                className='text-lg font-extrabold uppercase tracking-wide text-emerald-300 md:text-xl'
                            >
                                {tr("Apprendre , convoir, innover")}
                            </motion.h2>
                            <motion.p
                                variants={fadeUp}
                                className='max-w-xl text-sm leading-relaxed text-slate-200 md:text-base'
                            >
                                {tr("Maitrisez les technologies d'aujoud'hui et ")}<br />
                                {tr("préparez-vous aux métiers de demain dans le domaine de l'électronique et de l'electrotechnique.")}
                            </motion.p>
                        </div>

                        <motion.div
                            variants={fadeUp}
                            whileHover={{ scale: 1.06, y: -3 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            <Link
                                to='/contact'
                                className='inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-900/30 transition-colors duration-300 hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900'
                            >
                                {tr("Inscrivez-vous")}
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/*CONTENU*/}

            {/* ---- Ce que vous allez apprendre ---- */}
            <section className='py-16 transition-colors'>
                <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
                    <SectionTitle
                        title={tr("Ce que vous aller apprendre")}
                        subtitle={tr("Une programmme complet pour tous les niveaux.")}
                    />
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={containerVariants}
                        className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'
                    >
                        {apprendreElec.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    transition: { duration: 0.3 },
                                }}
                                className={cardBase}
                            >
                                <div className='mb-5'>
                                    {item.icon.map(({ Icon, Style }, index) => (
                                        <Icon key={index} className={`${Style} ${iconStyle}`} size={52} />
                                    ))}
                                </div>
                                <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>{tr(item.titre)}</h3>
                                <p className='mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400'>
                                    {tr(item.desc)}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ---- Nos formations ---- */}
            <section className='border-y border-slate-200 bg-white py-16 transition-colors dark:border-slate-800 dark:bg-slate-800/40'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>

                        {/* Texte de présentation */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeLeft}
                            className='space-y-5'
                        >
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
                                    <motion.li
                                        key={texte}
                                        whileHover={{ x: 5 }}
                                        className='flex items-center gap-3 px-5 py-3.5'
                                    >
                                        <FaCheckCircle size={18} className='shrink-0 text-emerald-600 dark:text-emerald-400' />
                                        <span className='text-sm font-medium text-slate-800 dark:text-slate-200'>{tr(texte)}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Illustration de l'atelier */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeRight}
                            className='rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-2'
                        >
                            <div className='overflow-hidden rounded-2xl shadow-lg'>
                                <motion.img
                                    src={mecanic}
                                    alt={tr("Atelier d'électronique")}
                                    loading='lazy'
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                    className='h-full w-full object-cover'
                                />
                            </div>
                        </motion.div>
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
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={containerVariants}
                        className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'
                    >
                        {formationElec.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    transition: { duration: 0.3 },
                                }}
                                className={cardBase}
                            >
                                <div className='mb-5'>
                                    {item.icon.map(({ Icon, Style }, index) => (
                                        <Icon key={index} className={`${Style} ${iconStyle}`} size={52} />
                                    ))}
                                </div>
                                <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>{tr(item.titre)}</h3>
                                <p className='mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400'>
                                    {tr(item.desc)}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Electronique;