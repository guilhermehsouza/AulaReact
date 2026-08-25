export default function Exercicio7( {celsius} )
{
    let fahrenheit, kelvin;

    fahrenheit = (celsius * 9/5) + 32;
    kelvin = celsius + 273.15;

    return(
        <div>
            {celsius}°C equivale a {fahrenheit}°F e {kelvin}°K
        </div>
    );
}