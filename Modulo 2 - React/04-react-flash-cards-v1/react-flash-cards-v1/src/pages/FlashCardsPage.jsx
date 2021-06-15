import { useState } from 'react'
import Button from '../components/Button'
import FlashCard from '../components/FlashCard'
import FlashCards from '../components/FlashCards'
import Header from '../components/Header'
import Main from '../components/Main'
import {allFlashCards} from '../data/allFlashCards'
import { helperShuffleArray } from '../helpers/arrayHelpers'


export default function FlashCardsPage() {

    const [allCards, setAllCards] = useState(allFlashCards);

    function handleButtonClick() {
        const shuffledCards = helperShuffleArray(allCards)
        setAllCards(shuffledCards)
    }


    return(
    <>
        <Header>Flash Cards Page</Header>
        <Main>
            <div className="text-center m-2">
                <Button onButtonClick={handleButtonClick}>Embaralhar cards</Button>
            </div>

            <FlashCards>
                {
                    allCards.map(({id, title, description}) => {
                        return <FlashCard 
                        key={id} 
                        title={title}
                        description={description}
                        />
                    })
                }
            </FlashCards>
            
        </Main>
    </>
)}