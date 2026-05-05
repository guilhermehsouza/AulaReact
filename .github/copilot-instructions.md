
# Instruções para Copilot / Agente AI — AulaReact (aula02)

Objetivo: Tornar um agente de codificação AI produtivo rapidamente neste repositório (exercícios Vite + React).

Ações rápidas
- Instalar dependências: `npm install`
- Rodar servidor de desenvolvimento: `npm run dev`
- Gerar build: `npm run build`
- Visualizar build de produção: `npm run preview`
- Verificar lint: `npm run lint`

Formato do projeto (visão geral)
- Conjunto de pequenos projetos Vite + React (apenas cliente). O exemplo ativo fica em `aula02/` (raiz). Existem cópias do mesmo exercício em `TurmaA/` e `TurmaB/`.
- Ponto de entrada: `src/main.jsx` monta `App` no elemento `#root`.
- UI principal: `src/App.jsx` compõe pequenos componentes de exemplo (`src/Exemplo1.jsx`, `src/Exercicio1.jsx`). Estilos em `src/*.css` e ativos estáticos em `public/` ou `src/assets/`.

Por que a estrutura é assim
- Tratam-se de exemplos para ensino: cada pasta é uma app Vite mínima. Os arquivos são pequenos e explícitos para facilitar edição por instrutores/alunos.

Padrões concretos e descobríveis (use ao editar)
- Componentes funcionais são exportados como default; nomes de arquivo usam PascalCase, por ex. `Exemplo1.jsx`.
- Props são desestruturadas diretamente na lista de parâmetros:
  - Exemplo: `export default function Exemplo1({ numero1, numero2 }) { ... }`
- Props numéricas frequentemente são convertidas com `Number(...)` antes de operações aritméticas — preserve essa conversão ao editar ou adicionar componentes semelhantes.
- Não há APIs de backend; todos os dados vêm de props ou estão hard-coded nos componentes.

Pontos de integração e dependências externas
- Runtime: `react` + `react-dom` (ver `package.json`).
- Servidor de desenvolvimento/build: `vite` (ver `vite.config.js`).
- Há configuração do ESLint em cada raiz de projeto (`eslint.config.js`) — siga essas regras ao editar.

Fluxo de trabalho do desenvolvedor e depuração
- Use os scripts em `package.json` na pasta do projeto que estiver editando. No PowerShell nessa pasta:

```powershell
npm install
npm run dev
```

- Abra a aplicação no navegador (o Vite mostra a URL). Use devtools e React DevTools para inspecionar componentes.
- Para validar estilo de código localmente, execute `npm run lint`.

O que um agente AI deve checar primeiro
1. Abrir `src/main.jsx` para confirmar o ponto de montagem e o `id` do `index.html`.
2. Abrir `src/App.jsx` para ver a composição e o uso dos componentes filhos.
3. Inspecionar `src/Exemplo1.jsx` e `src/Exercicio1.jsx` para copiar padrões (desestruturação de props, conversões com `Number`, retorno de JSX).

Exemplos para referência
- `src/Exemplo1.jsx`: desestruturação de props e conversão com `Number` antes de somar.
- `src/Exercicio1.jsx`: calcula `quadrado` e `cubo` usando `Number` nas props.

Restrições e decisões não óbvias
- Existem pastas quase-duplicadas do projeto (raiz `aula02`, `TurmaA/aula02`, `TurmaB/aula02`). Confirme com o instrutor/usuário qual pasta é a autoridade antes de fazer mudanças globais.
- Prefira mudanças pequenas e locais na pasta ativa em vez de refatorações globais entre cópias.

Se precisar de mais detalhes
- Pergunte qual pasta será o destino das alterações (raiz `aula02` vs `TurmaA`/`TurmaB`).
- Se for adicionar funcionalidades que alterem dependências ou o build, atualize o `package.json` correspondente e execute `npm install`.

Feedback
- Indique qual pasta quer como alvo e quaisquer preferências de estilo; eu itero este documento conforme necessário.
