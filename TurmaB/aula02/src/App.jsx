import "./App.css";
import Exemplo1 from "./paginas/Exemplo1";
import Exercicio1 from "./paginas/Exercicio1";
import Exercicio2 from "./paginas/Exercicio2";
import Exercicio3 from "./paginas/Exercicio3";
import Exercicio4 from "./paginas/Exercicio4";
import Exercicio5 from "./paginas/Exercicio5";
import Exercicio6 from "./paginas/Exercicio6";
import Exercicio7 from "./paginas/Exercicio7";
import Exercicio8 from "./paginas/Exercicio8";

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
        <h3>Exercício 2</h3>
        <Exercicio2 peso={53.5} altura={1.58} />
      </div>

      <div className="card">
        <h3>Exercício 3</h3>
        <Exercicio3 nota1={8} nota2={6} />
        <Exercicio3 nota1={5} nota2={4} />
      </div>

      <div className="card">
        <h3>Exercício 4</h3>
        <Exercicio4 tipo="triangulo" base={10} altura={5} />
        <Exercicio4 tipo="retangulo" base={10} altura={5} />
      </div>

      <div className="card">
        <h3>Exercício 5</h3>
        <Exercicio5 consultas={40} />
        <Exercicio5 consultas={25} />
      </div>

      <div className="card">
        <h3>Exercício 6</h3>
        <Exercicio6 capital={1000} taxa={5} tempo={6} />
        <Exercicio6 capital={5000} taxa={2} tempo={12} />
      </div>

      <div className="card">
        <h3>Exercício 7</h3>
        <Exercicio7 celsius={30} />
        <Exercicio7 celsius={100} />
      </div>

      <div className="card">
        <h3>Exercício 8</h3>
        <Exercicio8 distancia={300} combustivel={20} />
        <Exercicio8 distancia={150} combustivel={15} />
      </div>
 
    </div>
  )
}