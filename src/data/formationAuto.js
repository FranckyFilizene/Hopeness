import { FaBriefcase, FaChartLine, FaToolbox } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi";
import { MdInsertChartOutlined } from "react-icons/md";

const formationAuto = [
    {
        id: 1,
        icon: [
            {
                Icon: FaToolbox,
                Style: "text-red-600"
            },
        ],
        titre: 'Materiel moderne',
        desc: 'Equipements et outils professionnels.'
    },
    {
        id: 2,
        icon: [
            {
                Icon: MdInsertChartOutlined,
                Style: "text-red-600"
            },
        ],
        titre: 'Encadrement personnalisé',
        desc: 'Suivi individuel de chaque apprenant.'
    },
    {
        id: 3,
        icon: [
            {
                Icon: FaBriefcase,
                Style: "text-red-600"
            },
        ],
        titre: 'Stage en entreprise',
        desc: 'Mise en pratique en milieu professionnel.'
    },
    {
        id: 4,
        icon: [
            {
                Icon: FaChartLine,
                Style: "text-red-600"
            },
        ],
        titre: 'Taux de réussite élevé',
        desc: 'Nos anciens diplomés sont sur le terrain.'
    },
]

export default formationAuto;