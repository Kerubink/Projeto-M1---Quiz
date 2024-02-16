# Quiz - Projeto M1

## Descrição

Este é um encantador projeto de quiz construído com HTML, CSS e JavaScript, projetado para envolver os usuários em uma experiência divertida e educativa. Composto por uma variedade de perguntas de múltipla escolha divididas em três níveis de dificuldade, o quiz desafia os participantes a testarem seus conhecimentos em diferentes áreas.

Cada pergunta vem com um cronômetro animado, estabelecendo um emocionante limite de tempo de 30 segundos para responder. Os botões foram habilmente estilizados com animações suaves, adicionando uma pitada de charme e interatividade ao design. A estética fofa e convidativa do projeto é acentuada por ícones adoráveis e uma paleta de cores vibrantes, criando um ambiente acolhedor e alegre para os jogadores.

Após completar as perguntas, os participantes são recebidos com um feedback instantâneo sobre suas respostas, enquanto a pontuação acumulada é revelada ao final do quiz em uma página dedicada, onde os jogadores podem celebrar suas conquistas.

## Como Usar

1. Abra o arquivo `index.html` em seu navegador.
2. Aperte no botão iniciar.
3. Responda às perguntas clicando nas opções desejadas.
4. Após completar o quiz, você verá sua pontuação e mais opções.

## Estrutura do Projeto

* **index.html:** Esta é a página principal do projeto, também conhecida como página inicial (Home), onde os usuários são recebidos e podem navegar para outras partes do site.
* **assets/:** Este diretório é reservado para armazenar recursos utilizados no projeto, como imagens, ícones e músicas.
  * **images/:** Aqui estão armazenadas as imagens utilizadas em diversas partes do projeto.
  * **icons/:** Nesta pasta estão os ícones usados para adicionar elementos visuais e gráficos ao projeto.
  * **music/:** Este é o local onde estão armazenadas as músicas utilizadas para ambientar a experiência do usuário.
* **pages/:** Neste diretório estão localizadas as páginas específicas do projeto.
  * `quiz.html`: Esta página contém o quiz propriamente dito, onde os usuários podem testar seus conhecimentos através de uma série de perguntas de múltipla escolha.
  * `resultado.html`: Aqui é apresentado o resultado do quiz, exibindo a pontuação do jogador e talvez um resumo do desempenho.
* **css/:** Este diretório contém arquivos de estilo para garantir que o projeto tenha uma aparência visualmente atraente e coesa.
  * `global_styles.css`: Arquivo que contém estilos globais para o projeto, aplicáveis a todas as páginas.
  * **module.css:** Este diretório contém arquivos de estilo modulares para componentes específicos do projeto.
    * `quiz.module.css`: Arquivo de estilo para o quiz, que inclui estilos específicos para o layout e aparência das perguntas e respostas.
    * `result.module.css`: Arquivo de estilo para a página de resultado, com estilos que garantem uma apresentação visualmente agradável das informações de pontuação.
* **js/:** Este diretório contém arquivos JavaScript que fornecem a funcionalidade dinâmica ao projeto.
  * `quiz_logic.js`: Aqui está a lógica por trás do funcionamento do quiz, incluindo o controle das perguntas, respostas e temporizador.
  * `quiz_config.js`: Arquivo de configuração do quiz, onde são definidas as configurações e ajustes do jogo.
  * `result.js`: Arquivo contendo a lógica para processar e exibir os resultados do quiz na página de resultado.
  * `script.js`: Este arquivo contém a lógica geral do projeto, como funcionalidades genéricas e interações comuns do usuário.
* **components/:** Este diretório contém arquivos de estilo específicos para componentes reutilizáveis do projeto, garantindo uma organização mais modular e facilitando a manutenção do código.
  * Arquivos CSS específicos para cada componente podem ser armazenados aqui, como botões, barras de progresso, etc.
* **Devs/:** Este diretório armazena informações sobre os desenvolvedores ou equipe por trás do projeto.
  * `developers.html`: Página que lista os membros da equipe de desenvolvimento, suas contribuições e informações de contato, promovendo transparência e reconhecimento da equipe.

## Personalização

- Adicione ou modifique perguntas em `perguntas.js`.
- Assuntos relacionados a musica do jogo modifique o arquivo `quiz_config.js`
- Adicione ou modifique a logica de pontuação e animações dos resultados em  `result.js`.
- Ajuste os estilos do quiz em `quiz.module.css` (pages\Quiz\quiz.module.css) para corresponder ao design desejado para a pagina do quiz.
- Ajuste os estilos da pagina do Quiz em `quiz.module.css` (pages\\Quiz\.quiz.module.css) para corresponder ao design desejado para a pagina do quiz.
- Ajuste os estilos da pagina de resultados em `result.module.css` (pages\Resultado\result.module.css) para corresponder ao design desejado para a pagina de resultados.

## Contribuição

Sinta-se à vontade para contribuir, reportar problemas ou fazer sugestões. Basta abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
