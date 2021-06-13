import { useEffect, useState } from "react";
import Header from './components/Header'; 
import Main from './components/Main'
import TextInput from './components/TextInput'
import DateInput from './components/DateInput'
import { getAgeFrom } from "./helpers/dateHelpers";
import { getNewId } from "./services/idService";
import Timer from "./components/Timer";
import CheckboxInput from "./components/CheckboxInput";
import OnlineOffline from "./components/OnlineOffline";
// import Test from './components/Test'


export default function App() {
  console.log('Teste no console do navegador');

  const [name, setName] = useState('');   //setName vem junto com o useState como se fosse a função
  const [birthDate, setBirthDate] = useState('2020-01-01');   // que seta o valor digitado
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  

  useEffect(() => {
    document.title = name
  }, [name])
  
  useEffect(() => {
    function toggleOnline() {
      setIsOnline(true);
    }
    function toggleOffline() {
      setIsOnline(false)
    }

    window.addEventListener('online', toggleOnline());
    window.addEventListener('offline', toggleOffline());

    return () => {
      window.removeEventListener('online', toggleOnline());
      window.removeEventListener('offline', toggleOffline());
    };
}, [])




  function handleNameChange (newName) {
    setName(newName)
  }

  function handleBirthDateChange (newBirthDate) {
    setBirthDate(newBirthDate)
  }

  function toggleShowTimer () {
    setShowTimer(currentShowTimer => !currentShowTimer)
  }

  return (
    <> 
      <Header>React hello world! </Header>
      
      <Main>
        <OnlineOffline isOnline = {isOnline}/>

        { showTimer  &&(
          <div className="text-right">
          <Timer/>
          </div>
          )}
        
        <CheckboxInput 
        labelDescription="Mostrar Timer"
        onCheckboxChange={toggleShowTimer}/>

        <TextInput
        id={getNewId()}
        labelDescription="Digite o seu nome:" 
        inputValue={name} 
        onInputChange={handleNameChange}/>

        <DateInput 
        id={getNewId()}
        labelDescription="Data de nascimento:" 
        inputValue={birthDate} 
        onInputChange={handleBirthDateChange} />


        Olá, meu nome é: {name} com {name.length} caractéres e tenho {getAgeFrom(birthDate)} anos 
        
        </Main>
    </>
  );
}



















// Exemplo de utilização de props
/* <Test number={10} string="Teste" visible data={{a: 1, b: 2}} onClick={() => {console.log("Clicou!")}} /> */