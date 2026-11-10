
import React from 'react';
import { motion } from 'framer-motion';

import Mec from '../assets/Meca1.webp';
import mecanic from '../assets/mecaniqueAuto.webp';

import { Link } from 'react-router-dom';

import apprendreAuto from '../data/apprendreAuto';
import formationAuto from '../data/formationAuto';

import { FaCheckCircle } from 'react-icons/fa';

import img1 from '../assets/Mecanique.webp';
import img2 from '../assets/Mecanique2.webp';
import img3 from '../assets/Mecanique3.webp';
import img4 from '../assets/Meca.webp';

import { useTranslation } from 'react-i18next';
import { translate as tr } from '../i18n/i18n';


// ========================================
// ANIMATIONS FRAMER MOTION
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
// COMPOSANT TITRE
// ========================================

const SectionTitle = ({ title, subtitle }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeLeft}
        className="relative border-l-4 border-emerald-500 pl-5"
    >
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            {title}
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base dark:text-slate-400">
            {subtitle}
        </p>
    </motion.div>
);


// ========================================
// STYLES DES CARTES
// ========================================

const cardBase =
    'group relative flex h-full flex-col overflow-hidden rounded-2xl ' +
    'border border-slate-200/80 bg-white p-6 ' +
    'shadow-[0_4px_20px_rgba(15,23,42,0.04)] ' +
    'transition-all duration-500 hover:border-emerald-300 ' +
    'hover:shadow-[0_15px_35px_rgba(16,185,129,0.12)] ' +
    'dark:border-slate-700/80 dark:bg-slate-800/80 ' +
    'dark:hover:border-emerald-500/50';

const iconStyle =
    'rounded-xl bg-emerald-100 p-3 text-emerald-700 ' +
    'transition-all duration-300 group-hover:scale-110 ' +
    'dark:bg-emerald-500/20 dark:text-emerald-300';


// ========================================
// PAGE MÉCANIQUE
// ========================================

const Mecanique = () => {

    useTranslation();

    // Galerie : images originales conservées

    const galerie = [
        { src: img1, alt: 'Imgage1' },
        { src: img2, alt: 'Imgage2' },
        { src: img3, alt: 'Imgage3' },
        { src: img4, alt: 'Imgage4' },
    ];

    // Liste des formations

    const formationsListe = [
        "Mécanique automobile (niveau débutant a avancé)",
        "Diagnostic électronique auto",
        "Entretien et réparation des moteurs",
        "Systèmes de freinage, direction et suspension",
        "Climatisation automobile",
    ];

    return (

        <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900">


            {/* =====================================
                HERO
            ===================================== */}

            <section className="relative flex min-h-[45vh] items-center overflow-hidden">

                {/* Image de fond originale */}

                <motion.img
                    src={Mec}
                    alt={tr("Cours Mécanique")}
                    initial={{ scale: 1.12 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                    }}
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-2xl space-y-6"
                    >

                        {/* Badge */}

                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-100 backdrop-blur-sm"
                        >
                            <p>{tr("Cours Mécanique")}</p>
                        </motion.div>


                        {/* Titres et description */}

                        <div className="flex flex-col gap-3">

                            <motion.h1
                                variants={fadeUp}
                                className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
                            >
                                {tr("Mécanique Automobile")}
                            </motion.h1>

                            <motion.h2
                                variants={fadeUp}
                                className="text-lg font-extrabold uppercase tracking-wide text-emerald-300 md:text-xl"
                            >
                                {tr("Apprendre aujourd'hui, réparer demain")}
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className="max-w-xl text-sm leading-relaxed text-slate-200 md:text-base"
                            >
                                {tr("Formez-vous aux métiers de la mécanique automobile et ")}
                                <br />
                                {tr("construisez votre avenir avec nous.")}
                            </motion.p>

                        </div>


                        {/* Bouton inscription */}

                        <motion.div
                            variants={fadeUp}
                            whileHover={{ scale: 1.06, y: -3 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-900/30 transition-colors duration-300 hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
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

            <section className="space-y-16 py-16 transition-colors">


                {/* =====================================
                    CE QUE VOUS ALLEZ APPRENDRE
                ===================================== */}

                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">

                    <SectionTitle
                        title={tr("Ce que vous aller apprendre")}
                        subtitle={tr("Une programmme complet pour tous les niveaux.")}
                    />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={containerVariants}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    >

                        {apprendreAuto.map((item) => (

                            <motion.div
                                key={item.id}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 },
                                }}
                                className={cardBase}
                            >

                                {/* Ligne décorative */}

                                <div className="absolute left-0 top-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />

                                {/* Icônes */}

                                <div className="relative z-10 mb-5">

                                    {item.icon.map(({ Icon, Style }, index) => (

                                        <Icon
                                            key={index}
                                            className={`${Style} ${iconStyle}`}
                                            size={52}
                                        />

                                    ))}

                                </div>

                                {/* Numéro */}

                                <span className="mb-3 text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                                    0{item.id}
                                </span>

                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                    {tr(item.titre)}
                                </h3>

                                <div className="mt-3 h-1 w-10 rounded-full bg-emerald-500 transition-all duration-500 group-hover:w-16" />

                                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    {tr(item.desc)}
                                </p>

                            </motion.div>

                        ))}

                    </motion.div>

                </div>


                {/* =====================================
                    NOS FORMATIONS
                ===================================== */}

                <div className="border-y border-slate-200 bg-white py-16 transition-colors dark:border-slate-800 dark:bg-slate-800/40">

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">


                            {/* Texte de présentation */}

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className="space-y-5"
                            >

                                <motion.div
                                    variants={fadeLeft}
                                    className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400"
                                >
                                    <span>{tr("MECANIQUE")}</span>
                                </motion.div>

                                <motion.h2
                                    variants={fadeUp}
                                    className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl"
                                >
                                    {tr("Nos formations")}
                                </motion.h2>

                                <motion.p
                                    variants={fadeUp}
                                    className="max-w-xl leading-relaxed text-slate-600 dark:text-slate-400"
                                >
                                    {tr("Des parcours adaptés a tous les niveaux, du débutant au professionnel.")}
                                </motion.p>


                                {/* Liste des formations */}

                                <motion.ul
                                    variants={containerVariants}
                                    className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 divide-y divide-slate-200 dark:border-slate-700 dark:bg-slate-800/70 dark:divide-slate-700"
                                >

                                    {formationsListe.map((texte, index) => (

                                        <motion.li
                                            key={texte}
                                            variants={fadeUp}
                                            whileHover={{
                                                x: 5,
                                                transition: { duration: 0.2 },
                                            }}
                                            className="group flex items-center gap-3 px-5 py-4 transition-colors duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-500/5"
                                        >

                                            <FaCheckCircle
                                                size={19}
                                                className="shrink-0 text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:text-emerald-400"
                                            />

                                            <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                                                {tr(texte)}
                                            </span>

                                        </motion.li>

                                    ))}

                                </motion.ul>

                            </motion.div>


                            {/* Illustration de l'atelier : image originale */}

                            <motion.div
                                variants={imageVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                className="relative rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-2"
                            >

                                <div className="overflow-hidden rounded-2xl shadow-lg">

                                    <motion.img
                                        src={mecanic}
                                        alt={tr("Atelier de mécanique automobile")}
                                        loading="lazy"
                                        whileHover={{ scale: 1.06 }}
                                        transition={{ duration: 0.6 }}
                                        className="h-full w-full object-cover"
                                    />

                                </div>

                            </motion.div>

                        </div>

                    </div>

                </div>


                {/* =====================================
                    POURQUOI CHOISIR NOTRE FORMATION
                ===================================== */}

                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">

                    <SectionTitle
                        title={tr("Pourquoi choisir notre formation ?")}
                        subtitle={tr("Une formation pensée pour votre réussite")}
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    >

                        {formationAuto.map((item) => (

                            <motion.div
                                key={item.id}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 },
                                }}
                                className={cardBase}
                            >

                                {/* Ligne décorative */}

                                <div className="absolute left-0 top-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />

                                {/* Icônes */}

                                <div className="relative z-10 mb-5">

                                    {item.icon.map(({ Icon, Style }, index) => (

                                        <Icon
                                            key={index}
                                            className={`${Style} ${iconStyle}`}
                                            size={52}
                                        />

                                    ))}

                                </div>

                                <span className="mb-3 text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                                    0{item.id}
                                </span>

                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                    {tr(item.titre)}
                                </h3>

                                <div className="mt-3 h-1 w-10 rounded-full bg-emerald-500 transition-all duration-500 group-hover:w-16" />

                                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    {tr(item.desc)}
                                </p>

                            </motion.div>

                        ))}

                    </motion.div>

                </div>


                {/* =====================================
                    GALERIE PHOTOS
                ===================================== */}

                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">

                    <SectionTitle
                        title={tr("Notre école en images")}
                        subtitle={tr("Decouvrez notre environnement d'apprentissage.")}
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
                    >

                        {galerie.map((img, index) => (

                            <motion.div
                                key={img.alt}
                                variants={imageVariants}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 },
                                }}
                                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-md dark:border-slate-700 dark:bg-slate-800"
                            >

                                {/* Image originale conservée */}

                                <motion.img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    whileHover={{ scale: 1.12 }}
                                    transition={{
                                        duration: 0.7,
                                        ease: "easeOut",
                                    }}
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                                <span className="absolute right-4 top-4 text-4xl font-black text-white/70 transition-all duration-500 group-hover:scale-110 group-hover:text-emerald-400">
                                    0{index + 1}
                                </span>

                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />

                            </motion.div>

                        ))}

                    </motion.div>

                </div>

            </section>

        </div>
    );
};

export default Mecanique;
