import { useState } from "react";

export default function Exercicio4()
{
    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);
    const [area, setArea] = useState(0);

    function calcularArea()
    {
        let area = (base * altura) / 2;
        setArea( area );
    }
    return(
        <div>
            <h1>Exercício 4</h1>

            <div className="conteudo">
                <form action="">
                    <p>
                        Digite o valor da base <br />
                        <input type="text" value={base} onChange={e => setBase(Number(e.target.value))} />
                    </p>

                    <p>
                        Digite o valor da altura <br />
                        <input type="text" value={altura} onChange={e => setAltura(Number(e.target.value))} />
                    </p>

                    <p>
                        <input type="button" value="Exercício 4" onClick={calcularArea} />
                    </p>

                    <p>
                        O valor da base é: {base} <br />
                        O valor da altura é: {altura} <br />
                        O valor da área é: {area}
                    </p>

                    <p>
                        <a href="/">Voltar</a>
                    </p>
                </form>


            </div>


            

        </div>
    )
}