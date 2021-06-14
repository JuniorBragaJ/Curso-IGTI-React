import { useState } from "react"

export default function FlashCard({
    title = "Titulo do card", 
    description = "Descrição do FlashCard, que por ventura possui mais caracteres"}) {
        
        const [showTitle, setShowTitle] = useState(true);
        
        function handleCardClick(){
            setShowTitle(currentShowTitle => !currentShowTitle)
        }

        const fontSizeClassName = showTitle ? 'text-xl' : 'text-md';

        return (
            <div className={`border-2 p-2 w-64 h-32 
                        flex flex-row justify-center items-center 
                        font-bold ${fontSizeClassName} text-center`} 
                 onClick={handleCardClick}>

                {showTitle ? title : description}
            </div>
    )
    
    
    }