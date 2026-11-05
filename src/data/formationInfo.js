import { BiLaptop } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { PiCertificate } from "react-icons/pi";

const formationInfo = [
    {
        id: 1,
        icon: [
            {
                Icon: FaUser,
                Style: "text-green-600"
            },
        ],
        titre: 'Formateurs qualifiés',
        desc: 'Des professionnels passionnés et expérimentés.'
    },
    {
        id: 2,
        icon: [
            {
                Icon: BiLaptop,
                Style: "text-green-600"
            },
        ],
        titre: 'Méthode pratique',
        desc: 'Beaucoup de travaux pratiques et des projets concrèts.'
    },
    {
        id: 3,
        icon: [
            {
                Icon: GrGroup,
                Style: "text-green-600"
            },
        ],
        titre: 'Petits groupes',
        desc: 'Un suivi personnalisé pour progresser plus vite.'
    },
    {
        id: 4,
        icon: [
            {
                Icon: PiCertificate,
                Style: "text-green-600"
            },
        ],
        titre: 'Une certification',
        desc: 'Attestation de formation a la fin du parcours.'
    },
]

export default formationInfo;