var user
chrome.storage.local.get('text', (resultado) => {
    user = resultado.text
});
var dataAtual = new Date();

var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1; 
var ano = dataAtual.getFullYear();
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
    mensagens++
    salvarMsgs(mensagens)
}


function contaEnter(event) {
    if (event.which === 13 && ultima !== '') {
        mensagens++
        salvarMsgs(mensagens)
    }
    ultima = event.srcElement.children[0].children[0].textContent;
}

function salvarMsgs(qtd){
    chrome.runtime.sendMessage({ message: true, acao: 'salvar', qtd: qtd });
    chrome.storage.local.get(null, (result)=>{console.log(result)})
}

let intervalo = setInterval(escutador, 1000);
