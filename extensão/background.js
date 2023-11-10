chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message && request.acao == 'salvar'){
            var dataAtual = new Date();

            var dia = dataAtual.getDate();
            var mes = dataAtual.getMonth() + 1; 
            var ano = dataAtual.getFullYear();

            var dataFormatada = (dia < 10 ? '0' : '') + dia + '/' + (mes < 10 ? '0' : '') + mes + '/' + ano;

            /* chrome.storage.local.get(null, (result) => {
                console.log(result)
                if(result.user == ''){
                    chrome.tabs.create({ url: "defineUser.html" });
                }
            })
            */
            chrome.storage.local.get('user', (result) => {

                chrome.storage.local.set({[result.user]: {user: result.user, msgs: request.qtd}})
            })

            chrome.storage.local.get(`dia_${dataFormatada}`, (result) => {console.log(result)})

        }
    }
);
chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === "install") {
        chrome.tabs.create({ url: "defineUser.html" });
    }
});

