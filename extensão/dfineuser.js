document.querySelector('form').addEventListener('submit', ()=>{
    console.log(123)
    let texto = document.querySelector('input').value

    var dados = {
        user: texto,
        userAgent: navigator.userAgent
    }

    chrome.storage.local.set(dados)

    window.close()
})