export default function Exercicio6( {capital, taxa, tempo} )
{
    let montanteSimples = Number(capital) * (1 + (Number(taxa) / 100) * Number(tempo));
    let montanteComposto = Number(capital) * Math.pow((1 + Number(taxa) / 100), Number(tempo));

    let quadrado = Math.pow(8, 2);

    return (
        <div>
            <p>Capital: R$ {Number(capital).toFixed(2)}, Taxa: {taxa}%, Tempo: {tempo} meses.</p>
            <p>
                Montante (Juros Simples) = R$ {montanteSimples.toFixed(2)}. <br />
                Montante (Juros Compostos) = R$ {montanteComposto.toFixed(2)}.
            </p>
        </div>
    )
}
