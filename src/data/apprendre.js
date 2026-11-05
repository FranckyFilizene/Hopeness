import { GiDiscussion } from "react-icons/gi";
import { FaBrain } from 'react-icons/fa';
import { FaTheaterMasks } from 'react-icons/fa';
import { TfiWrite } from "react-icons/tfi"

const apprendre = [
    {
        id: 1,
        icon : [
            {Icon : GiDiscussion ,  Style : 'text-green-600 dark:text-green-700'}
        ],
        titre : 'Expression orale',
        desc1 : 'Conversation quotidienne',
        desc2 : 'Prononciation',
        desc3 : 'Débats et présentations'
    },
    {
        id: 2,
        icon : [
            {Icon : TfiWrite ,  Style : 'text-green-600 dark:text-green-700'}
        ],
        titre : 'Expression écrite',
        desc1 : 'Grammaire',
        desc2 : 'Rédaction de textes',
        desc3 : 'Email professionnel'
    },
    {
        id: 3,
        icon : [
            {Icon : FaBrain ,  Style : 'text-green-600 dark:text-green-700'}
        ],
        titre : 'Compréhension',
        desc1 : 'Lecture',
        desc2 : 'Ecoute',
        desc3 : 'Vidéo et médias'
    },
    {
        id: 4,
        icon : [
            {Icon : FaTheaterMasks ,  Style : 'text-green-600 dark:text-green-700'}
        ],
        titre : 'Culture Francaise',
        desc1 : 'Expressions idiomatique',
        desc2 : 'Culture , civilisation',
        desc3 : 'Vie cquotidienne'
    },
]

export default apprendre;