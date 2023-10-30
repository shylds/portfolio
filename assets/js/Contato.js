var meuObj;
function contato(){
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const texto = document.getElementById("texto").value;

    var valorTexto = '{"ownerRef":"' + name + '","emailFrom": "elison.s.ferreira@gmail.com","emailTo":"' + email + '","subject":"' + assunto + '","text":"' + texto + '"}'
    
    // Dados a serem enviados no corpo da solicitação
    const dadosParaEnvio = {
    ownerRef: name,
    emailFrom : "elison.s.ferreira@gmail.com",
    emailTo: email,
    subject: assunto,
    text: texto
    };

    // Configuração da solicitação
const urlDaApi = 'http://localhost:8080/sending-email';

fetch(urlDaApi, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dadosParaEnvio)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Erro na solicitação: ' + response.status);
    }
    return response.json();
})
.then(data => {
    // Processar a resposta da API
    console.log('Resposta da API:', data);
})
.catch(error => {
    console.error('Erro na solicitação:', error);
});

    alert('Obrigado pelo seu contato' );
    
}



