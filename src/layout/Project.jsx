import { Card } from "../components/Card.jsx"

export function Project (){
    const project = [
                        {
                            name : "My Todo",
                            github : "https://github.com/Toxx20/My-TODO-React-Tailwind-Css-",
                            vercel : "https://my-todo-eight-zeta.vercel.app/",
                            image : "/Todo.jpg",
                            alt : "image d'une aplication Todo"
                        },
                        {
                            name : "Horoscopiko",
                            github : "https://github.com/Toxx20/Horoscopiko",
                            vercel : "https://horoscopiko.vercel.app/",
                            image : "/horoscope.jpg",
                            alt : "image de l'horocope"
                        },
                    ]
    

    return <div id="Projet" className="layout bg-purple md:h-[75dvh] dark:bg-dark-theme">
        <h1 className="text-white">Projets</h1>
        <div className="card-project">
            {/* <Card  name, github, vercel, image, alt></Card> */}
            {project.map((el,i) =>{
                return <Card
                        name={el.name}
                        github={el.github}
                        vercel={el.vercel}
                        image={el.image}
                        alt={el.alt}
                        key={i}>
                </Card>
                })}
        </div>
    </div>
}