import { useTranslation } from "react-i18next";
import { translate as tr } from "../i18n/i18n";

export default function GoogleMap({
  lat = -23.360268439604273,
  lng = 43.675839638857525,
  zoom = 17,
}) {
  useTranslation();
  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200 dark:ring-slate-700">
        <iframe
          title={tr("Localisation de l'entreprise")}
          src={`https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`}
          className="h-80 w-full border-0 md:h-96"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-700"
      >
        {tr("Obtenir l'itinéraire")}
      </a>
    </div>
  );
}