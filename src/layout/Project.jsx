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
                            name : "FlowPay",
                            github : "https://github.com/Toxx20/FlowPay",
                            vercel : "https://flow-pay-chi.vercel.app/",
                            image : "/flowpay.jpg",
                            alt : "image de l'horocope"
                        },
                        {
                            name:"PizzaMiavaka",
                            github:"https://github.com/Toxx20/Pizza",
                            vercel:"https://pizza-miavaka.vercel.app/",
                            image:"/fondPizza.jpg",
                            alt:"image pizza"
                        }
                    ]
    

    return <div id="Projet" className="layout bg-purple dark:bg-dark-theme lg:h-[70vh]">
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