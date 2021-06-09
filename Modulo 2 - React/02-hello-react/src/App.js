import Header from './components/Header'; 
import Main from './components/Main'
// import Test from './components/Test'


export default function App() {
  console.log('Teste no console do navegador');


  return (
    <> 
      <Header>React hello world! </Header>
      
      <Main>
        <label htmlFor="inputName">Digite seu nome aqui:</label>
        <input id="inputName"  className="border" type ="text" />

        Olá, meu nome é junior! Tenho 20 anos 
        </Main>
    </>
  );
}






















// Exemplo de utilização de props
/* <Test number={10} string="Teste" visible data={{a: 1, b: 2}} onClick={() => {console.log("Clicou!")}} /> */