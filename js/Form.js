class Form {
  constructor() {
    //caixa vazia com texto do placeholder
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    //criação botão
    this.playButton = createButton("Jogar");
    //colocação imagem do titulo
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    //formatação boas vindas ao jogador
    this.greeting = createElement("h2");
  }

  //atribuir posição
  setElementsPosition() {
    this.titleImg.position(120,50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  //atribuir estilo definidos no .css
  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  //oculta/remove cada elemento da tela
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    //função ARROW uma função vinculada a um botão específico
    this.playButton.mousePressed(() => {
      this.input.hide(); //esconde a entrada no botão
      this.playButton.hide(); //esconde o botão
      //exibe a mensagem de boas vindas
      var message = `
      Olá, ${this.input.value()}
      </br>espere o outro jogador entrar...`;
      this.greeting.html(message);

      
      //c37
      playerCount += 1; //aumentar a contagem
      player.name = this.input.value(); // objeto jogador adiciona nome jogador ao BD
      player.index = playerCount;// criamos matriz com o numero dos jogadores
      player.addPlayer(); //objeto jogador chama o método para add jogadores
      
      player.updateCount(playerCount);// objeto jogador acrescenta jogadores ao BD
      player.getDistance();
    });
  }

  //chamada funções
  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
