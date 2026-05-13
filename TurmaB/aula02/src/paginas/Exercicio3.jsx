export default function Exercicio3( {nota1, nota2} )
{
    let media = (Number(nota1) + Number(nota2)) / 2;
    let situacao = media >= 6 ? "Aprovado" : "Reprovado";

    return (
        <div>
            A média das notas {nota1} e {nota2} é {media}. Aluno {situacao}.
        </div>
    )
}
