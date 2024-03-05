document.addEventListener("DOMContentLoaded",function(){
    const userInput = document.getElementById("userField");
    const passwordInput = document.getElementById("passwordField");
    const defaultUser = "admin";
    const defaultPassword = "admin";
    const login = document.getElementById("loginButton");

    login.addEventListener("click", function(){
       if (userInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
        if (userInput.value == defaultUser && passwordInput.value == defaultPassword) {
            window.location.href = "../html/pokemon.html"
        } else {
            alert("Usuário ou senha incorretos.");
        }
       } else {
        alert("Preencha todos os campos!");
       }
    });
});