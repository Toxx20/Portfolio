import { Navigation } from "./Navigation.jsx"
import { Phone,Mail } from "lucide-react"

export function Footer(){
    return <footer className="flex flex-col p-2.5 gap-2.5 lg:flex-row lg:justify-between lg:p-5">
        <div className="footer-flex dark:text-white lg:items-start">
            <h3 className="dark:text-white">Contact</h3>
            <div className="flex gap-2.5 items-center">
                {/* label téléphone */}
                <div className="footer-icon">
                    <Phone className="w-5 h-5"/>
                </div>
                0384022803
            </div>
            <div className="flex gap-2.5 items-center">
                <div className="footer-icon">
                    {/* label email  */}
                    <Mail className="w-5 h-5"/>
                </div>
                rakotoharinosynoely@gmail.com
            </div>
        </div>
        <div className="footer-flex items-center dark:text-white">
            <h3> Navigations</h3>
            <Navigation classNameText={'text-[16px] font-normal'} > </Navigation>
        </div>
        <div className="footer-flex dark:text-white">
            <h3>Suivez-moi!</h3>
            <div className="flex gap-2.5">
                <a className="footer-icon" href="https://www.linkedin.com/in/noely-rakotoharinosy-7b6146317/"
                    target="_blank"
                    rel="noopener noreferrer">
                    {/* icon linkedIn */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path className="fill-white" fillRule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.57 2.57 0 0 1-1.82.748a2.6 2.6 0 0 1-1.818-.747A2.55 2.55 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.58 2.58 0 0 1 4.571 2c.682 0 1.336.269 1.819.747s.753 1.126.753 1.803" clipRule="evenodd" />
                    </svg>
                </a>
                <a className="footer-icon" href="https://github.com/Toxx20">
                    {/* icon github */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <g fill="none" className="stroke-white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" />
                            <path d="M9 20.027c-3 .973-5.5 0-7-3" />
                        </g>
                    </svg>
                </a>

            </div>
        </div>
    </footer>
}