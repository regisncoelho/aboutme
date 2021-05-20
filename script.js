var about = {
    nome: "About Me",
    sobre: "<p> Sou economista por formação acadêmica e ambientalista por vocação. Atuo atualmente como servidor público estadual e embarquei na imersão_dev após entreter por anos a ideia de aprender a programar e, quem sabe, mudar de carreira. </p> <p> Meu primeiro e último contato com esse mundo havia sido há 18 anos, quando fiz um curso de <em> Webmaster Design </em>. Foi uma grata surpresa descobrir que ainda me lembrava de muita coisa de HTML e um desafio estimulante voltar a pensar e 'ler' de forma codificada </p>",
    urlCodePen: "https://codepen.io/regisncoelho/pen/WNRNaza",
    urlGithub:"https://github.com/regisncoelho",
}

var aula1 = {
    nome: "Conversor de Moedas",
    sobre: "<p> O objetivo da aula era criar um conversor de moedas que convertesse dólares em reais.</p> <p> Como parte do desafio, acrescentei outras duas moedas ao conversor e programei a exibição do resultado na tela, ao invés do 'alert'",
    urlCodePen: "https://codepen.io/regisncoelho/pen/WNRNaza",
    urlGithub: "https://regisncoelho.github.io/currencyconverter/"
}

var aula2 = {
    nome: "Calculadora",
    sobre: "",
    urlCodePen: "https://codepen.io/regisncoelho/pen/yLgNOwG",
    urlGithub: ""
}

var aula3 = {
    nome: "Mentalista",
    sobre: "",
    urlCodePen: "https://codepen.io/regisncoelho/pen/yLgYXBR",
    urlGithub: ""
}

var aula4 = {
    nome: "Jogo de Tabuada",
    sobre: "",
    urlCodePen: "https://codepen.io/regisncoelho/pen/xxgwLBj",
    urlGithub: "https://regisncoelho.github.io/jogotabuada/"
}

var aula5 = {
    nome: "Aves da Mata Atlântica",
    sobre: "",
    urlCodePen: "https://codepen.io/regisncoelho/pen/qBRbKgv",
    urlGithub: ""
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