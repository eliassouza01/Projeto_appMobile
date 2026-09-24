const formCadastro = document.getElementById("formCadastro");

formCadastro.addEventListener("submit", function (event) {

    // Impede o recarregamento da página
    event.preventDefault();


    // Pega os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const senha = document.getElementById("senha").value;


    // =========================
    // VALIDAÇÕES
    // =========================

    if (nome === "") {
        alert("Digite seu nome completo.");
        return;
    }

    if (celular === "") {
        alert("Digite seu número de celular. \${nome}");
        return;
    }

    if (senha === "") {
        alert("Digite uma senha.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }


    // =========================
    // VERIFICA SE JÁ EXISTE
    // =========================

    const usuarioExistente = localStorage.getItem("usuarioCuidar");

    if (usuarioExistente) {

        const usuario = JSON.parse(usuarioExistente);

        if (usuario.celular === celular) {

            alert("Já existe uma conta cadastrada com esse número.");

            return;
        }
    }


    // =========================
    // CRIA O USUÁRIO
    // =========================

    const usuario = {

        nome: nome,

        email: email,

        celular: celular,

        senha: senha
    };


    // =========================
    // SALVA NO LOCAL STORAGE
    // =========================

    localStorage.setItem(
        "usuarioCuidar",
        JSON.stringify(usuario)
    );


    // =========================
    // SUCESSO
    // =========================

    alert("Conta criada com sucesso!");


    // Vai para o login
    window.location.href = "login.html";

});