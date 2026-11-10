
import React from 'react';
import { BiStar } from 'react-icons/bi';
import abouts from '../data/about.js';
import { FaHandshake } from 'react-icons/fa6';
import { GrGroup } from 'react-icons/gr';
import { GiIdea } from 'react-icons/gi';
import cfp1 from '../assets/CPF.webp';
import cfp2 from '../assets/CFP2.webp';
import cfp3 from '../assets/CFP3.webp';
import { useTranslation } from 'react-i18next';
import { translate as tr } from '../i18n/i18n';
import { motion } from 'framer-motion';

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
        y: 35,
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
        x: -40,
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

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.96,
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
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

// ========================================
// COMPOSANTS RÉUTILISABLES
// ========================================

const cardBase =
    "group flex h-full gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm " +
    "transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl " +
    "dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-emerald-500/60";

const iconStyle =
    "rounded-xl bg-emerald-100 p-3 text-emerald-700 transition-all duration-300 " +
    "group-hover:bg-emerald-600 group-hover:text-white " +
    "dark:bg-emerald-500/20 dark:text-emerald-300 dark:group-hover:bg-emerald-500 dark:group-hover:text-white";

// ========================================
// PAGE ABOUT
// ========================================

const About = () => {
    useTranslation();

    const galerie = [
        { src: cfp1, alt: 'Image 1' },
        { src: cfp2, alt: 'Image 2' },
        { src: cfp3, alt: 'Image 3' },
    ];

    const valeurs = [
        {
            id: 1,
            Icon: BiStar,
            titre: 'Excellence',
            description: (
                <>
                    {tr('Nous vision la qualité dans tout ce que nous ')}
                    <br />
                    {tr('faisons.')}
                </>
            ),
        },
        {
            id: 2,
            Icon: FaHandshake,
            titre: 'Engagement',
            description: (
                <>
                    {tr("Nous croyons en l'effort et à la réussite de ")}
                    <br />
                    {tr('chacun.')}
                </>
            ),
        },
        {
            id: 3,
            Icon: GiIdea,
            titre: 'Innovation',
            description: (
                <>
                    {tr('Nous adaptons des méthodes modernes et ')}
                    <br />
                    {tr('adaptées.')}
                </>
            ),
        },
        {
            id: 4,
            Icon: GrGroup,
            titre: 'Solidarité',
            description: (
                <>
                    {tr('Nous avançons, pour un impact ')}
                    <br />
                    {tr('durable.')}
                </>
            ),
        },
    ];

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-900">

            {/* =====================================
                HERO
            ===================================== */}

            <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800">

                {/* Décoration de fond */}

                <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
                <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-emerald-600/10 blur-3xl" />

                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-emerald-600/10 to-transparent" />

                <div className="relative mx-auto max-w-7xl px-20 py-10 sm:px-6 md:py-16 lg:px-8">

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-3xl space-y-6"
                    >

                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm"
                        >
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            {tr('A propos de')}
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
                        >
                            HOPENESS<span className="text-emerald-500">.</span>
                        </motion.h1>

                        <motion.h2
                            variants={fadeUp}
                            className="text-xl font-semibold text-emerald-300 md:text-2xl"
                        >
                            {tr('Notre histoire, notre engagement.')}
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="max-w-2xl text-sm leading-8 text-slate-300 md:text-base"
                        >
                            {tr('HOPENESS est une centre de formation professionnelle a Madagascar, ')}
                            <br className="hidden sm:block" />
                            {tr('qui accompagne les apprenants dans le développement de leurs compétences ')}
                            <br className="hidden sm:block" />
                            {tr('pour un avenir meilleur.')}
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="flex items-center gap-3 pt-2"
                        >
                            <span className="h-1 w-12 rounded-full bg-emerald-500" />
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                {tr('Hopeness — Centre de formation')}
                            </span>
                        </motion.div>

                    </motion.div>
                </div>

                {/* Séparation décorative */}

                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-70" />

            </section>

            {/* =====================================
                CONTENU PRINCIPAL
            ===================================== */}

            <section className="space-y-20 py-16 md:py-20">

                {/* PRÉSENTATION */}

                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">

                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="border-l-4 border-emerald-600 pl-4 dark:border-emerald-400"
                    >
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
                            {tr("Qui sommes-nous ?")}
                        </h2>

                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                            {tr("Découvrez notre identité et notre engagement envers la formation.")}
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={containerVariants}
                        className="grid grid-cols-1 gap-6 md:grid-cols-3"
                    >

                        {abouts.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 },
                                }}
                                className={cardBase}
                            >

                                {item.icon.map(({ Icon, Style }, index) => (
                                    <div key={index} className="shrink-0">
                                        <Icon
                                            className={`${Style} ${iconStyle}`}
                                            size={56}
                                        />
                                    </div>
                                ))}

                                <div className="min-w-0 flex-1">

                                    <h3 className="border-b-2 border-emerald-600 pb-3 text-lg font-bold text-slate-900 dark:border-emerald-400 dark:text-white">
                                        {tr(item.titre)}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                        {tr(item.desc)}
                                    </p>

                                </div>

                            </motion.div>
                        ))}

                    </motion.div>
                </div>

                {/* =====================================
                    NOS VALEURS
                ===================================== */}

                <div className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-800/40">

                    <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">

                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="border-l-4 border-emerald-600 pl-4 dark:border-emerald-400"
                        >
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
                                {tr("Nos valeurs")}
                            </h2>

                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                                {tr("Les principes qui guident chacune de nos actions.")}
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={containerVariants}
                            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                        >

                            {valeurs.map(({ id, Icon, titre, description }) => (
                                <motion.div
                                    key={id}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -7,
                                        transition: { duration: 0.3 },
                                    }}
                                    className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center shadow-sm transition-all duration-300 hover:border-emerald-300 hover:bg-white hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-emerald-500/60 dark:hover:bg-slate-800"
                                >

                                    <div className="mb-5 rounded-2xl bg-emerald-100 p-4 text-emerald-700 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-500/20 dark:text-emerald-300 dark:group-hover:bg-emerald-500">
                                        <Icon size={30} />
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                        {tr(titre)}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                        {description}
                                    </p>

                                </motion.div>
                            ))}

                        </motion.div>

                    </div>
                </div>

                {/* =====================================
                    GALERIE
                ===================================== */}

                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">

                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="border-l-4 border-emerald-600 pl-4 dark:border-emerald-400"
                    >
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
                            {tr("Notre centre en images")}
                        </h2>

                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                            {tr("Découvrez notre environnement et notre cadre de formation.")}
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={containerVariants}
                        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    >

                        {galerie.map((img) => (
                            <motion.div
                                key={img.alt}
                                variants={imageVariants}
                                whileHover={{
                                    y: -7,
                                    transition: { duration: 0.3 },
                                }}
                                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800"
                            >

                                <motion.img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="h-full w-full object-cover"
                                />

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            </motion.div>
                        ))}

                    </motion.div>
                </div>

            </section>
        </div>
    );
};

export default About;
