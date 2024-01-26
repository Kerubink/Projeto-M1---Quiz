# Quiz - Projeto M1

## Descrição

Este é um projeto simples de quiz desenvolvido em HTML, CSS e JavaScript. O quiz contém perguntas de múltipla escolha e fornece feedback instantâneo ao usuário sobre suas respostas. O quiz é separado em três niveis de dificuldade, com cinco perguntas cada (`quiz.html`). A contagem da pontuação é apresentada no final do quiz em uma pagina especifica (`resultado.html`).

## Como Usar

1. Abra o arquivo `index.html` em seu navegador.
2. Aperte no botão iniciar.
3. Responda às perguntas clicando nas opções desejadas.
4. Após completar o quiz, você verá sua pontuação e mais opções.

## Estrutura do Projeto

- **index.html:** Página principal do projeto (Home).
- **assets/:** Diretório para armazenar recursos como imagens.
- **images/:** Armazena imagens utilizadas no projeto.
- **pages/:** Armazena as paginas do projeto (`quiz.html` e `resultado.html`).
- **module.css:** Aquivos de estilos modulares (`quiz.module.css` e `resultado.module.css`).
- **css/:** Diretório para arquivos de estilo.

  - `global_styles.css`: Estilos globais para o projeto.
- **js/:** Diretório para arquivos JavaScript.

  - `quiz_logic.js`: Lógica do quiz.
  - `quiz_config.js`: Configurações do quiz.
  - `result.js`: Logica da pagina de resultado.
  - `script.js`: Logica geral do projeto (coisas genericas).

## Personalização

- Adicione ou modifique perguntas em `quiz_config.js`.
- Adicione ou modifique a logica de pontuação e animações dos resultados em  `result.js`.
- Ajuste os estilos do quiz em `quiz.module.css` (pages\Quiz\quiz.module.css) para corresponder ao design desejado para a pagina do quiz.
- Ajuste os estilos da pagina de resultados em `result.module.css` (pages\Resultado\result.module.css) para corresponder ao design desejado para a pagina de resultados.

## Contribuição

Sinta-se à vontade para contribuir, reportar problemas ou fazer sugestões. Basta abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
