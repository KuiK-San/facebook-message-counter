let dataAtual = new Date();

let dia = dataAtual.getDate();
let mes = dataAtual.getMonth() + 1;
let ano = dataAtual.getFullYear();
dataAtual = dia + "/" + mes + "/" + ano;
let ultimaM;
let ultimaC;
let i = false;

const escutador = (url) => {
    if (url == "www.facebook.com") {
        let chat = document.querySelectorAll(
            ".xuk3077.x78zum5.x6prxxf.xz9dl7a.xsag5q8"
        );
        chat.forEach((element) => {
            let clique = element.children[2];
            clique.children[0].removeEventListener("click", contaClique);
            clique.children[0].addEventListener("click", contaClique);

            element.removeEventListener("keyup", contaEnter);
            element.addEventListener("keyup", contaEnter);
        });
        let comentarios = document.querySelectorAll(
            ".xi81zsa.xo1l8bm.xlyipyv.xuxw1ft.x49crj4.x1ed109x.xdl72j9.x1iyjqo2.xs83m0k.x6prxxf.x6ikm8r.x10wlt62.x1y1aw1k.xn6708d.xwib8y2.x1ye3gou"
        );
        comentarios.forEach((element) => {
            element.removeEventListener("keyup", contaEnterC);
            element.addEventListener("keyup", contaEnterC);
        });

        comentarios = document.querySelectorAll(
            ".x9f619.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.x1qughib.x6s0dn4.xozqiw3.x1q0g3np.xcud41i.x139jcc6.x4cne27.xifccgj"
        );
        comentarios.forEach((element) => {
            element.removeEventListener("click", contaCliqueC);
            element.addEventListener("click", contaCliqueC);
        });

        //let excluir = document.querySelectorAll('.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.xl56j7k.x6s0dn4.xozqiw3.x1q0g3np.xi112ho.x17zwfj4.x585lrc.x1403ito.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.xbxaen2.x1u72gb5.xtvsq51.x1r1pt67')

        //excluir.forEach(element => element.addEventListener('click', exclui))
    } else if (url == "www.instagram.com") {
        if (window.location.href.split("/")[3] == "direct" && window.location.href.split("/")[4] == "t") {
            console.log(123)
            let chatI = document.querySelector(
                ".x6s0dn4.x78zum5.x1gg8mnh.x1pi30zi.xlu9dua"
            );
            chatI.addEventListener("keyup", contaEnter);

            let cliqueI = document.querySelectorAll(
                ".x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.xdl72j9.x2lah0s.xe8uvvx.xdj266r.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x1lku1pv.x1a2a7pz.x6s0dn4.xjyslct.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x9f619.x1ypdohk.x1f6kntn.xwhw2v2.xl56j7k.x17ydfre.x2b8uid.xlyipyv.x87ps6o.x14atkfc.xcdnw81.x1i0vuye.xjbqb8w.xm3z3ea.x1x8b98j.x131883w.x16mih1h.x972fbf.xcfux6l.x1qhh985.xm0m39n.xt7dq6l.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x1n5bzlp.x173jzuc.x1yc6y37.x1s85apg.xfs2ol5"
            );

            cliqueI.forEach((element) => {
                element.addEventListener("click", contaClique);
            });
        }else{
            let chatI = document.querySelectorAll('.x1i0vuye.xvbhtw8.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x5n08af.x78zum5.x1iyjqo2.x1qlqyl8.x1d6elog.xlk1fp6.x1a2a7pz.xexx8yu.x4uap5.x18d9i69.xkhd6sd.xtt52l0.xnalus7.xs3hnx8.x1bq4at4.xaqnwrm')
            chatI.forEach(element => element.addEventListener('keyup', contaEnterC))

            cliqueI = document.querySelectorAll('.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.xdl72j9.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x1lku1pv.x1a2a7pz.x6s0dn4.xjyslct.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x9f619.x1ypdohk.x1f6kntn.xwhw2v2.xl56j7k.x17ydfre.x2b8uid.xlyipyv.x87ps6o.x14atkfc.xcdnw81.x1i0vuye.xjbqb8w.xm3z3ea.x1x8b98j.x131883w.x16mih1h.x972fbf.xcfux6l.x1qhh985.xm0m39n.xt0psk2.xt7dq6l.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x1n5bzlp.x173jzuc.x1yc6y37')
            cliqueI.forEach(element => element.style.background = 'red')
        }
    }
};

function contaClique(event) {
    window.location.href.split("/")[2] == "www.facebook.com"
        ? salvarMsgs("mensagemFacebook")
        : salvarMsgs("mensagemInstagram");
}

function contaCliqueC(event) {
    window.location.href.split("/")[2] == "www.facebook.com"
        ? salvarMsgs("comentarioFacebook")
        : salvarMsgs("comentarioInstagram");
}

function contaEnter(event) {
    if (event.which === 13 && ultimaM !== "") {
        window.location.href.split("/")[2] == "www.facebook.com"
            ? salvarMsgs("mensagemFacebook")
            : salvarMsgs("mensagemInstagram");
    }
    ultimaM = event.srcElement.children[0].children[0].textContent;
}

function contaEnterC(event) {
    if (event.which === 13 && ultimaC !== "") {
        setTimeout(() => {
            if (event.srcElement.children[0].children[0].textContent == "") {
                window.location.href.split("/")[2] == "www.facebook.com"
                    ? salvarMsgs("comentarioFacebook")
                    : salvarMsgs("comentarioInstagram");
            }
        }, 1000);
    }
}

function exclui(event) {
    salvarMsgs("excluidas");
}

function salvarMsgs(type) {
    chrome.storage.local.get(null, (result) => {
        let userId = result.secret;
        let link = result.link;

        fetch(link + "/api/somar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: userId,
                data: dataAtual,
                tipo: type,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((erro) => console.error(erro));
    });
}

if (
    window.location.href.split("/")[2] == "www.instagram.com" ||
    window.location.href.split("/")[2] == "www.facebook.com"
) {
    let intervalo = setInterval(
        escutador,
        1000,
        window.location.href.split("/")[2]
    );
}
