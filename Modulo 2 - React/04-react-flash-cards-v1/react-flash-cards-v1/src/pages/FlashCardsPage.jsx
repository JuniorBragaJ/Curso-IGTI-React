import { useState } from 'react'
import Button from '../components/Button'
import FlashCard from '../components/FlashCard'
import FlashCards from '../components/FlashCards'
import Header from '../components/Header'
import Main from '../components/Main'
import RadioButton from '../components/RadioButton'
import {allFlashCards} from '../data/allFlashCards'
import { helperShuffleArray } from '../helpers/arrayHelpers'


export default function FlashCardsPage() {

    const [allCards, setAllCards] = useState(allFlashCards);
    const [showTitle, setShowtitle] = useState(false);


    function handleButtonClick() {
        const shuffledCards = helperShuffleArray(allCards)
        setAllCards(shuffledCards)
    }

    function handleRadioshowTitleClick() {
        setShowtitle(true)
    }

    function handleRadioShowDescriptionClick() {
        setShowtitle(false)
    }


    return(
    <>
        <Header>Flash Cards Page</Header>
        <Main>
            <div className="text-center m-2">
                <Button onButtonClick={handleButtonClick}>Embaralhar cards</Button>
            </div>

            <div className="flex flex-row items-center justify-center">
                <RadioButton 
                    id="radioButtonShowTitle" 
                    name="showInfo"
                    buttonChecked={showTitle}
                    onButtonClick={handleRadioshowTitleClick}>
                        Mostrar titulos
                </RadioButton>
                
                <RadioButton 
                    id="radioButtonShowDescription" 
                    name="showInfo"
                    buttonChecked={!showTitle}
                    onButtonClick={handleRadioShowDescriptionClick}>
                        Mostrar descrições
                </RadioButton>
            </div>
            
            <FlashCards>
                {
                    allCards.map(({id, title, description}) => {
                        return <FlashCard 
                        key={id} 
                        title={title}
                        description={description}
                        showFlashCardTitle = {showTitle}
                        />
                    })
                }
            </FlashCards>
            
        </Main>
    </>
)}