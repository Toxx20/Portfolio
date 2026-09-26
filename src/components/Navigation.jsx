
/**
 * 
 * @param {string} classNameText
 * @returns 
 */
export function Navigation({classNameText}){
    const textSize = classNameText
    return  <>
                <a href="#Accueil"><h2 className={textSize}>Accueil</h2> </a>
                <a href="#About"><h2 className={textSize}> A propos</h2> </a>
                <a href="#Projet"><h2 className={textSize}>Projets</h2> </a>
            </>
}