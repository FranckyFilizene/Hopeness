import { FiGitMerge, FiSettings } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { LuCircuitBoard } from "react-icons/lu";


const formationElec = [
    {
        id: 1,
        icon: [
            {
                Icon: FiSettings,
                Style: "dark:text-green-400 text-green-600"
            },
        ],
        titre: 'Plateaux techniques',
        desc: 'Equipements modernes et variés.'
    },
    {
        id: 2,
        icon: [
            {
                Icon: LuCircuitBoard,
                Style: "text-green-600 dark:text-green-400"
            },
        ],
        titre: 'Projets concrets',
        desc: 'Réalisation des projets réels.'
    },
    {
        id: 3,
        icon: [
            {
                Icon: GrGroup,
                Style: "text-green-600 dark:text-green-400"
            },
        ],
        titre: 'Encadrement de qualité',
        desc: 'Suivi et accompagnement personnalisé.'
    },
    {
        id: 4,
        icon: [
            {
                Icon: FiGitMerge,
                Style: "text-green-600 dark:text-green-400"
            },
        ],
        titre: 'Partenariats',
        desc: 'Avec des entreprises et des acteurs du secteur.'
    },
]

export default formationElec;