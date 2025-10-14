import { useState } from "react";

export default function Exercicio11()
{
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [resultado, setResultado] = useState("");

    function calcularMedia() {
        const media = (parseFloat(nota1) + parseFloat(nota2)) / 2;
        if (media >= 7) {
            setResultado(
                <>
                    Nota 1: {nota1} <br />
                    Nota 2: {nota2} <br />
                    Média: {media.toFixed(2)} <br />
                    Situação: Aprovado
                </>
            );
        } else {
            setResultado(
                <>
                    Nota 1: {nota1} <br />
                    Nota 2: {nota2} <br />
                    Média: {media.toFixed(2)} <br />
                    Situação: Reprovado
                </>
            );
        }
    }

    return(
        <div>
            <h1>Exercício 11</h1>

            <div className="conteudo">
                <form action="">
                    <p>
                        Digite a nota 1 <br />
                        <input type="text" value={nota1} onChange={(e) => setNota1(e.target.value)} />
                    </p>

                    <p>
                        Digite a nota 2 <br />
                        <input type="text" value={nota2} onChange={(e) => setNota2(e.target.value)} />
                    </p>

                    <p>
                        <input type="button" value="Exercício 11" onClick={calcularMedia} />
                    </p>

                    <p>
                        <b>Resultados:</b> <br />
                        {resultado}
                    </p>

                    <p>
                        <a href="/">Voltar</a>
                    </p>
                </form>


            </div>


            

        </div>
    )
}