
import './App.css'
import './components/paragrafo/Paragrafo'
import Button from './components/button/Button'

import TextColorUpper from './components/paragrafo/Paragrafo'


function App() {

  return (
    <>
    <h1 style={{textAlign: 'center'}}>Desafio Base React</h1>
    <TextColorUpper>
       <p style={{textTransform:'uppercase'}}>O React é uma biblioteca JavaScript criada pelo Facebook para construir interfaces de usuário (UI) de forma eficiente, reutilizável e reativa.</p>
    </TextColorUpper>

    <Button label='Clique Aqui'></Button>
    <Button label='Home'></Button>
    </>
  )
}

export default App;
