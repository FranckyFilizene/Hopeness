
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

const cardBase =
    'group relative flex h-full flex-col overflow-hidden rounded-2xl ' +
    'border border-slate-200/80 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)] ' +
    'transition-all duration-500 hover:border-emerald-300 ' +
    'hover:shadow-[0_15px_35px_rgba(16,185,129,0.12)] ' +
    'dark:border-slate-700/80 dark:bg-slate-800/80 ' +
    'dark:hover:border-emerald-500/50';

// ========================================
// PAGE ANGLAIS
// ========================================

const Anglais = () => {
    useTranslation();

    const methode = [
        {
            id: 1,
            icon: [{ Icon: GoVerified, Style: 'text-white' }],
            titre: 'Cours en présentiel'
        },
        {
            id: 2,
            icon: [{ Icon: GoVerified, Style: 'text-white' }],
            titre: 'Supports pédagogiques modernes'
        },
        {
            id: 3,
            icon: [{ Icon: GoVerified, Style: 'text-white' }],
            titre: 'Mise en situation réelle'
        },
        {
            id: 4,
            icon: [{ Icon: GoVerified, Style: 'text-white' }],
            titre: 'Suivi personnalisé'
        },
        {
            id: 5,
            icon: [{ Icon: GoVerified, Style: 'text-white' }],
            titre: 'Evaluation regulières'
        },
    ];

    const galerie = [
        { src: img1, alt: 'Imgage1' },
        { src: img2, alt: 'Imgage2' },
        { src: img3, alt: 'Imgage3' },
        { src: img4, alt: 'Imgage4' },
    ];

    return (
        <div className="min-h-screen relative bg-slate-50 dark:bg-slate-900">

            {/*HERO */}

            <section className="relative flex items-center overflow-hidden min-h-[45vh]">

                <motion.img
                    src={Ifr}
                    alt={tr("Cours de langue")}
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

                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-100 backdrop-blur-sm"
                        >
                            <p>{tr("Cours de langue")}</p>
                        </motion.div>

                        <div className="flex flex-col gap-3">

                            <motion.h1
                                variants={fadeUp}
                                className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
                            >
                                {tr("Cours d'Anglais")}
                            </motion.h1>

                            <motion.h2
                                variants={fadeUp}
                                className="text-lg font-medium text-emerald-200 md:text-xl"
                            >
                                {tr("Apprenez l'anglais, construire votre futur!")}
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className="max-w-xl text-sm leading-relaxed text-slate-200 md:text-base"
                            >
                                {tr("L'anglais est une langue de communication ,de culture et d'opportunités. ")}
                                <br />
                                {tr("Notre centre")}
                                <span className="font-extrabold text-emerald-400"> HOPENESS </span>
                                {tr("vous propose une formation complète et pratique ")}
                                <br />
                                {tr("pour maitriser l'anglais, a l'oral comme a l'écrit, quel que soit votre niveau.")}
                            </motion.p>

                        </div>

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

            {/*CONTENU PRINCIPAL*/}

            <section className="space-y-16 py-16 transition-colors">

                {/*POURQUOI CHOISIR NOTRE FORMATION */}

                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">

                    <SectionTitle
                        title={tr("Pourquoi choisir notre formation ?")}
                        subtitle={tr("Une formation pensée pour votre réussite")}
                    />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={containerVariants}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {formation.map((item, index) => (

                            <motion.div
                                key={item.id}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut"
                                    },
                                }}
                                className={cardBase}
                            >

                                {/* Décoration supérieure */}

                                <div className="absolute left-0 top-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />

                                {/* Icône */}

                                <div className="mb-6 flex items-center justify-between">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 shadow-sm transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-emerald-600 dark:bg-emerald-500/10 dark:group-hover:bg-emerald-500">

                                        {item.icon.map(({ Icon }, index) => (
                                            <Icon
                                                key={index}
                                                size={27}
                                                className="text-emerald-600 transition-colors duration-300 group-hover:text-white dark:text-emerald-400 dark:group-hover:text-white"
                                            />
                                        ))}

                                    </div>

                                    <span className="text-3xl font-extrabold text-slate-100 transition-colors duration-300 group-hover:text-emerald-100 dark:text-slate-700 dark:group-hover:text-emerald-900/40">
                                        0{index + 1}
                                    </span>

                                </div>

                                {/* Contenu */}

                                <div className="flex flex-1 flex-col">

                                    <h3 className="text-lg font-bold leading-snug text-slate-800 transition-colors duration-300 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400">
                                        {tr(item.titre)}
                                    </h3>

                                    <div className="mt-4 h-1 w-10 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-16" />

                                    <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                                        {tr(item.desc)}
                                    </p>

                                </div>

                            </motion.div>

                        ))}

                    </motion.div>

                </div>

                {/* CE QUE VOUS ALLEZ APPRENDRE*/}

                <div className="bg-white py-16 dark:bg-slate-800/40">

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

                            {apprendref.map((item, index) => (

                                <motion.div
                                    key={item.id}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -8,
                                        transition: {
                                            duration: 0.3,
                                            ease: "easeOut"
                                        },
                                    }}
                                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-[0_15px_35px_rgba(16,185,129,0.10)] dark:border-slate-700 dark:bg-slate-800/80 dark:hover:border-emerald-500/50"
                                >

                                    {/* Numéro décoratif */}

                                    <span className="absolute -right-2 -top-5 text-7xl font-black text-slate-50 transition-colors duration-300 group-hover:text-emerald-50 dark:text-slate-700/30 dark:group-hover:text-emerald-900/20">
                                        0{index + 1}
                                    </span>

                                    {/* Icône */}

                                    <div className="relative z-10 mb-6">

                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 shadow-lg shadow-emerald-600/20 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 dark:bg-emerald-500">

                                            {item.icon.map(({ Icon }, index) => (
                                                <Icon
                                                    key={index}
                                                    size={27}
                                                    className="text-white"
                                                />
                                            ))}

                                        </div>

                                    </div>

                                    {/* Titre */}

                                    <h3 className="relative z-10 text-lg font-bold leading-snug text-slate-800 transition-colors duration-300 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400">
                                        {tr(item.titre)}
                                    </h3>

                                    {/* Ligne décorative */}

                                    <div className="my-4 h-1 w-10 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-16" />

                                    {/* Liste des apprentissages */}

                                    <ul className="relative z-10 mt-1 space-y-3">

                                        {[item.desc1, item.desc2, item.desc3].map((desc, i) => (

                                            <li
                                                key={i}
                                                className="flex items-start gap-2.5"
                                            >

                                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                                                    <MdKeyboardArrowRight size={16} />
                                                </span>

                                                <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                                                    {tr(desc)}
                                                </p>

                                            </li>

                                        ))}

                                    </ul>

                                    {/* Décoration inférieure */}

                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />

                                </motion.div>

                            ))}

                        </motion.div>

                    </div>

                </div>


                {/* =====================================
    NIVEAUX ET MÉTHODE
===================================== */}

                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">

                    <SectionTitle
                        title={tr("Les niveaux proposés")}
                        subtitle={tr("Du débutant a l'avancé, nous avons un parcours adapté a vos besoins..")}
                    />

                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

                        {/* =====================================
            CARTES DES NIVEAUX
        ===================================== */}

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={containerVariants}
                            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2"
                        >

                            {niveaux.map((item, index) => (

                                <motion.div
                                    key={item.id}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -8,
                                        transition: {
                                            duration: 0.3,
                                            ease: "easeOut"
                                        }
                                    }}
                                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-[0_15px_35px_rgba(16,185,129,0.12)] dark:border-slate-700 dark:bg-slate-800/80 dark:hover:border-emerald-500/50"
                                >

                                    {/* Barre supérieure */}

                                    <div className="absolute left-0 top-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />

                                    {/* En-tête */}

                                    <div className="mb-6 flex items-center justify-between">

                                        <motion.div
                                            whileHover={{
                                                rotate: 5,
                                                scale: 1.1
                                            }}
                                            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-2xl font-extrabold text-white shadow-lg shadow-emerald-600/20 transition-colors duration-300 group-hover:bg-emerald-500 dark:bg-emerald-500 dark:text-slate-900"
                                        >
                                            {item.niv}
                                        </motion.div>

                                        <span className="text-4xl font-black text-slate-100 transition-colors duration-300 group-hover:text-emerald-100 dark:text-slate-700/50 dark:group-hover:text-emerald-900/30">
                                            0{index + 1}
                                        </span>

                                    </div>

                                    {/* Contenu */}

                                    <div className="flex flex-1 flex-col">

                                        <h3 className="text-xl font-bold leading-snug text-slate-800 transition-colors duration-300 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400">
                                            {tr(item.titre)}
                                        </h3>

                                        {/* Ligne décorative */}

                                        <div className="my-4 h-1 w-10 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-16" />

                                        <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
                                            {tr(item.desc)}
                                        </p>

                                    </div>

                                    {/* Décoration inférieure */}

                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />

                                </motion.div>

                            ))}

                        </motion.div>

                        {/* =====================================
            NOTRE MÉTHODE
        ===================================== */}

                        <motion.aside
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeRight}
                            className="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900 shadow-xl dark:border-slate-700 lg:sticky lg:top-24"
                        >

                            {/* En-tête */}

                            <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-emerald-700 to-emerald-900 px-6 py-6">

                                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border-[20px] border-white/10" />

                                <div className="relative z-10">

                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                                        HOPENESS
                                    </span>

                                    <h2 className="mt-2 text-2xl font-extrabold text-white">
                                        {tr("Notre méthode")}
                                    </h2>

                                    <p className="mt-2 text-sm leading-relaxed text-emerald-100">
                                        {tr("Une approche moderne et efficace")}
                                    </p>

                                </div>

                            </div>

                            {/* Liste des méthodes */}

                            <motion.ul
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                                className="divide-y divide-white/10 px-6 py-2"
                            >

                                {methode.map((item, index) => (

                                    <motion.li
                                        key={item.id}
                                        variants={fadeUp}
                                        whileHover={{
                                            x: 5,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="group flex items-center gap-3 py-4"
                                    >

                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 transition-all duration-300 group-hover:bg-emerald-600">

                                            {item.icon.map(({ Icon }, index) => (
                                                <Icon
                                                    key={index}
                                                    className="text-emerald-400 transition-colors duration-300 group-hover:text-white"
                                                    size={19}
                                                />
                                            ))}

                                        </div>

                                        <div className="flex-1">

                                            <p className="text-sm font-semibold leading-relaxed text-slate-100">
                                                {tr(item.titre)}
                                            </p>

                                        </div>

                                    </motion.li>

                                ))}

                            </motion.ul>

                        </motion.aside>

                    </div>

                </div>


                {/*GALERIE PHOTOS*/}

                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">

                    <SectionTitle
                        title={tr("Quelques images de nos cours")}
                        subtitle={tr("Decouvrez notre environnement d'apprentissage.")}
                    />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={containerVariants}
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                    >

                        {galerie.map((img) => (

                            <motion.div
                                key={img.alt}
                                variants={imageVariants}
                                whileHover={{
                                    y: -6,
                                    transition: { duration: 0.3 },
                                }}
                                className="group aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 shadow-sm dark:border-slate-700"
                            >

                                <motion.img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className="h-full w-full object-cover"
                                />

                            </motion.div>

                        ))}

                    </motion.div>

                </div>

            </section>

        </div>
    );
};

export default Anglais;
