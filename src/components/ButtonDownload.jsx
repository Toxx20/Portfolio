export function Download(){
    return  <button className="bg-black py-2  font-Roboto font-bold flex justify-center w-[50%] rounded-xl cursor-pointer md:w-[15%] lg:w-[10%] dark:bg-purple"
                onClick={()=>{
                    const link = document.createElement("a");
                    link.href = "/CV_Toky_RAKOTOHARINOSY.pdf";
                    link.download = "CV_Toky_RAKOTOHARINOSY.pdf";
                    link.click();
                } }>           
                {/* svg téléchargement */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 9H15V3H9V9H5L12 17L19 9ZM4 19H20V21H4V19Z" fill="white"/>
                </svg>
                CV
            </button>
}