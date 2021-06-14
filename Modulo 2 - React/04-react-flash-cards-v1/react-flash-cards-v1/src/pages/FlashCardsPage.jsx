import FlashCard from '../components/FlashCard'
import Header from '../components/Header'
import Main from '../components/Main'
import {allFlashCards} from '../data/allFlashCards'

export default function FlashCardsPage() {
    return(<>
        <Header>Flash Cards Page</Header>
        <Main> 
            <FlashCard/>
            <FlashCard title="Junior" description="Muito lindo"/>
            
        </Main>
    </>
)}