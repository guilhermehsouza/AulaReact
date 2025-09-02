export default function Exemplo1() {
  return (
    <div>
      <h1>Exemplo 1</h1>

      <div className="conteudo">
        <h3>Exemplo de uso do useState</h3>

        <p>
          O objetivo será somar dois números e exibir o resultado na tela.
        </p>

        <form>
          <p>
            Digite o primeiro número <br />
            <input type="text" />
          </p>

          <p>
            Digite o segundo número <br />
            <input type="text" />
          </p>

          <p>
            <input type="button" value="Calcular" />
          </p>
          
        </form>
      </div>      
    </div>
  );
}
