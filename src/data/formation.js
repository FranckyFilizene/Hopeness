import { GiTeacher } from "react-icons/gi";
import { GrCertificate, GrGroup } from "react-icons/gr";
import { MdInsertChartOutlined } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";

const formation = [
    {
        id: 1,
        icon: [
            {
                Icon: GiTeacher,
                Style: "text-green-600"
            },
        ],
        titre: 'Des formateurs experimenté',
        desc: 'Une equipe pédagogique qualifié et passionné.'
    },
    {
        id: 2,
        icon: [
            {
                Icon: MdInsertChartOutlined,
                Style: "text-green-600"
            },
        ],
        titre: 'Une méthode interactive',
        desc: 'Apprendre par la pratique, la conversation et les projets.'
    },
    {
        id: 3,
        icon: [
            {
                Icon: GrGroup,
                Style: "text-green-600"
            },
        ],
        titre: 'Des groupes réduits',
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

export default formation;