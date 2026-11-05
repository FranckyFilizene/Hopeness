import { Link } from "react-router-dom";
import Ifor from "../assets/HeroI.jpg";
import img1 from "../assets/info1.jpg";
import img2 from "../assets/info6.jpg";
import img3 from "../assets/info4.png";
import img4 from "../assets/info5.jpg";
import formationInfo from "../data/formationInfo";
import parcoursInfos from "../data/parcoursInfos";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoVerified } from 'react-icons/go';
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

const Informatique = () => {
  useTranslation();

  const methode = [
    { id: 1, icon: [{ Icon: GoVerified, Style: 'text-white' }], titre: 'Cours théorique et pratique' },
    { id: 2, icon: [{ Icon: GoVerified, Style: 'text-white' }], titre: 'Projets concrète' },
    { id: 3, icon: [{ Icon: GoVerified, Style: 'text-white' }], titre: 'Encadrement par des professionnels' },
    { id: 4, icon: [{ Icon: GoVerified, Style: 'text-white' }], titre: 'Accés a des ressources numériques' },
    { id: 5, icon: [{ Icon: GoVerified, Style: 'text-white' }], titre: 'Suivi et évaluation regulières' },
  ]

  const galerie = [
    { src: img1, alt: 'Imgage1' },
    { src: img2, alt: 'Imgage2' },
    { src: img3, alt: 'Imgage3' },
    { src: img4, alt: 'Imgage4' },
  ];

  return (
    <div className='min-h-screen relative bg-slate-50 dark:bg-slate-900'>

      {/* ===================== HERO ===================== */}
      <section className='relative flex items-center overflow-hidden min-h-[45vh]'>
        <img src={Ifor} alt={tr("Cours d'Informatique")} className='absolute inset-0 z-0 h-full w-full object-cover' />
        <div className='absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30'></div>

        <div className='relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
          <div className='max-w-2xl space-y-6'>
            <div className='inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-1 text-sm font-medium text-emerald-100 backdrop-blur-sm'>
              <p>{tr("Cours Informatique")}</p>
            </div>

            <div className='flex flex-col gap-3'>
              <h1 className='text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl'>
                {tr("Cours d'Informatique")}
              </h1>
              <h2 className='text-lg font-medium text-emerald-200 md:text-xl'>
                {tr("Maitrisez les outils d'aujoud'hui, construisez le métier de demain !")}
              </h2>
              <p className='max-w-xl text-sm leading-relaxed text-slate-200 md:text-base'>
                {tr("Chez ")}<span className='font-extrabold text-emerald-400'>HOPENESS</span>, {tr("nous vous formons aux compétences numériques")}<br />
                {tr("indispensable pour réussir dans un monde connecté. Que vous soyez ")}<br />
                {tr("Débutant ou souhaitiez vous perfectionner, nos formations s'adaptent ")}<br />
                {tr("a votre niveau et a vos objectifs.")}
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

        {/* ---- Pourquoi choisir notre formation ---- */}
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
          <SectionTitle
            title={tr("Pourquoi choisir notre formation ?")}
            subtitle={tr("Une formation complète, pratique et orientée vers l'employabilité.")}
          />
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {formationInfo.map((item) => (
              <div key={item.id} className={cardBase}>
                <div className='mb-5'>
                  {item.icon.map(({ Icon, Style }, index) => (
                    <Icon key={index} className={`${Style} rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300`} size={52} />
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

        {/* ---- Parcours de formation + Méthode ---- */}
        <div className='bg-white py-16 dark:bg-slate-800/40'>
          <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
            <SectionTitle
              title={tr("Nos parcours de formation")}
              subtitle={tr("Une formation adaptées a tous les niveaux du debutant a l'avancé.")}
            />
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {parcoursInfos.map((item) => (
                <div key={item.id} className='flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-colors duration-300 hover:border-emerald-300 dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-emerald-500/60'>
                  <div className='aspect-[16/10] overflow-hidden'>
                    <img src={item.image} alt={tr("Bureautique")} loading='lazy' className='h-full w-full object-cover' />
                  </div>
                  <div className='flex flex-1 flex-col p-6'>
                    <h3 className='text-lg font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400'>{tr(item.titre)}</h3>
                    <ul className='mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300'>
                      <li className='flex items-start gap-2'>
                        <MdKeyboardArrowRight className='mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400' size={18} />
                        <p>{tr(item.desc1)}</p>
                      </li>
                      <li className='flex items-start gap-2'>
                        <MdKeyboardArrowRight className='mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400' size={18} />
                        <p>{tr(item.desc2)}</p>
                      </li>
                      <li className='flex items-start gap-2'>
                        <MdKeyboardArrowRight className='mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400' size={18} />
                        <p>{tr(item.desc3)}</p>
                      </li>
                      <li className='flex items-start gap-2'>
                        <MdKeyboardArrowRight className='mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400' size={18} />
                        <p>{tr(item.desc4)}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}

              <aside className='flex h-full flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-xl dark:border dark:border-slate-700'>
                <div className='border-b border-white/10 bg-emerald-700 px-6 py-5'>
                  <h2 className='text-xl font-bold text-white'>{tr("Notre méthode")}</h2>
                  <p className='mt-1 text-sm text-emerald-100'>{tr("Une approche moderne et efficace")}</p>
                </div>
                <ul className='flex-1 divide-y divide-white/10 px-6 py-2'>
                  {methode.map((item) => (
                    <li key={item.id} className='flex items-center gap-3 py-3'>
                      {item.icon.map(({ Icon, Style }, index) => (
                        <div key={index} className='shrink-0 rounded-full bg-emerald-600 p-1.5 shadow-md'>
                          <Icon className={`${Style}`} size={16} />
                        </div>
                      ))}
                      <p className='text-sm font-medium text-slate-100'>{tr(item.titre)}</p>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </div>

        {/* ---- Galerie ---- */}
        <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'>
          <SectionTitle
            title={tr("Quelques images de nos cours")}
            subtitle={tr("Decouvrez notre environnement d'apprentissage.")}
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
    </div>
  )
}

export default Informatique