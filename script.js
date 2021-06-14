var about = {
    nome: "About Me",
    sobre: "<p> Sou economista por formação acadêmica e ambientalista por vocação. Atuo atualmente como servidor público estadual e embarquei na imersão_dev após entreter por anos a ideia de aprender a programar e, quem sabe, mudar de carreira. </p> <p> Meu primeiro e último contato com esse mundo havia sido há 18 anos, quando fiz um curso de <em> Webmaster Design </em>. Foi uma grata surpresa descobrir que ainda me lembrava de muita coisa de HTML e um desafio estimulante voltar a pensar e 'ler' de forma codificada </p>",
    urlCodePen: "https://codepen.io/regisncoelho/pen/WNRNaza",
    urlGithub:"https://github.com/regisncoelho",
}

var aula1 = {
    nome: "Conversor de Moedas",
    sobre: "<p> O objetivo da aula era criar um conversor de moedas que convertesse dólares em reais.</p> <p> Como parte do desafio, acrescentei outras duas moedas ao conversor e programei a exibição do resultado na tela, ao invés do 'alert'. O resultado inicial pode ser visto no link do CodePen, abaixo </p> <p> Algum tempo depois da imersãoDEV_, continuando meus estudos em HTML, CSS e JavaScript, revisitei o projeto e promovi melhorias ao código original das aulas utilizando os conhecimentos adquiridos até ali",
    urlCodePen: "https://codepen.io/regisncoelho/full/WNRNaza",
    urlGithub: "https://regisncoelho.github.io/currencyconverter/"
}

var aula2 = {
    nome: "Calculadora",
    sobre: "<p> O objetivo da aula era criar um programa que pergunte e armazene dois valores e o usuário escolha qual operação deseja realizar com um número. O resultado inicial pode ser visto no link do CodePen, abaixo. </p> <p> Algum tempo depois da imersãoDEV_, continuando meus estudos em HTML, CSS e JavaScript, revisitei o projeto e promovi melhorias ao código original das aulas utilizando os conhecimentos adquiridos até ali. O resultado pode ser visto no link do Github, abaixo.</p>",
    urlCodePen: "https://codepen.io/regisncoelho/full/yLgNOwG",
    urlGithub: "https://regisncoelho.github.io/calculator/"
}

var aula3 = {
    nome: "Mentalista",
    sobre: "<p> O objetivo da aula era criar um programa que sorteia um número secreto entre 0 e 10, em que o usuário possui três tentativas para acertar esse número. Para auxiliar quem joga, quando o chute é incorreto dizemos se ele é maior ou menos que o número secreto. Quando o chute é correto, informamos o fim do jogo e o valor do número secreto. </p> <p> Algum tempo depois da imersãoDEV_, continuando meus estudos em HTML, CSS e JavaScript, revisitei o projeto e promovi melhorias ao código original das aulas utilizando os conhecimentos adquiridos até ali. O resultado pode ser visto no link do Github, abaixo.</p>",
    urlCodePen: "https://codepen.io/regisncoelho/pen/yLgYXBR",
    urlGithub: "https://regisncoelho.github.io/mentalist/"
}

var aula4 = {
    nome: "Jogo de Tabuada",
    sobre: "<p> Utilizando os conhecimentos adquiridos até a aula 3, me propus a desenvolver um jogo em que meu filho de 9 anos pudesse exercitar os conhecimentos de tabuada. A primeira versão do jogo pode ser observada no link do CodePen, abaixo. </p> <p> Algum tempo após a imersãodev_, retornei ao projeto para implementar algumas melhorias no código do jogo em si, bem como no design da página. O resultado pode ser observado no link para o GitHub, abaixo. </p>",
    urlCodePen: "https://codepen.io/regisncoelho/pen/xxgwLBj",
    urlGithub: "https://regisncoelho.github.io/jogotabuada/"
}

var aula5 = {
    nome: "Aves da Mata Atlântica",
    sobre: "<p> Este projeto foi criado a partir dos aprendizados das Aulas 4 e 5 da imersãodev_, cujos objetivos eram:<ul><li>Criar um programa que permite formar uma coleção de filmes utilizando arrays</li> <li> Criar um programa que armazene imagens e que teste condições antes de apresentá-la</li></ul> </p> <p>Algum tempo depois da imersãoDEV_, continuando meus estudos em HTML, CSS e JavaScript, revisitei o projeto e promovi melhorias ao código original das aulas utilizando os conhecimentos adquiridos até ali. O resultado pode ser visto no link do Github, abaixo.</p>",
    urlCodePen: "https://codepen.io/regisncoelho/pen/qBRbKgv",
    urlGithub: "https://regisncoelho.github.io/birds-album/"
}

var aula6 = {
    nome: "Aluraflix 2",
    sobre: "",
    urlCodePen: "https://codepen.io/regisncoelho/pen/abpNEbz",
    urlGithub: ""
}

var aula7 = {
    nome: "Tabela de Classificação",
    sobre: "",
    urlCodePen: "https://codepen.io/regisncoelho/pen/BapLxbx",
    urlGithub: ""
}

var aula8 = {
    nome: "Supertrunfo (projeto extra)",
    sobre: "",
    urlCodePen: "https://codepen.io/regisncoelho/pen/poRNZwE",
    urlGithub: "https://regisncoelho.github.io/batalhabey/"
}

var aula9 = {
    nome: "Certificard",
    sobre: "",
    urlCodePen: "https://codepen.io/regisncoelho/pen/JjEJExE",
    urlGithub: "https://regisncoelho.github.io/certificado-imersaodev/"
}

aulas = [about, aula1, aula2, aula3, aula4, aula5, aula6, aula7, aula8, aula9]

function aboutMe() {
    var corpoTitulo = document.getElementById("sobre-titulo")
    corpoTitulo.innerHTML= about.nome

    var corpoSobre = document.getElementById("sobre")
    corpoSobre.innerHTML = about.sobre
}

aboutMe()

function showAside(button){
    var opcao = button.value
    var corpoTitulo = document.getElementById("sobre-titulo")
    corpoTitulo.innerHTML = aulas[opcao].nome

    var corpoSobre = document.getElementById("sobre")
    corpoSobre.innerHTML = aulas[opcao].sobre + "<p id='psobre'> Veja o projeto no <b><a href='" + aulas[opcao].urlCodePen + "' target='_blank'> CodePen</a></b> ou no <b><a href='" + aulas[opcao].urlGithub + "' target='_blank'> Github </a></b>." 
 }

 //Certificado de participação do evento Imersão DEV_ do grupo Alura, ministrado pelos profissionais Paulo Silveira, Rafaella Ballerini e Guilherme Lima, no período de 22.03.21 a 02.04.21.//