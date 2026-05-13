export default function Exemplo2( {numero1, numero2} )
{
    let soma = Number(numero1) + Number(numero2);

    return (
        <div>
            {numero1} + {numero2} = {soma}
        </div>
    )
}