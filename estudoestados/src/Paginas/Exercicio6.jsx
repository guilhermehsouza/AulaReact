import {useState} from 'react';

export default function Exercicio6() {

    const [quantidade, setQuantidade] = useState(0);
    const [preco, setPreco] = useState(0);
    const[resultado, setResultado] = useState(0);

    function calcular() {

        let subtotal, desconto, valorPagar;

        subtotal = quantidade * preco;
        desconto = subtotal * 10/100;
        valorPagar = subtotal - desconto;

        setResultado(
            <div>
                Quantidade = {quantidade} <br />
                Preço = {preco} <br />
                Subtotal = {subtotal} <br />
                Desconto = {desconto} <br />
                Valor a pagar = {valorPagar}
            </div>
        );

    }


    return(
        <div>
            <h1>Exercício 6</h1>

            <div className="conteudo">                
                <form>
                    <p>
                        Digite a quantidade <br />
                        <input type="text" value={quantidade} onChange={ (e) => setQuantidade(e.target.value)} />
                    </p>

                    <p>
                        Digite o preço <br />
                        <input type="text" value={preco} onChange={ (e) => setPreco(e.target.value)} />
                    </p>

                    <p>
                        <input type="button" value="Exercício 6" onClick={calcular} />
                    </p>

                    <p>
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
