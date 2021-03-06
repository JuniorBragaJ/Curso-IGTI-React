import { useEffect, useState } from "react"

export default function FlashCard({
    title = "Titulo do card", 
    description = "Descrição do FlashCard, que por ventura possui mais caracteres",
    showFlashCardTitle = true,
}) {
        
        const [showTitle, setShowTitle] = useState(showFlashCardTitle);

        useEffect(() => {
            setShowTitle(showFlashCardTitle)
        }, [showFlashCardTitle])
        
        function handleCardClick(){
            setShowTitle(currentShowTitle => !currentShowTitle)
        }

        const fontSizeClassName = showTitle ? 'text-xl' : 'text-sm';

        return (
            <div className={`border-2 m-2 p-2 w-64 h-40 
                        flex flex-row justify-center items-center 
                        font-bold ${fontSizeClassName} text-center`} 
                 onClick={handleCardClick}>

                {showTitle ? title : description}
            </div>
    )
    
    
    }