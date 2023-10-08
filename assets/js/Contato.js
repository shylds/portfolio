var meuObj;
function contato(){
    //const formEl = document.getElementById('contactMe__form');
    
    //console.log(formEl);
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const texto = document.getElementById("texto").value;

    var valorTexto = '{"ownerRef":"' + name + '","emailFrom": "elison.s.ferreira@gmail.com","emailTo":"' + email + '","subject":"' + assunto + '","text":"' + texto + '"}'
    
    var obj = JSON.parse(valorTexto);
    
    var testeJSON = JSON.stringify(obj);
    //console.log(testeJSON);
    //console.log(name, email, assunto, texto);
    

    fetch("http://localhost:8080/sending-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: testeJSON,
    })
    .then((response) => response.json())
    .then(data => console.log(data))
    
    alert('Obrigado pelo seu contato' );
    
}



