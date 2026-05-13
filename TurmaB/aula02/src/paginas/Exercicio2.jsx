export default function Exercicio2( {peso, altura} )
{
    let imc = peso / (altura * altura);

    return(
        <div>
            O IMC para uma pessoa de {peso} kg, e altura {altura} mts é {imc}.
        </div>
    )
}