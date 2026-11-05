import { PiShirtFoldedFill } from "react-icons/pi";
import { IoLogoBuffer } from "react-icons/io";
import { FaPrint, FaSliders } from "react-icons/fa6";


const service = [
    {
           id: 1,
           icon: [
               {
                   Icon: PiShirtFoldedFill,
                   Style: "text-green-600"
               },
           ],
           titre: 'Confection des vêtements',
           desc: 'T-Shirt, Polos, Sweats, vestes, uniforme.'
       },
       {
           id: 2,
           icon: [
               {
                   Icon: IoLogoBuffer,
                   Style: "text-green-600"
               },
           ],
           titre: 'Création de logos',
           desc: 'Designs unique et professionnels.'
       },
       {
           id: 3,
           icon: [
               {
                   Icon: FaPrint,
                   Style: "text-green-600"
               },
           ],
           titre: 'Impression personnalisée',
           desc: 'Sérigraphie, transfert, DTF, broderie....'
       },
       {
           id: 4,
           icon: [
               {
                   Icon: FaSliders,
                   Style: "text-green-600"
               },
           ],
           titre: 'Personnalisation',
           desc: 'Noms, numéros, motifs, textes....'
       },
]

export default service;