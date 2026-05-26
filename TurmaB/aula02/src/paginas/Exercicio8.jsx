export default function Exercicio8( {distancia, combustivel} )
{
    let consumo = Number(distancia) / Number(combustivel);
    let classificacao;
    if (consumo >= 12) {
        classificacao = "Econômico";
    } else if (consumo >= 8) {
        classificacao = "Moderado";
    } else {
        classificacao = "Gastador";
    }
    return (
        <div>
            Percurso de {distancia} km com {combustivel} litros: consumo de {consumo.toFixed(1)} km/L. Veículo {classificacao}.
        </div>
    )
}
