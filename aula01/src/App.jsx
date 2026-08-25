import "./App.css";

export default function App()
{
  let nome, idade, dias;
  nome = "Guilherme";
  idade = 47;
  dias = idade * 365;

  return (
    <div>

        <h1>Olá mundo !!!</h1>

        <div className="conteudo">

            <p>Olá, seja bem vindo ao React com JS.</p>
            <p>O aluno {nome} já viveu {dias} dias.</p>

        </div>

    </div>
  )
}