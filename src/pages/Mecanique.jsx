
import React from 'react';
import { motion } from 'framer-motion';
import Mec from '../assets/Meca1.webp';
import { Link } from 'react-router-dom';
import mecanic from '../assets/mecaniqueAuto.webp';
import apprendreAuto from '../data/apprendreAuto';
import { FaCheckCircle } from 'react-icons/fa';
import formationAuto from '../data/formationAuto';
import img1 from '../assets/Mecanique.webp';
import img2 from '../assets/Mecanique2.webp';
import img3 from '../assets/Mecanique3.webp';
import img4 from '../assets/Meca.webp';
import { useTranslation } from 'react-i18next';
import { translate as tr } from '../i18n/i18n';

/* ---------- Animations Framer Motion ---------- */

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

const fadeRight = {
    hidden: {
        opacity: 0,
        x: 40,
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
            duration: 0.6,
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

/* ---------- Composant titre ---------- */

const SectionTitle = ({ title, subtitle }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
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

const iconStyle =
    'rounded-xl bg-red-100 p-3 text-red-600 dark:bg-red-500/20 dark:text-red-300';

const Mecanique = () => {
    useTranslation();

    const galerie = [
        { src: img1, alt: 'Imgage1' },
        { src: img2, alt: 'Imgage2' },
        { src: img3, alt: 'Imgage3' },
        { src: img4, alt: 'Imgage4' },
    ];

    const formationsListe = [
        "Mécanique automobile (niveau débutant a avancé)",
        "Diagnostic électronique auto",
        "Entretien et réparation des moteurs",
        "Systèmes de freinage, direction et suspension",
        "Climatisation automobile",
    ];

    return (
        <div className='min-h-screen relative bg-slate-50 dark:bg-slate-900'>

            {/* ===================== HERO ===================== */}

            <section className='relative flex items-center overflow-hidden min-h-[45vh]'>

                <motion.img
                    src={Mec}
                    alt={tr("Cours Mécanique")}
                    initial={{ scale: 1.12 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className='absolute inset-0 z-0 h-full w-full object-cover'
                />

                <div className='absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30'></div>

                <div className='relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>

                    <motion.div
                        className='max-w-2xl space-y-6'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >

                        <motion.div
                            variants={fadeUp}
                            className='inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-100 backdrop-blur-sm'
                        >
                            <p>{tr("Cours Mécanique")}</p>
                        </motion.div>

                        <div className='flex flex-col gap-3'>

                            <motion.h1
                                variants={fadeUp}
                                className='text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl'
                            >
                                {tr("Mécanique Automobile")}
                            </motion.h1>

                            <motion.h2
                                variants={fadeUp}
                                className='text-lg font-extrabold uppercase tracking-wide text-red-400 md:text-xl'
                            >
                                {tr("Apprendre aujourd'hui, réparer demain")}
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className='max-w-xl text-sm leading-relaxed text-slate-200 md:text-base'
                            >
                                {tr("Formez-vous aux métiers de la mécanique automobile et ")}<br />
                                {tr("construisez votre avenir avec nous.")}
                            </motion.p>

                        </div>

                        <motion.div variants={fadeUp}>
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

            {/* ===================== CONTENU ===================== */}

            {/* ---- Ce que vous allez apprendre ---- */}

            <section className='py-16 transition-colors'>

                <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>

                    <SectionTitle
                        title={tr("Ce que vous aller apprendre")}
                        subtitle={tr("Une programmme complet pour tous les niveaux.")}
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'
                    >
                        {apprendreAuto.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.25 },
                                }}
                                className={cardBase}
                            >
                                <div className='mb-5'>
                                    {item.icon.map(({ Icon, Style }, index) => (
                                        <Icon
                                            key={index}
                                            className={`${Style} ${iconStyle}`}
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
            </section>

            {/* ---- Nos formations ---- */}

            <section className='border-y border-slate-200 bg-white py-16 transition-colors dark:border-slate-800 dark:bg-slate-800/40'>

                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

                    <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>

                        {/* Texte de présentation */}

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className='space-y-5'
                        >

                            <motion.div
                                variants={fadeLeft}
                                className='inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400'
                            >
                                <span>{tr("MECANIQUE")}</span>
                            </motion.div>

                            <motion.h2
                                variants={fadeUp}
                                className='text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl'
                            >
                                {tr("Nos formations")}
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                className='max-w-xl leading-relaxed text-slate-600 dark:text-slate-400'
                            >
                                {tr("Des parcours adaptés a tous les niveaux, du débutant au professionnel.")}
                            </motion.p>

                            <motion.ul
                                variants={containerVariants}
                                className='divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-800/70'
                            >
                                {formationsListe.map((texte) => (
                                    <motion.li
                                        key={texte}
                                        variants={fadeUp}
                                        className='flex items-center gap-3 px-5 py-3.5'
                                    >
                                        <FaCheckCircle
                                            size={18}
                                            className='shrink-0 text-emerald-600 dark:text-emerald-400'
                                        />

                                        <span className='text-sm font-medium text-slate-800 dark:text-slate-200'>
                                            {tr(texte)}
                                        </span>
                                    </motion.li>
                                ))}
                            </motion.ul>

                        </motion.div>

                        {/* Illustration de l'atelier */}

                        <motion.div
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                            className='rounded-3xl border border-emerald-500/20 bg-linear-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-2'
                        >
                            <div className='overflow-hidden rounded-2xl shadow-lg'>
                                <motion.img
                                    src={mecanic}
                                    alt={tr("Atelier de mécanique automobile")}
                                    loading='lazy'
                                    whileHover={{ scale: 1.06 }}
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
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'
                    >
                        {formationAuto.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.25 },
                                }}
                                className={cardBase}
                            >
                                <div className='mb-5'>
                                    {item.icon.map(({ Icon, Style }, index) => (
                                        <Icon
                                            key={index}
                                            className={`${Style} ${iconStyle}`}
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

                {/* Galerie */}

                <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>

                    <SectionTitle
                        title={tr("Notre école en images")}
                        subtitle={tr("Decouvrez notre environnement d'apprentissage.")}
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'
                    >
                        {galerie.map((img) => (
                            <motion.div
                                key={img.alt}
                                variants={imageVariants}
                                whileHover={{
                                    scale: 1.04,
                                    transition: { duration: 0.3 },
                                }}
                                className='group aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 shadow-sm dark:border-slate-700'
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading='lazy'
                                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Mecanique;
