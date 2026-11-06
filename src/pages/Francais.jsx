
import React from 'react';

import Ifr from '../assets/paris.webp';
import { Link } from 'react-router-dom';

import formation from '../data/formation';
import apprendre from '../data/apprendre';

import { MdKeyboardArrowRight } from "react-icons/md";

import img1 from '../assets/ImFrancais.webp';
import img2 from '../assets/ImFrancais2.webp';
import img3 from '../assets/FGCN9333.webp';
import img4 from '../assets/imfrancais5.webp';

import niveaux from '../data/niveaux';

import { GoVerified } from 'react-icons/go';
import { useTranslation } from 'react-i18next';
import { translate as tr } from '../i18n/i18n';

import { motion } from 'framer-motion';


// ========================================
// VARIANTS D'ANIMATION MOTION
// ========================================

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


// ========================================
// COMPOSANTS DE MISE EN PAGE
// ========================================

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


// ========================================
// PAGE FRANÇAIS
// ========================================

const Francais = () => {

    useTranslation();

    // Méthode pédagogique

    const methode = [
        { id: 1, icon: [{ Icon: GoVerified, Style: 'text-white' }], titre: 'Cours en présentiel' },
        { id: 2, icon: [{ Icon: GoVerified, Style: 'text-white' }], titre: 'Supports pédagogiques modernes' },
        { id: 3, icon: [{ Icon: GoVerified, Style: 'text-white' }], titre: 'Mise en situation réelle' },
        { id: 4, icon: [{ Icon: GoVerified, Style: 'text-white' }], titre: 'Suivi personnalisé' },
        { id: 5, icon: [{ Icon: GoVerified, Style: 'text-white' }], titre: 'Evaluation regulières' },
    ];

    // Galerie

    const galerie = [
        { src: img1, alt: 'Imgage1' },
        { src: img2, alt: 'Imgage2' },
        { src: img3, alt: 'Imgage3' },
        { src: img4, alt: 'Imgage4' },
    ];

    return (

        <div className='min-h-screen relative bg-slate-50 dark:bg-slate-900'>

            {/* =====================================
                HERO
            ===================================== */}

            <section className='relative flex items-center overflow-hidden min-h-[45vh]'>

                {/* Image de fond */}

                <motion.img
                    src={Ifr}
                    alt={tr("Cours de langue")}
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

                        {/* Badge */}

                        <motion.div
                            variants={fadeUp}
                            className='inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-100 backdrop-blur-sm'
                        >
                            <p>{tr("Cours de langue")}</p>
                        </motion.div>


                        {/* Titres et description */}

                        <div className='flex flex-col gap-3'>

                            <motion.h1
                                variants={fadeUp}
                                className='text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl'
                            >
                                {tr("Cours de Francais")}
                            </motion.h1>

                            <motion.h2
                                variants={fadeUp}
                                className='text-lg font-medium text-emerald-200 md:text-xl'
                            >
                                {tr("Apprenez le francais, ouvrez vous au monde !")}
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className='max-w-xl text-sm leading-relaxed text-slate-200 md:text-base'
                            >
                                {tr("Le francais est une langue de communication ,de culture et d'opportunités. ")}<br />

                                {tr("Notre centre")} <span className='font-extrabold text-emerald-400'>HOPENESS</span> {tr("vous propose une formation complète et pratique ")}<br />

                                {tr("pour maitriser le francais, a l'oral comme a l'écrit, quel que soit votre niveau.")}
                            </motion.p>

                        </div>


                        {/* Bouton inscription */}

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


            {/* =====================================
                CONTENU PRINCIPAL
            ===================================== */}

            <section className='space-y-16 py-16 transition-colors'>


                {/* =====================================
                    POURQUOI CHOISIR NOTRE FORMATION
                ===================================== */}

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

                        {formation.map((item) => (

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

                                        <Icon
                                            key={index}
                                            className={`${Style} rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300`}
                                            size={52}
                                        />

                                    ))}

                                </div>

                                <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>
                                    {tr(item.titre)}
                                </h3>

                                <p className='mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400'>
                                    {tr(item.desc)}
                                </p>

                            </motion.div>

                        ))}

                    </motion.div>

                </div>


                {/* =====================================
                    CE QUE VOUS ALLEZ APPRENDRE
                ===================================== */}

                <div className='bg-white py-16 dark:bg-slate-800/40'>

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

                            {apprendre.map((item) => (

                                <motion.div
                                    key={item.id}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                        transition: { duration: 0.3 },
                                    }}
                                    className='flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors duration-300 hover:border-emerald-300 dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-emerald-500/60'
                                >

                                    <div className='mb-5'>

                                        {item.icon.map(({ Icon, Style }, index) => (

                                            <Icon
                                                key={index}
                                                className={`${Style} rounded-xl bg-emerald-600 p-3 text-white shadow-sm`}
                                                size={52}
                                            />

                                        ))}

                                    </div>

                                    <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>
                                        {tr(item.titre)}
                                    </h3>

                                    <ul className='mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400'>

                                        <li className='flex items-start gap-2'>
                                            <MdKeyboardArrowRight
                                                className='mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400'
                                                size={18}
                                            />
                                            <p>{tr(item.desc1)}</p>
                                        </li>

                                        <li className='flex items-start gap-2'>
                                            <MdKeyboardArrowRight
                                                className='mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400'
                                                size={18}
                                            />
                                            <p>{tr(item.desc2)}</p>
                                        </li>

                                        <li className='flex items-start gap-2'>
                                            <MdKeyboardArrowRight
                                                className='mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400'
                                                size={18}
                                            />
                                            <p>{tr(item.desc3)}</p>
                                        </li>

                                    </ul>

                                </motion.div>

                            ))}

                        </motion.div>

                    </div>

                </div>


                {/* =====================================
                    NIVEAUX ET MÉTHODE
                ===================================== */}

                <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>

                    <SectionTitle
                        title={tr("Les niveaux proposés")}
                        subtitle={tr("Du débutant a l'avancé, nous avons un parcours adapté a vos besoins..")}
                    />

                    <div className='grid grid-cols-1 items-start gap-8 lg:grid-cols-3'>

                        {/* Cartes des niveaux */}

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={containerVariants}
                            className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2'
                        >

                            {niveaux.map((item) => (

                                <motion.div
                                    key={item.id}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -7,
                                        scale: 1.02,
                                        transition: { duration: 0.3 },
                                    }}
                                    className={cardBase}
                                >

                                    <motion.div
                                        whileHover={{ rotate: 5, scale: 1.08 }}
                                        className='mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-600 text-2xl font-bold text-white shadow-sm dark:bg-emerald-500 dark:text-slate-900'
                                    >
                                        <p>{item.niv}</p>
                                    </motion.div>

                                    <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>
                                        {tr(item.titre)}
                                    </h3>

                                    <p className='mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400'>
                                        {tr(item.desc)}
                                    </p>

                                </motion.div>

                            ))}

                        </motion.div>


                        {/* Notre méthode */}

                        <motion.aside
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeRight}
                            className='overflow-hidden rounded-2xl bg-slate-900 shadow-xl dark:border dark:border-slate-700 lg:sticky lg:top-24'
                        >

                            <motion.div
                                variants={fadeUp}
                                className='border-b border-white/10 bg-emerald-700 px-6 py-5'
                            >
                                <h2 className='text-xl font-bold text-white'>
                                    {tr("Notre méthode")}
                                </h2>

                                <p className='mt-1 text-sm text-emerald-100'>
                                    {tr("Une approche moderne et efficace")}
                                </p>
                            </motion.div>

                            <motion.ul
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                                className='divide-y divide-white/10 px-6 py-2'
                            >

                                {methode.map((item) => (

                                    <motion.li
                                        key={item.id}
                                        variants={fadeUp}
                                        whileHover={{ x: 5 }}
                                        className='flex items-center gap-3 py-3'
                                    >

                                        {item.icon.map(({ Icon, Style }, index) => (

                                            <div
                                                key={index}
                                                className='shrink-0 rounded-full bg-emerald-600 p-1.5 shadow-md'
                                            >
                                                <Icon className={`${Style}`} size={16} />
                                            </div>

                                        ))}

                                        <p className='text-sm font-medium text-slate-100'>
                                            {tr(item.titre)}
                                        </p>

                                    </motion.li>

                                ))}

                            </motion.ul>

                        </motion.aside>

                    </div>

                </div>


                {/* =====================================
                    GALERIE PHOTOS
                ===================================== */}

                <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>

                    <SectionTitle
                        title={tr("Quelques images de nos cours")}
                        subtitle={tr("Decouvrez notre environnement d'apprentissage.")}
                    />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={containerVariants}
                        className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'
                    >

                        {galerie.map((img) => (

                            <motion.div
                                key={img.alt}
                                variants={imageVariants}
                                whileHover={{
                                    y: -6,
                                    transition: { duration: 0.3 },
                                }}
                                className='group aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 shadow-sm dark:border-slate-700'
                            >

                                <motion.img
                                    src={img.src}
                                    alt={img.alt}
                                    loading='lazy'
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className='h-full w-full object-cover'
                                />

                            </motion.div>

                        ))}

                    </motion.div>

                </div>

            </section>

        </div>
    );
};

export default Francais;