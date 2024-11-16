document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário
        logar(); // Chama a função logar
    }
});



function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == 'admin' && senha == 'admin') {
        alert('Sucesso');
        location.href = "/pages/home.html"
    } else{
        alert('Usuario ou senha incorretos ')
    }
}