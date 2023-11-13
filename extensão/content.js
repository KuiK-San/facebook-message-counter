
var dataAtual = new Date();

var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1; 
var ano = dataAtual.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano
var ultima;

const escutador = () => {
    let chat = document.querySelectorAll('.xuk3077.x78zum5.x6prxxf.xz9dl7a.xsag5q8');
    chat.forEach((element) => {
        let clique = element.children[2];
        clique.children[0].addEventListener('click', contaClique);

        element.addEventListener('keyup', contaEnter);
    });
};


function contaClique() {
    salvarMsgs()
}


function contaEnter(event) {
    if (event.which === 13 && ultima !== '') {
        salvarMsgs()
    }
    ultima = event.srcElement.children[0].children[0].textContent;
}

function salvarMsgs(){
    
}

let intervalo = setInterval(escutador, 1000);
