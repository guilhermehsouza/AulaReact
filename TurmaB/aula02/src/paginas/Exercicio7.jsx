export default function Exercicio7( {celsius} )
{
    let fahrenheit = (Number(celsius) * 9/5) + 32;
    let kelvin = Number(celsius) + 273.15;
    return (
        <div>
            {Number(celsius).toFixed(1)}°C equivale a {fahrenheit.toFixed(1)}°F e {kelvin.toFixed(1)}K.
        </div>
    )
}
