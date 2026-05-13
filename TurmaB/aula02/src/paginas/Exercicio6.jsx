export default function Exercicio6( {capital, taxa, tempo} )
{
    let montanteSimples = Number(capital) * (1 + (Number(taxa) / 100) * Number(tempo));
    let montanteComposto = Number(capital) * Math.pow((1 + Number(taxa) / 100), Number(tempo));

    return (
        <div>
            Capital: R$ {Number(capital).toFixed(2)}, Taxa: {taxa}%, Tempo: {tempo} meses.
            Montante (Juros Simples) = R$ {montanteSimples.toFixed(2)}.
            Montante (Juros Compostos) = R$ {montanteComposto.toFixed(2)}.
        </div>
    )
}
