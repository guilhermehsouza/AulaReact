export default function Exercicio5( {consultas} )
{
    let salarioBruto = Number(consultas) * 150;
    let inss = salarioBruto * 0.08;
    let salarioLiquido = salarioBruto - inss;

    return (
        <div>
            Para {consultas} consultas: Salário Bruto = R$ {salarioBruto.toFixed(2)}, INSS = R$ {inss.toFixed(2)}, Salário Líquido = R$ {salarioLiquido.toFixed(2)}.
        </div>
    )
}
