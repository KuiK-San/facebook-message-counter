document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#salvar').addEventListener('click', () => {
        let texto = document.querySelector('input').value

        var dados = {
            user: texto
        }
        
        chrome.storage.local.set(dados)

        
    })
})