export default function Exercicio8({peso, altura})
{
    const imc = peso / (altura * altura);

    return (
        <div>
            <p>
                Peso: {peso} kg <br />
                Altura: {altura} m <br />
                IMC: {imc}
            </p>
        </div>
    );
}