import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { translate as tr } from "../i18n/i18n";

const ScrolltoTop = () => {
    useTranslation();

    const [isVisible , setIsVisible] = useState(false);

    useEffect(()=>{
        const toogleVisibility = () =>{
            if(window.scrollY > 300){
                setIsVisible(true);
            }else{
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toogleVisibility);

        return () => window.removeEventListener('scrool', toogleVisibility);
    },[]);

    const ScrolltoTop = () =>{
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        });
    }
  return (
    <div>
      {isVisible && (
        <button
        onClick={ScrolltoTop}
        type="button"
        aria-label={tr("Retour en haut")}
        className="fixed bottom-20 right-4 z-40 p-3.5 md:h-14 md:w-14 h-12 w-12 bg-green-600 border border-white text-white rounded-full shadow-lg hover:bg-green-700 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
        >
            <FaArrowUp className="text-xl"/>
        </button>
      )}
    </div>
  )
}

export default ScrolltoTop
