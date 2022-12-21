function trocarClube() {

    // cria referência aos elementos da página
    var imgClube = document.getElementById("imgClube");
    var divTitulo = document.getElementById("divTitulo");

    var clube; // define variável que irá receber o nome do clube

    // verifica qual radiobutton está selecionado
    if (rbBrasil.checked) {
        clube = "Brasil";
    } else if (rbPelotas.checked) {
        clube = "Pelotas";
    } else {
        clube = "Farroupilha";
    }

    // define as classes de divTitulo: row e cores do clube
    divTitulo.className = "row cores" + clube;

    // modifica a imagem de acordo com a seleção do cliente
    imgClube.src = "img/" + clube.toLowerCase() + ".png";
    imgClube.className = "exibe"; // exibe a imagem
    imgClube.alt = "Símbolo do " + clube; // modifica atributo alt

    // salva no navegador a escolha do cliente
    localStorage.setItem("clube", clube);
}

// captura os elementos do radiobutton
var rbBrasil = document.getElementById("rbBrasil");
var rbPelotas = document.getElementById("rbPelotas");
var rbFarroupilha = document.getElementById("rbFarroupilha");

// associa ao evento change a function trocarClube
rbBrasil.addEventListener("change", trocarClube);
rbPelotas.addEventListener("change", trocarClube);
rbFarroupilha.addEventListener("change", trocarClube);

function verificarClube() {

    // se já estiver salvo algum clube
    if (localStorage.getItem("clube")) {
        var clube = localStorage.getItem("clube"); // obtém o nome do clube
        // conforme o clube, marca um dos elementos do input type radio
        if (clube == "Brasil") {
            rbBrasil.checked = true;
        } else if (clube == "Pelotas") {
            rbPelotas.checked = true;
        } else {
            rbFarroupilha.checked = true;
        }
        trocarClube(); // chama a function que troca a imagem e as cores
    }
}
// chama function que verifica se cliente já selecionou clube anteriormente
verificarClube();

function trocarClube() {

    // cria referência aos elementos da página
    var imgClube = document.getElementById("imgClube");
    var divTitulo = document.getElementById("divTitulo");

    // armazena em um vetor a lista de clubes
    var clubes = ["Brasil", "Pelotas", "Farroupilha"];

    // percorre os radiobuttons para verificar qual está selecionado
    for (var i = 0; i < 4; i++) {
        if (inputsRadio[i].checked) { // se selecionado...
            var selecao = i; // armazena índice do radio selecionado
            break; // e sai da repetição
        }
    }
    if (selecao <= 2) { // se selecao <= 2, então torce por algum clube
        divTitulo.className = "row cores" + clubes[selecao]; // modifica cores(divTitulo)

        // muda a propriedade src com a imagem do clube selecionado
        imgClube.src = "img/" + clubes[selecao].toLowerCase() + ".png";
        imgClube.className = "exibe"; // exibe imagem
        imgClube.alt = "Símbolo do " + clubes[selecao]; // texto alternativo
        localStorage.setItem("clube", clubes[selecao]); // salva nome do clube
    } else { // else (selecionou "Nenhum")
        divTitulo.className = "row"; // tira a classe de cores da divTitulo
        imgClube.className = "oculta"; // oculta a imagem
        imgClube.alt = ""; // limpa texto alternativo
        localStorage.removeItem("clube"); // remove variável do
        localStorage
    }
}

function verificarClube() {
    // se já estiver salvo algum clube
    if (localStorage.getItem("clube")) {
        var clube = localStorage.getItem("clube"); // obtém o nome do clube
        // conforme o clube, marca um dos elementos do input type radio
        if (clube == "Brasil") {
            inputsRadio[0].checked = true;
        } else if (clube == "Pelotas") {
            inputsRadio[1].checked = true;
        } else {
            inputsRadio[2].checked = true;
        }
        trocarClube(); // chama a function que troca a imagem e cores
    }
}
// chama function que verifica se cliente já selecionou clube anteriormente
verificarClube();