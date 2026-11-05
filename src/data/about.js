import { FaUsers } from "react-icons/fa"
import { FaBullseye, FaEye } from "react-icons/fa6"


const about = [
    {
        id : 1,
        titre : 'Qui somme-nous ?',
        icon : [{Icon : FaUsers, Style : 'text-emerald-600'}],
        desc : 'HOPENESS est un centre de formation professionnelle a Madagascar , spécialisé dans l\'accompagnement des jeunes et des adulte vers l\'aquisition de compétences pratiques et durables. Nous croyons que chaque personne a un potentiel et mérite une chance de se former et de réussir.'
    },
    {
        id : 2,
        titre : 'Notre mission',
        icon : [{Icon : FaBullseye, Style : 'text-emerald-600'}],
        desc : 'Offrir une formation professionnelle accessible de qualité et axée sur la pratique, afin de permettre a chacun de dévélopper ses compétences, d\'améliorer son employabilité et de contribuer au développement de son avenir et de sa communauté.'
    },
    {
        id : 3,
        titre : 'Notre vision',
        icon : [{Icon : FaEye, Style : 'text-emerald-600'}],
        desc : 'Devenir une référence en matière de formation professionnelle a Madagascar et en Afrique, en formant des professionnels compétences, innovants et engagés pour un avenir meilleur.'
    }
]

export default about;