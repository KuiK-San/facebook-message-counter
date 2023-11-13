document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    let link = event.target.getAttribute('action')

    var nome = document.getElementById('nome').value;
    var id = document.getElementById('id').value
    var semId = document.querySelector('#semId').checked

    if (semId){
        fetch(link, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({semId: semId, id: id, nome: nome})
        })
        .then(response => response.json())
        .then(data => {
            document.querySelector('form').innerHTML = '<h1>olá '+ data.nome + ' seu indentificador único foi criado, é o id '+ data.id+' anote em um lugar seguro</h1>';
            chrome.storage.local.set(data)
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
    }else{
        fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({semId: semId, id: id, nome: nome})
            })
            .then(response => response.json())
            .then(data => {
                if(data.status){

                    document.querySelector('form').innerHTML = '<h1>Usuario Logado!</h1>';
    
                    chrome.storage.local.set(data)
                    setTimeout(()=> {window.close()}, 10000)
                }else{
                    document.querySelector('form').innerHTML += '<h3>usuario ou id invalido</h3>'
                }
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });
    }

});
document.querySelector('#semId').addEventListener('change', (event) => {
    if(document.querySelector('#semId').checked){
        document.querySelector("#id").removeAttribute('required')
        document.querySelector("#id").setAttribute('disabled', 'disabled')
        document.querySelector("#id").value = ''
        
    }else{
        document.querySelector("#id").setAttribute('required', 'required')
        document.querySelector("#id").removeAttribute('disabled')
        document.querySelector("#id").value = ''
    }
})