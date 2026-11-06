
import React from 'react';

import Logohop from '../assets/Hero.webp';
import vetement from '../assets/vetementH.webp';
import { Link } from 'react-router-dom';
import Langue from '../assets/CoursLangues.webp';
import Mec from '../assets/Meca.webp';
import info from '../assets/informatique.webp';

import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { translate as tr } from '../i18n/i18n';

// ========================================
// ANIMATIONS MOTION
// ========================================

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const top = {
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

const itemVariants = {
    hidden: {
        opacity: 0,
        x: -30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -60,
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
        x: 60,
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
            duration: 0.7,
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
            duration: 1,
            ease: "easeOut",
        },
    },
};

const buttonVariants = {
    hover: {
        scale: 1.05,
        y: -4,
        transition: {
            duration: 0.25,
            ease: "easeOut",
        },
    },
    tap: {
        scale: 0.96,
    },
};

// ========================================
// COMPOSANT HOME
// ========================================

const Home = () => {

    const { t } = useTranslation();

    return (
        <div className='relative min-h-screen'>

            {/* 1. SECTION HERO */}

            <section className='min-h-[85vh] overflow-hidden flex items-center relative'>

                {/* Image de fond */}

                <motion.img
                    src={Logohop}
                    alt="image hopeness"
                    initial={{ scale: 1.12 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className='absolute inset-0 w-full h-full object-cover z-0'
                />

                <div className='absolute bg-slate-900/70 inset-0'></div>

                <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full py-20 z-10'>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className='w-full text-center text-slate-100 dark:text-slate-200'
                    >

                        {/* Slogan */}

                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-400/30 px-4 py-1.5 rounded-full text-emerald-300 text-sm font-medium tracking-wide"
                        >
                            <span>{t('home.slogan')}</span>
                        </motion.div>

                        {/* Titre principal */}

                        <motion.h1
                            variants={top}
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
                        >
                            {t('home.title')}{' '}
                            <motion.span
                                className="text-emerald-400 inline-block"
                                initial={{ opacity: 0, scale: 0.7 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.7,
                                    type: "spring",
                                    stiffness: 120,
                                }}
                            >
                                HOPENESS
                            </motion.span>
                        </motion.h1>

                        {/* Description */}

                        <motion.p
                            variants={top}
                            className="text-lg sm:text-xl text-emerald-100/90 font-light leading-relaxed"
                        >
                            {t('home.description')}
                        </motion.p>

                        {/* Boutons d'action */}

                        <motion.div
                            variants={top}
                            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
                        >

                            <motion.div
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="w-full sm:w-auto"
                            >
                                <Link
                                    to="/contact"
                                    className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold rounded-xl shadow-lg transition flex items-center justify-center space-x-2"
                                >
                                    <span>{t('home.ctaRegister')}</span>
                                    <FaArrowRight />
                                </Link>
                            </motion.div>

                            <motion.a
                                href="#formations"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition backdrop-blur-sm text-center"
                            >
                                {t('home.ctaDiscover')}
                            </motion.a>

                        </motion.div>

                        {/* Réassurance */}

                        <motion.div
                            variants={top}
                            className='pt-8 flex flex-wrap justify-center gap-6 text-sm text-emerald-200/80'
                        >

                            <motion.span
                                whileHover={{ scale: 1.08 }}
                                className='flex items-center space-x-2'
                            >
                                <FaCheckCircle />
                                <span>{t('home.reassurance1')}</span>
                            </motion.span>

                            <motion.span
                                whileHover={{ scale: 1.08 }}
                                className='flex items-center space-x-2'
                            >
                                <FaCheckCircle />
                                <span>{t('home.reassurance2')}</span>
                            </motion.span>

                            <motion.span
                                whileHover={{ scale: 1.08 }}
                                className='flex items-center space-x-2'
                            >
                                <FaCheckCircle />
                                <span>{t('home.reassurance3')}</span>
                            </motion.span>

                        </motion.div>

                    </motion.div>

                </div>

            </section>


            {/* =====================================
                2. SECTION FORMATIONS
            ===================================== */}

            <section
                id='formations'
                className='py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors'
            >

                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                    {/* En-tête */}

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className='text-center max-w-3xl mx-auto mb-16 space-y-3'
                    >

                        <motion.h2
                            variants={top}
                            className='text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400'
                        >
                            {tr("Nos Domaines d'Excellence")}
                        </motion.h2>

                        <motion.p
                            variants={top}
                            className='text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white'
                        >
                            {tr("Des formations adaptées au marché")}
                        </motion.p>

                        <motion.p
                            variants={top}
                            className='text-gray-600 dark:text-gray-300'
                        >
                            {tr("Découvrez nos programmes conçus pour vous transmettre des compétences pratiques et immédiatement valorisables.")}
                        </motion.p>

                    </motion.div>


                    {/* Cartes des formations */}

                    <motion.div
                        viewport={{ once: true, amount: 0.2 }}
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                    >

                        {/* CARTE 1 : MÉCANIQUE */}

                        <motion.div
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3 },
                            }}
                            className='bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl border-2 border-emerald-500/40 transition-shadow flex flex-col items-center justify-between relative overflow-hidden group'
                        >

                            <div className='absolute top-40 right-2 bg-emerald-500 text-gray-900 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md z-10'>
                                {tr("1 An de Formation")}
                            </div>

                            <div className='w-full'>

                                <div className='w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800'>
                                    <motion.img
                                        src={Mec}
                                        alt={tr("École de Mécanique Automobile")}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className='w-full h-full object-cover'
                                    />
                                </div>

                                <div className='p-6 space-y-3'>

                                    <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors'>
                                        {tr("École de Mécanique Automobile")}
                                    </h3>

                                    <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                                        {tr("Formation complète théorique et pratique pour maîtriser le diagnostic, la réparation et la maintenance des véhicules modernes.")}
                                    </p>

                                </div>

                            </div>

                            <div className='p-6 pt-0 w-full'>

                                <div className='pt-4 border-t border-gray-100 dark:border-gray-800'>

                                    <Link
                                        to='/activites/mecanique'
                                        className='text-emerald-600 dark:text-emerald-400 font-semibold text-sm flex items-center justify-center gap-2 group/link'
                                    >
                                        <span>{tr("En savoir plus sur le programme")}</span>
                                        <FaArrowRight
                                            size={12}
                                            className='transition-transform duration-300 group-hover/link:translate-x-1'
                                        />
                                    </Link>

                                </div>

                            </div>

                        </motion.div>


                        {/* CARTE 2 : LANGUES */}

                        <motion.div
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3 },
                            }}
                            className='bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-shadow flex flex-col justify-between relative overflow-hidden group'
                        >

                            <div className='w-full'>

                                <div className='w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800'>
                                    <motion.img
                                        src={Langue}
                                        alt={tr("Cours de langue")}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className='w-full h-full object-cover'
                                    />
                                </div>

                                <div className='p-6 space-y-3'>

                                    <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors'>
                                        {tr("Cours de Langues (FR / EN)")}
                                    </h3>

                                    <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                                        {tr("Perfectionnez votre communication orale et écrite en francais et en anglai grâce à des modules interactifs adaptés à votre niveau.")}
                                    </p>

                                </div>

                            </div>

                            <div className='p-6 pt-0'>

                                <div className='pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm font-semibold'>

                                    <Link
                                        to='activites/francais'
                                        className='text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-1'
                                    >
                                        <span>{tr("Français")}</span>
                                        <FaArrowRight size={10} />
                                    </Link>

                                    <span className='text-gray-300 dark:text-gray-700'>|</span>

                                    <Link
                                        to='activites/anglais'
                                        className='text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-1'
                                    >
                                        <span>{tr("Anglais")}</span>
                                        <FaArrowRight size={10} />
                                    </Link>

                                </div>

                            </div>

                        </motion.div>


                        {/* CARTE 3 : INFORMATIQUE */}

                        <motion.div
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3 },
                            }}
                            className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-shadow flex flex-col justify-between relative overflow-hidden group"
                        >

                            <div className='w-full'>

                                <div className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">

                                    <motion.img
                                        src={info}
                                        alt={tr("Informatique & Électronique")}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                                <div className="p-6 space-y-3">

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                                        {tr("Informatique & Électronique")}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {tr("Apprenez la bureautique, la maintenance informatique ainsi que les bases fondamentales de l'électronique générale.")}
                                    </p>

                                </div>

                            </div>

                            <div className="p-6 pt-0 w-full">

                                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm font-semibold">

                                    <Link
                                        to="/activites/informatique"
                                        className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-1"
                                    >
                                        <span>{tr("Informatique")}</span>
                                        <FaArrowRight size={10} />
                                    </Link>

                                    <span className="text-gray-300 dark:text-gray-700">|</span>

                                    <Link
                                        to="/activites/electronique"
                                        className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-1"
                                    >
                                        <span>{tr("Électronique")}</span>
                                        <FaArrowRight size={10} />
                                    </Link>

                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                </div>

            </section>


            {/* 3. SECTION CONFECTION & BOUTIQU */}

            <section className="py-20 bg-white dark:bg-gray-900 transition-colors border-t border-gray-100 dark:border-gray-800">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >

                        {/* TEXTE DE PRÉSENTATION */}

                        <motion.div
                            variants={fadeLeft}
                            className="space-y-6"
                        >

                            <motion.div
                                variants={top}
                                className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-semibold"
                            >
                                <span>{tr("Atelier & Sur-mesure")}</span>
                            </motion.div>

                            <motion.h2
                                variants={top}
                                className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight"
                            >
                                {tr("Confection textile, logos et tenues professionnelles")}
                            </motion.h2>

                            <motion.p
                                variants={top}
                                className="text-gray-600 dark:text-gray-400 leading-relaxed"
                            >
                                {tr("Au-delà de nos formations, Hopeness met son savoir-faire au service de vos projets vestimentaires. De la création de logos personnalisés à la confection de t-shirts, polos et costumes sur mesure, nous garantissons une qualité irréprochable.")}
                            </motion.p>


                            {/* AVANTAGES */}

                            <motion.div
                                variants={containerVariants}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
                            >

                                <motion.div
                                    variants={top}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start space-x-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs mt-0.5 shrink-0">
                                        <FaCheckCircle size={18} />
                                    </div>

                                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                        {tr("Confection de Polos & T-shirts")}
                                    </span>
                                </motion.div>


                                <motion.div
                                    variants={top}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start space-x-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs mt-0.5 shrink-0">
                                        <FaCheckCircle size={18} />
                                    </div>

                                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                        {tr("Création de Logos & Badges")}
                                    </span>
                                </motion.div>


                                <motion.div
                                    variants={top}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start space-x-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs mt-0.5 shrink-0">
                                        <FaCheckCircle size={18} />
                                    </div>

                                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                        {tr("Costumes sur mesure")}
                                    </span>
                                </motion.div>


                                <motion.div
                                    variants={top}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start space-x-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs mt-0.5 shrink-0">
                                        <FaCheckCircle size={18} />
                                    </div>

                                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                        {tr("Commandes en gros & particuliers")}
                                    </span>
                                </motion.div>

                            </motion.div>


                            {/* BOUTONS */}

                            <motion.div
                                variants={top}
                                className="pt-4 flex flex-wrap gap-4"
                            >

                                <motion.div
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={buttonVariants}
                                >
                                    <Link
                                        to="/boutique"
                                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md transition inline-block"
                                    >
                                        {tr("Visiter la Boutique")}
                                    </Link>
                                </motion.div>

                                <motion.div
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={buttonVariants}
                                >
                                    <Link
                                        to="/contact"
                                        className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-xl transition inline-block"
                                    >
                                        {tr("Demander un devis")}
                                    </Link>
                                </motion.div>

                            </motion.div>

                        </motion.div>


                        {/* ILLUSTRATION DE L'ATELIER */}

                        <motion.div
                            variants={fadeRight}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.3 },
                            }}
                            className="bg-linear-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-2 rounded-3xl border border-emerald-500/20"
                        >

                            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 text-center space-y-6">

                                <motion.div
                                    variants={imageVariants}
                                    className="w-72 overflow-hidden text-gray-900 rounded-2xl mx-auto flex items-center justify-center text-3xl font-extrabold shadow-lg"
                                >
                                    <motion.img
                                        src={vetement}
                                        alt="vetement"
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 0.5 }}
                                        className='w-full overflow-hidden object-cover'
                                    />
                                </motion.div>

                                <motion.h3
                                    variants={top}
                                    className="text-2xl font-bold text-gray-900 dark:text-white"
                                >
                                    {tr("Exprimez votre style avec Hopeness")}
                                </motion.h3>

                                <motion.p
                                    variants={top}
                                    className="text-sm text-gray-600 dark:text-gray-400"
                                >
                                    {tr("Que ce soit pour une tenue professionnelle, un événement ou une collection de vêtements personnalisés, notre équipe vous accompagne de la conception à la réalisation finale.")}
                                </motion.p>

                            </div>

                        </motion.div>

                    </motion.div>

                </div>

            </section>

        </div>
    );
};

export default Home;
