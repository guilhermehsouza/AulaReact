export default function Exercicio9({capital, juros, tempo}) {

    let  montante = capital * Math.pow(1 + juros / 100, tempo);

    return (
        <div>
            <p>Capital: R$ {capital.toFixed(2)}</p>
            <p>Juros: {juros}%</p>
            <p>Tempo: {tempo} meses</p>
            <p>Montante: R$ {montante.toFixed(2)}</p>
        </div>
    );
    
}

    
