
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { MdLocationOn } from "react-icons/md";

import {
  FaAward,
  FaRulerCombined,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

import HeroCostard from "../assets/HeroCostard.webp";
import Costard1 from "../assets/Costard1.webp";
import Costard2 from "../assets/Costard2.webp";
import basket2 from "../assets/Basket2.webp";
import basket3 from "../assets/basket3.webp";
import shirt1 from "../assets/shirtRose.webp";
import shirt2 from "../assets/shirtGrenat.webp";
import Polo2 from "../assets/polo2.webp";
import Polo1 from "../assets/polo1.webp";
import basket from "../assets/Herobasket.webp";

import { translate as tr } from "../i18n/i18n";


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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.95,
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


const categories = [
  {
    nom: "Costards",
    texte: "Élégance et raffinement",
    image: Costard1,
  },
  {
    nom: "T-shirts",
    texte: "Confort et style",
    image: shirt2,
  },
  {
    nom: "Polos",
    texte: "Chic et décontracté",
    image: Polo1,
  },
  {
    nom: "Sneakers & Baskets",
    texte: "Le style à chaque pas",
    image: basket3,
  },
];

const phares = [
  { nom: "Costard classique", image: Costard2 },
  { nom: "T-shirt premium", image: shirt1 },
  { nom: "Polo élégant", image: Polo2 },
  { nom: "Sneakers tendance", image: basket2 },
];

const atouts = [
  {
    icon: FaAward,
    titre: "Produits de qualité",
    texte: "Des articles soigneusement sélectionnés",
  },
  {
    icon: FaRulerCombined,
    titre: "Toutes les tailles",
    texte: "Des modèles pour hommes et femmes",
  },
  {
    icon: FaHeadset,
    titre: "Service client",
    texte: "Une équipe toujours à votre écoute",
  },
  {
    icon: MdLocationOn,
    titre: "Boutique à Toliara",
    texte: "Retrouvez-nous à Mahavatse II",
  },
];

const Boutique = () => {
  useTranslation();

  return (
    <div className="overflow-hidden bg-white text-slate-900 dark:bg-slate-900 dark:text-white">

      {/*HERO*/}

      <section className="relative overflow-hidden bg-emerald-950">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-800/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">

          {/* HERO TEXT */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-700 bg-emerald-900/60 px-4 py-2 text-xs font-semibold tracking-widest text-emerald-300">

              <span className="h-2 w-2 rounded-full bg-red-400" />

              {tr("ÉLÉGANCE · STYLE · QUALITÉ")}

            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

              {tr("Votre style,")}

              <br />

              <span className="text-emerald-400">
                {tr("notre passion.")}
              </span>

            </h1>

            <div className="my-6 h-1 w-16 rounded-full bg-red-500" />

            <p className="max-w-lg text-base leading-8 text-emerald-100/80 sm:text-lg">

              {tr(
                "Découvrez notre collection de costards, t-shirts, polos et baskets. Des articles sélectionnés pour allier élégance, confort et tendance."
              )}

            </p>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-emerald-100/80">

              {["Qualité", "Confort", "Style"].map((item) => (

                <span
                  key={item}
                  className="flex items-center gap-2"
                >
                  <FaCheckCircle className="text-emerald-400" />
                  {tr(item)}
                </span>

              ))}

            </div>

          </motion.div>


          {/* HERO IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >

            <div className="absolute -inset-3 rounded-3xl border border-emerald-500/20" />

            <motion.img
              src={HeroCostard}
              alt={tr("Collection de costards")}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative h-80 w-full rounded-2xl object-cover shadow-2xl shadow-black/40 sm:h-96 lg:h-[470px]"
            />

            <div className="absolute -bottom-5 -left-3 rounded-xl border border-white/10 bg-white p-4 shadow-xl dark:bg-slate-900 sm:-left-6">

              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {tr("Votre boutique")}
              </p>

              <p className="mt-1 font-bold text-emerald-800 dark:text-emerald-400">
                {tr("Style & Élégance")}
              </p>

            </div>

          </motion.div>

        </div>
      </section>


      {/* ================= CATEGORIES ================= */}

      <section
        id="categories"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 text-center"
        >

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
            {tr("Nos collections")}
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-emerald-950 dark:text-white sm:text-4xl">
            {tr("Explorez nos catégories")}
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
            {tr("Découvrez une sélection d'articles pour compléter votre style au quotidien.")}
          </p>

        </motion.div>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >

          {categories.map((c) => (

            <motion.article
              key={c.nom}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/50 p-3 transition-colors duration-300 hover:border-emerald-300 hover:bg-white hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-800"
            >

              <div className="flex h-36 items-center justify-center overflow-hidden rounded-xl bg-white sm:h-48 dark:bg-slate-700">

                <motion.img
                  src={c.image}
                  alt={tr(c.nom)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full object-contain p-3 drop-shadow-md"
                />

              </div>

              <div className="px-2 pb-2 pt-4">

                <h3 className="font-bold text-emerald-950 dark:text-emerald-300">
                  {tr(c.nom)}
                </h3>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {tr(c.texte)}
                </p>

              </div>

            </motion.article>

          ))}

        </motion.div>

      </section>


      {/* ================= PRODUITS PHARES ================= */}

      <section className="bg-slate-50 py-16 dark:bg-slate-800/50">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              {tr("Notre sélection")}
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-emerald-950 dark:text-white">
              {tr("Nos produits phares")}
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {tr("Une sélection de nos articles incontournables.")}
            </p>

          </motion.div>


          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
          >

            {phares.map((p) => (

              <motion.article
                key={p.nom}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
              >

                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-white p-3 sm:h-60 dark:bg-slate-800">

                  <motion.img
                    src={p.image}
                    alt={tr(p.nom)}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full object-contain drop-shadow-lg"
                  />

                </div>

                <div className="border-t border-slate-100 p-4 dark:border-slate-700">

                  <h3 className="text-sm font-bold text-emerald-950 dark:text-white sm:text-base">
                    {tr(p.nom)}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400">
                    {tr("Disponible en boutique")}
                  </p>

                </div>

              </motion.article>

            ))}

          </motion.div>

        </div>

      </section>


      {/* ================= SNEAKERS & BASKETS ================= */}

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-emerald-950">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-700/30 blur-3xl" />

          <div className="relative grid items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-2 md:gap-12 lg:px-14">

            {/* BANNER TEXT */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >

              <span className="inline-block rounded-full border border-emerald-600/50 bg-emerald-900 px-4 py-2 text-xs font-bold tracking-widest text-emerald-300">
                {tr("SNEAKERS & BASKETS")}
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                {tr("Le style à chaque pas.")}
              </h2>

              <div className="my-5 h-1 w-14 rounded-full bg-red-500" />

              <p className="max-w-md text-sm leading-8 text-emerald-100/80 sm:text-base">

                {tr(
                  "Découvrez notre sélection de baskets et sneakers pour tous les goûts. Des modèles classiques aux styles modernes, trouvez les chaussures qui correspondent à votre personnalité."
                )}

              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-emerald-200">

                {["Style", "Confort", "Tendance"].map((item) => (

                  <span
                    key={item}
                    className="rounded-full bg-emerald-900 px-4 py-2"
                  >
                    {tr(item)}
                  </span>

                ))}

              </div>

            </motion.div>


            {/* BANNER IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 flex items-center justify-center md:order-2"
            >

              <motion.img
                src={basket}
                alt={tr("Collection de baskets et sneakers")}
                whileHover={{ scale: 1.06, rotate: -2 }}
                transition={{ duration: 0.5 }}
                className="h-56 w-full max-w-md object-contain drop-shadow-2xl sm:h-72 md:h-80"
              />

            </motion.div>

          </div>

        </div>

      </section>


      {/* ================= NOS ATOUTS ================= */}

      <section className="border-t border-slate-100 py-16 dark:border-slate-800">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 text-center"
          >

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
              {tr("Pourquoi nous choisir ?")}
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-emerald-950 dark:text-white">
              {tr("Notre engagement")}
            </h2>

          </motion.div>


          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-8 lg:grid-cols-4"
          >

            {atouts.map(({ icon: Icon, titre, texte }) => (

              <motion.div
                key={titre}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group text-center"
              >

                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-slate-800 dark:text-emerald-400"
                >

                  <Icon size={27} />

                </motion.div>

                <h3 className="mt-4 text-sm font-bold text-emerald-950 dark:text-emerald-300 sm:text-base">
                  {tr(titre)}
                </h3>

                <p className="mx-auto mt-2 max-w-52 text-xs leading-6 text-slate-500 dark:text-slate-400 sm:text-sm">
                  {tr(texte)}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default Boutique;
