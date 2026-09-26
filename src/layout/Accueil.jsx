export function Accueil(){
    return <div  id="Accueil" className="layout lg:h-dvh md:flex-row justify-between items-center">
                <div className="flex flex-col gap-5 lg:w-1/2">
                    <h1>
                        Moi c’est {""}
                            <span className="text-purple">
                                Toky
                            </span>
                        , Développeur REACT
                    </h1>
                    9 mois d'expérience, 
                    dans la conception des sites web
                    modernes en approche Mobile First
                    et responsive.  
                    Spécialisé dans la création de 
                    composants réutilisables et 
                    maintenables, je veille à écrire 
                    un code propre avec une  
                    architecture compréhensible  
                    pour une équipe.
                </div>
                <img className="rounded-3xl lg:rounded-xl lg:h-auto md:w-1/2 lg:w-1/3" src="/Toky Portfolio.jpg"
                alt="image d'un développeur web" />
            </div>
}