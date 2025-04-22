export default function Exercicio3( {valor, taxa, tempo} )
{
    valor = Number(valor);
    taxa = Number(taxa);
    tempo = Number(tempo);

    let resultado = valor + (valor * (taxa * taxa / 100) * tempo);

    return (
        <p>
            Valor : R$ {valor} <br />
            Taxa  : {taxa}% <br />
            Tempo : {tempo} dias <br />
            Valor da parcela em atraso é {resultado}
        </p>
    );
}