import { MdLocationOn, MdCall, MdEmail, MdAccessTime } from "react-icons/md";
import GoogleMap from "../components/GoogleMap";
import { useTranslation } from "react-i18next";
import { translate as tr } from "../i18n/i18n";

const infos = [
    {
        icon: MdLocationOn,
        label: "Adresse",
        value: "Mahavatse II, Toliara, Madagascar",
    },
    {
        icon: MdCall,
        label: "Téléphone",
        value: "+261 38 48 783 50",
        href: "tel:+261384878350",
    },
    {
        icon: MdEmail,
        label: "Email",
        value: "zahgascar@gmail.com",
        href: "mailto:zahgascar@gmail.com",
    },
    {
        icon: MdAccessTime,
        label: "Horaires",
        value: "Lun - Ven : 8h - 12h | 14h - 17h",
    },
];

const Contact = () => {
    useTranslation();
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* En-tête */}
            <header className="bg-slate-800 dark:bg-slate-950">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-extrabold text-white md:text-4xl">
                        {tr("CONTACTEZ-NOUS")}
                    </h1>
                    <p className="mt-2 text-red-400">{tr("Nous sommes à votre écoute.")}</p>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Coordonnées */}
                    <div className="space-y-4">
                        <h2 className="mb-6 text-xl font-bold text-emerald-600 dark:text-emerald-400">
                            {tr("Nos coordonnées")}
                        </h2>
                        {infos.map(({ icon: Icon, label, value, href }) => (
                            <div
                                key={label}
                                className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-slate-800 dark:ring-slate-700"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
                                    <Icon size={26} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                                        {tr(label)}
                                    </h3>
                                    {href ? (
                                        <a
                                            href={href}
                                            className="font-medium text-slate-800 hover:text-emerald-600 dark:text-slate-100"
                                        >
                                            {tr(value)}
                                        </a>
                                    ) : (
                                        <p className="font-medium text-slate-800 dark:text-slate-100">
                                            {tr(value)}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Carte */}
                    <div>
                        <h2 className="mb-4 text-xl font-bold text-emerald-600 dark:text-emerald-400">
                            {tr("Nous trouver")}
                        </h2>
                        <GoogleMap />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contact;