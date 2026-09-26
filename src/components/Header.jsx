import { useState } from "react"
import { Navigation } from "./Navigation.jsx"

export function Header(){
    const [showMenu,setShowMenu]= useState(false)
    const ToggleMenu=() => setShowMenu(!showMenu)

    return <header>
            <h2 className="px-2 py-1.5 bg-white rounded-full self-start">Tx</h2>
            {/* icon hamberger a afficher sur les petits écrants */}
            <div className="flex flex-col gap-0.5 text-white lg:hidden">
            {/* svg icon hamberger */}
            <svg className="self-end" onClick={ToggleMenu} width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.3906 0H0.296875C0.133594 0 0 0.133594 0 0.296875V2.67188C0 2.83516 0.133594 2.96875 0.296875 2.96875H29.3906C29.5539 2.96875 29.6875 2.83516 29.6875 2.67188V0.296875C29.6875 0.133594 29.5539 0 29.3906 0ZM29.3906 23.1562H0.296875C0.133594 23.1562 0 23.2898 0 23.4531V25.8281C0 25.9914 0.133594 26.125 0.296875 26.125H29.3906C29.5539 26.125 29.6875 25.9914 29.6875 25.8281V23.4531C29.6875 23.2898 29.5539 23.1562 29.3906 23.1562ZM29.3906 11.5781H0.296875C0.133594 11.5781 0 11.7117 0 11.875V14.25C0 14.4133 0.133594 14.5469 0.296875 14.5469H29.3906C29.5539 14.5469 29.6875 14.4133 29.6875 14.25V11.875C29.6875 11.7117 29.5539 11.5781 29.3906 11.5781Z" fill="white"/>
            </svg>
            {showMenu? <Navigation></Navigation> :null
            }
            </div>

            {/* menu à afficher sur les grand écrans*/}
            <div className="max-lg:hidden flex gap-5 text-white">
                <Navigation></Navigation>
            </div>
        </header>
}

