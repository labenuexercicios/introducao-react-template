
import './App.css'
import logoLabenu from './assets/logo.png'
function App() {
  const nome = "Lucas"
function onClickBotao () {
  console.log("botao criado")
}
  return (
    <div className='container'>
        <h1>Aprenda React na Labenu!</h1>
        <div>
          <div>
            <img className='Logo' src={logoLabenu} alt="logo"/>
          </div>
          <div>
            <a href="https://labenu.com.br">Site da Labenu</a>
          </div>
          <div>
            <button onClick={onClickBotao}> Clique aqui! </button>
          </div>
        </div>
      </div>

  )
}

export default App
