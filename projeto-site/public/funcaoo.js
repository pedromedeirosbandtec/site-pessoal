function escolher() {
    img_instrumento.src = tocar.value;
}


function Registrar() {
    var login_email = email.value;
    var login_senha = senha.value;
    var login_confirmarsenha = confirmarsenha.value;

if (login_email == '@musica.com.br' && login_senha == "musicalove" && login_confirmarsenha == `${login_senha}`)  {
    window.location.href = "login.html";

    alert('Usuário MUSICAL validado! :)');
} else {
    alert('Usuário MUSICAL não validado! :(');
}    
}