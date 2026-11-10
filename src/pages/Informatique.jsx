
import React from 'react';
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoVerified } from 'react-icons/go';
import { useTranslation } from 'react-i18next';
import { translate as tr } from '../i18n/i18n';
import { motion } from 'framer-motion';

import Ifor from "../assets/HeroI.webp";
import img1 from "../assets/info1.webp";
import img2 from "../assets/info6.webp";
import img3 from "../assets/info4.webp";
import img4 from "../assets/info5.webp";

import formationInfo from "../data/formationInfo";
import parcoursInfos from "../data/parcoursInfos";

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
// COMPOSANTS RÉUTILISABLES
// ========================================

const SectionTitle = ({ title, subtitle }) => (
    <motion.div
        variants={fadeLeft}
        className="border-l-4 border-emerald-600 dark:border-emerald-400 pl-4"
    >
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
            {title}
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 md:text-base">
            {subtitle}
        </p>
    </motion.div>
);

const cardBase =
    "flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm " +
    "transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg " +
    "dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-emerald-500/60";

// ========================================
// PAGE INFORMATIQUE
// ========================================

const Informatique = () => {
    useTranslation();

    const methode = [
        { id: 1, titre: 'Cours théorique et pratique' },
        { id: 2, titre: 'Projets concrète' },
        { id: 3, titre: 'Encadrement par des professionnels' },
        { id: 4, titre: 'Accés a des ressources numériques' },
        { id: 5, titre: 'Suivi et évaluation regulières' },
    ];

    const galerie = [
        { src: img1, alt: 'Image 1' },
        { src: img2, alt: 'Image 2' },
        { src: img3, alt: 'Image 3' },
        { src: img4, alt: 'Image 4' },
    ];

    return (
        <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900">

            {/* =====================================
                HERO
            ===================================== */}

            <section className="relative flex min-h-[45vh] items-center overflow-hidden">

                <motion.img
                    src={Ifor}
                    alt={tr("Cours d'Informatique")}
                    initial={{ scale: 1.12 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                    }}
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/75 to-slate-900/35" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-2xl space-y-6"
                    >

                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-100 backdrop-blur-sm"
                        >
                            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />
                            {tr("Cours Informatique")}
                        </motion.div>

                        <div className="space-y-3">

                            <motion.h1
                                variants={fadeUp}
                                className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
                            >
                                {tr("Cours d'Informatique")}
                            </motion.h1>

                            <motion.h2
                                variants={fadeUp}
                                className="text-lg font-semibold text-emerald-300 md:text-xl"
                            >
                                {tr("Maitrisez les outils d'aujoud'hui, construisez le métier de demain !")}
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className="max-w-xl text-sm leading-relaxed text-slate-200 md:text-base"
                            >
                                {tr("Chez ")}
                                <span className="font-extrabold text-emerald-400">HOPENESS</span>
                                {tr(", nous vous formons aux compétences numériques")}
                                <br />
                                {tr("indispensable pour réussir dans un monde connecté. Que vous soyez ")}
                                <br />
                                {tr("Débutant ou souhaitiez vous perfectionner, nos formations s'adaptent ")}
                                <br />
                                {tr("a votre niveau et a vos objectifs.")}
                            </motion.p>

                        </div>

                        <motion.div
                            variants={fadeUp}
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 font-semibold text-white shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:bg-emerald-500"
                            >
                                {tr("Inscrivez-vous")}
                                <MdKeyboardArrowRight size={22} />
                            </Link>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* =====================================
                CONTENU PRINCIPAL
            ===================================== */}

            <section className="space-y-20 py-16 md:py-20">

                {/* POURQUOI CHOISIR NOTRE FORMATION */}

                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">

                    <SectionTitle
                        title={tr("Pourquoi choisir notre formation ?")}
                        subtitle={tr("Une formation complète, pratique et orientée vers l'employabilité.")}
                    />

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={containerVariants}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    >

                        {formationInfo.map((item) => (
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

                                <div className="mb-5 flex items-center gap-3">
                                    {item.icon.map(({ Icon }, index) => (
                                        <div
                                            key={index}
                                            className="rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300"
                                        >
                                            <Icon size={28} />
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    {tr(item.titre)}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    {tr(item.desc)}
                                </p>

                            </motion.div>
                        ))}

                    </motion.div>
                </div>

                {/* PARCOURS DE FORMATION ET MÉTHODE */}

                <div className="bg-white py-16 dark:bg-slate-800/40">

                    <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">

                        <SectionTitle
                            title={tr("Nos parcours de formation")}
                            subtitle={tr("Une formation adaptées a tous les niveaux du debutant a l'avancé.")}
                        />

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={containerVariants}
                            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                        >

                            {parcoursInfos.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.3 },
                                    }}
                                    className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-emerald-500/60"
                                >

                                    <div className="aspect-[16/10] overflow-hidden">
                                        <motion.img
                                            src={item.image}
                                            alt={tr("Bureautique")}
                                            loading="lazy"
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 0.5 }}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col p-6">

                                        <h3 className="text-lg font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                                            {tr(item.titre)}
                                        </h3>

                                        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">

                                            {[item.desc1, item.desc2, item.desc3, item.desc4].map((desc, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <MdKeyboardArrowRight
                                                        className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                                                        size={20}
                                                    />
                                                    <p>{tr(desc)}</p>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>

                                </motion.div>
                            ))}

                            {/* NOTRE MÉTHODE */}

                            <motion.aside
                                variants={fadeRight}
                                className="flex h-full flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-xl dark:border dark:border-slate-700"
                            >

                                <div className="border-b border-white/10 bg-emerald-700 px-6 py-6">
                                    <h2 className="text-xl font-bold text-white">
                                        {tr("Notre méthode")}
                                    </h2>

                                    <p className="mt-2 text-sm text-emerald-100">
                                        {tr("Une approche moderne et efficace")}
                                    </p>
                                </div>

                                <motion.ul
                                    variants={containerVariants}
                                    className="flex-1 divide-y divide-white/10 px-6 py-2"
                                >

                                    {methode.map((item) => (
                                        <motion.li
                                            key={item.id}
                                            variants={fadeUp}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-3 py-4"
                                        >

                                            <div className="shrink-0 rounded-full bg-emerald-600 p-2 shadow-md shadow-emerald-950/30">
                                                <GoVerified className="text-white" size={17} />
                                            </div>

                                            <p className="text-sm font-medium text-slate-100">
                                                {tr(item.titre)}
                                            </p>

                                        </motion.li>
                                    ))}

                                </motion.ul>

                            </motion.aside>

                        </motion.div>
                    </div>
                </div>

                {/* GALERIE */}

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
                        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
                    >

                        {galerie.map((img) => (
                            <motion.div
                                key={img.alt}
                                variants={imageVariants}
                                whileHover={{
                                    y: -6,
                                    transition: { duration: 0.3 },
                                }}
                                className="group aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800"
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

export default Informatique;
