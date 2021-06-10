import { useState } from "react";
import Header from './components/Header'; 
import Main from './components/Main'
import TextInput from './components/TextInput'
// import Test from './components/Test'


export default function App() {
  console.log('Teste no console do navegador');

  const [name, setName] = useState('');//setName vem junto com o useState como se fosse a função
                                      // que seta o valor digitado

  function handleNameChange (newName) {
    setName(newName)
  }

  return (
    <> 
      <Header>React hello world! </Header>
      
      <Main>
        <TextInput labelDescription="Digite o seu nome:" inputValue={name} onInputChange={handleNameChange}/>

        Olá, meu nome é: {name} com {name.length} caractéres e tenho 20 anos 
        
        </Main>
    </>
  );
}



















// Exemplo de utilização de props
/* <Test number={10} string="Teste" visible data={{a: 1, b: 2}} onClick={() => {console.log("Clicou!")}} /> */