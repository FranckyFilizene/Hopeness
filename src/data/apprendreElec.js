import { FaChartLine } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { LuCpu } from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";


const apprendreElec = [
    {
        id: 1,
        icon: [
            {
                Icon: LuCpu,
                Style: "text-green-600 dark:text-green-400"
            },
        ],
        titre: 'Formations modermes',
        desc: 'Théorie et pratique sur équipements réels.'
    },
    {
        id: 2,
        icon: [
            {
                Icon: GiTeacher,
                Style: "text-green-600 dark:text-green-400"
            },
        ],
        titre: 'Formateurs experts',
        desc: 'Ingénieurs et techniciens expérimentés.'
    },
    {
        id: 3,
        icon: [
            {
                Icon: FaChartLine,
                Style: "text-green-600 dark:text-green-400"
            },
        ],
        titre: 'Débouchés garantis',
        desc: 'Un secteur en pleine croissance.'
    },
    {
        id: 4,
        icon: [
            {
                Icon: PiCertificate,
                Style: "dark:text-green-400 text-green-600"
            },
        ],
        titre: 'Diplome certifié',
        desc: 'Reconnu par l\'Etat et les entreprises.'
    },
]

export default apprendreElec;