import { FaCertificate, FaRegFileAlt, FaTools } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";

const apprendreAuto = [
    {
        id: 1,
        icon: [
            {
                Icon: FaTools,
                Style: "text-red-600"
            },
        ],
        titre: 'Formation pratique',
        desc: 'Ateliers équipés et véhicules réels.'
    },
    {
        id: 2,
        icon: [
            {
                Icon: FaUserTie,
                Style: "text-red-600"
            },
        ],
        titre: 'Formateurs qualifiés',
        desc: 'Professionnels du métier et pédagogues.'
    },
    {
        id: 3,
        icon: [
            {
                Icon: FaRegFileAlt,
                Style: "text-red-600"
            },
        ],
        titre: 'Insertion professionnelle',
        desc: 'Aide a l\'emploi et partenariats.'
    },
    {
        id: 4,
        icon: [
            {
                Icon: FaCertificate,
                Style: "text-red-600"
            },
        ],
        titre: 'Diplome',
        desc: 'Attestation a la fin de la formation.'
    },
]

export default apprendreAuto;