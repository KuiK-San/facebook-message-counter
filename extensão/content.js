
var dataAtual = new Date();

var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1; 
var ano = dataAtual.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano
var ultimaM;
var ultimaC;

const escutador = () => {
    let chat = document.querySelectorAll('.xuk3077.x78zum5.x6prxxf.xz9dl7a.xsag5q8');
    chat.forEach((element) => {
        let clique = element.children[2];
        clique.children[0].addEventListener('click', contaClique);

        element.addEventListener('keyup', contaEnter);
    });
    let comentarios = document.querySelectorAll('.xi81zsa.xo1l8bm.xlyipyv.xuxw1ft.x49crj4.x1ed109x.xdl72j9.x1iyjqo2.xs83m0k.x6prxxf.x6ikm8r.x10wlt62.x1y1aw1k.xn6708d.xwib8y2.x1ye3gou')
    comentarios.forEach(element => element.addEventListener('keyup', contaEnterC))
    
    comentarios = document.querySelectorAll('.x9f619.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.x1qughib.x6s0dn4.xozqiw3.x1q0g3np.xcud41i.x139jcc6.x4cne27.xifccgj')
    comentarios.forEach(element => element.addEventListener('click', contaCliqueC))

    let excluir = document.querySelectorAll('.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.xl56j7k.x6s0dn4.xozqiw3.x1q0g3np.xi112ho.x17zwfj4.x585lrc.x1403ito.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.xbxaen2.x1u72gb5.xtvsq51.x1r1pt67')

    // excluir.forEach(element => element.addEventListener('click', exclui))    
};


function contaClique() {
    salvarMsgs('mensagem')
}

function contaCliqueC() {
    salvarMsgs('comentario')
}


function contaEnter(event) {
    if (event.which === 13 && ultimaM !== '') {
        salvarMsgs('mensagem')
    }
    ultimaM = event.srcElement.children[0].children[0].textContent;
}
function contaEnterC(event) {
    if (event.which === 13 && ultimaC !== '') {
        setTimeout(()=>{
            if(event.srcElement.children[0].children[0].textContent == ""){

                salvarMsgs('comentario')
            }
        },1000)
    }
}


function exclui(event){
    salvarMsgs('excluidas')
}

function salvarMsgs(type){
    
    chrome.storage.local.get(null, (result) => {
        let userId = result.secret
        let link = result.link

        fetch(link + '/api/somar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userId: userId, data: dataAtual, tipo: type})
        })
        .then(response => response.json())
        .then((data)=>{
            console.log(data)
        })
        .catch(erro => console.error(erro))
    })
}

let intervalo = setInterval(escutador, 1000);
