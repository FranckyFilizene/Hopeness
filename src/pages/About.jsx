import { BiStar } from 'react-icons/bi';
import abouts from '../data/about.js';
import { FaHandshake } from 'react-icons/fa6';
import { GrGroup } from 'react-icons/gr';
import { GiIdea } from 'react-icons/gi';
import cfp1 from '../assets/CPF.webp'
import cfp2 from '../assets/CFP2.webp'
import cfp3 from '../assets/CFP3.webp'
import { useTranslation } from 'react-i18next';
import { translate as tr } from '../i18n/i18n';

const cardBase =
    'flex h-full gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ' +
    'transition-all duration-300 hover:border-emerald-300 hover:shadow-md ' +
    'dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-emerald-500/60';

const iconStyle = 'rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300';

const About = () => {
    useTranslation();

    const galerie = [
        { src: cfp1, alt: 'Imgage1' },
        { src: cfp2, alt: 'Imgage2' },
        { src: cfp3, alt: 'Imgage3' },
    ];

    return (
        <div className='relative min-h-screen bg-slate-50 dark:bg-slate-900'>

            {/* ===================== HERO ===================== */}
            <section className='relative overflow-hidden bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950'>
                <div className='absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-emerald-600/20 to-transparent'></div>
                <div className='relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
                    <div className='max-w-2xl space-y-4'>
                        <h2 className='text-sm font-medium uppercase tracking-widest text-slate-300'>{tr('A propos de')}</h2>
                        <h1 className='text-4xl font-extrabold tracking-tight text-emerald-500 sm:text-5xl lg:text-6xl'>HOPENESS</h1>
                        <h3 className='text-xl font-semibold text-red-400 md:text-2xl'>
                            {tr('Notre histoire, notre engagement.')}
                        </h3>
                        <p className='max-w-xl text-sm leading-relaxed text-slate-200 md:text-base'>
                            {tr('HOPENESS est une centre de formation professionnelle a Madagascar, ')}<br />
                            {tr('qui accompagne les apprenants dans le développement de leurs compétences ')}<br />
                            {tr('pour un avenir meilleur.')}
                        </p>
                    </div>
                </div>
            </section>

            {/* ===================== CONTENU ===================== */}
            <section className='space-y-16 py-16'>

                {/* ---- Présentation ---- */}
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                        {abouts.map((item) => (
                            <div className={cardBase} key={item.id}>
                                {item.icon.map(({ Icon, Style }, index) => (
                                    <div key={index} className='shrink-0'>
                                        <Icon className={`${Style} ${iconStyle}`} size={56} />
                                    </div>
                                ))}
                                <div>
                                    <h2 className='border-b-2 border-emerald-600 pb-2 text-xl font-bold text-emerald-700 dark:border-emerald-400 dark:text-emerald-400'> {tr(item.titre)} </h2>
                                    <p className='mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400'> {tr(item.desc)} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---- Valeurs ---- */}
                <div className='border-y border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-800/40'>
                    <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-4 md:gap-0 lg:px-8'>
                        <div className='flex flex-col items-center justify-center gap-2 text-center md:border-r md:border-slate-200 md:px-6 dark:md:border-slate-700'>
                            <BiStar size={52} className='rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300' />
                            <h2 className='text-lg font-bold text-emerald-700 dark:text-emerald-400'>{tr('Excellence')}</h2>
                            <p className='text-sm leading-relaxed text-slate-600 dark:text-slate-300'>{tr('Nous vision la qualité dans tout ce que nous ')}<br />{tr('faisons.')}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 text-center md:border-r md:border-slate-200 md:px-6 dark:md:border-slate-700'>
                            <FaHandshake size={52} className='rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300' />
                            <h2 className='text-lg font-bold text-emerald-700 dark:text-emerald-400'>{tr('Engagement')}</h2>
                            <p className='text-sm leading-relaxed text-slate-600 dark:text-slate-300'>{tr("Nous croyons en l'effort et à la réussite de ")}<br />{tr('chacun.')}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 text-center md:border-r md:border-slate-200 md:px-6 dark:md:border-slate-700'>
                            <GiIdea size={52} className='rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300' />
                            <h2 className='text-lg font-bold text-emerald-700 dark:text-emerald-400'>{tr('Innovation')}</h2>
                            <p className='text-sm leading-relaxed text-slate-600 dark:text-slate-300'>{tr('Nous adaptons des méthodes modernes et ')}<br />{tr('adaptées.')}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 text-center md:px-6'>
                            <GrGroup size={52} className='rounded-xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300' />
                            <h2 className='text-lg font-bold text-emerald-700 dark:text-emerald-400'>{tr('Solidarité')}</h2>
                            <p className='text-sm leading-relaxed text-slate-600 dark:text-slate-300'>{tr('Nous avançons, pour un impact ')}<br />{tr('durable.')}</p>
                        </div>
                    </div>
                </div>

                {/* ---- Galerie ---- */}
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
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

export default About