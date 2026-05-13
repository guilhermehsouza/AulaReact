export default function Exemplo1( {numero} )
{
    let quadrado, cubo;
    quadrado = Number(numero) * Number(numero);
    cubo = quadrado * Number(numero);

    return (
        <div>
            O quadrado do {numero} é {quadrado}, e cubo é {cubo}.
        </div>
    )
}