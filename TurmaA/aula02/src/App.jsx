import "./App.css";
import Exemplo1 from "./Exemplo1";
import Exercicio1 from "./Exercicio1";
import Exercicio7 from "./Exercicio7";

export default function App() {
  return (
    <div>
      <h1>Aula 02 - Criação de Componentes</h1>
      <div className="card">
        <h3>Chamadas para o Componentes Exemplo1</h3>
        <Exemplo1 numero1={10} numero2={20} />
      </div>

      <div className="card">
          <h3>Exercício 1</h3>
          <Exercicio1 numero={12} />
          <Exercicio1 numero={67} />
          <Exercicio1 numero={-5} />
      </div>

      <div className="card">
          <h3>Exercício 7</h3>
          <Exercicio7 celsius={30} />
          <Exercicio7 celsius={20} />
          <Exercicio7 celsius={39.5} />
      </div>

    </div>
  )
}