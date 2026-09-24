const botaoEntrar = document.getElementById("botaoEntrar");

const mensagem = document.getElementById("mensagem");


// ======================================
// BOTÃO ENTRAR
// ======================================

botaoEntrar.addEventListener("click", function () {

    const telefone = document
        .getElementById("telefone")
        .value
        .trim();

    const senha = document
        .getElementById("senha")
        .value;


    // ======================================
    // VALIDA CAMPOS
    // ======================================

    if (telefone === "") {

        mostrarMensagem(
            "Digite seu número de telefone.",
            "erro"
        );

        return;
    }


    if (senha === "") {

        mostrarMensagem(
            "Digite sua senha.",
            "erro"
        );

        return;
    }


    // ======================================
    // BUSCA USUÁRIO
    // ======================================

    const usuarioSalvo = localStorage.getItem("usuarioCuidar");


    // Se não existe cadastro
    if (!usuarioSalvo) {

        mostrarMensagem(
            "Nenhuma conta cadastrada. Crie sua conta primeiro.",
            "erro"
        );

        return;
    }


    // Transforma JSON em objeto
    const usuario = JSON.parse(usuarioSalvo);


    // ======================================
    // VERIFICA TELEFONE
    // ======================================

    if (usuario.celular !== telefone) {

        mostrarMensagem(
            "Telefone ou senha incorretos.",
            "erro"
        );

        return;
    }


    // ======================================
    // VERIFICA SENHA
    // ======================================

    if (usuario.senha !== senha) {

        mostrarMensagem(
            "Telefone ou senha incorretos.",
            "erro"
        );

        return;
    }


    // ======================================
    // LOGIN REALIZADO
    // ======================================

    mostrarMensagem(
        "Login realizado com sucesso!",
        "sucesso"
    );


    // Salva que o usuário está logado
    localStorage.setItem(
        "usuarioLogado",
        "true"
    );


    // Guarda o nome do usuário
    localStorage.setItem(
        "nomeUsuario",
        usuario.nome
    );


    // ======================================
    // REDIRECIONA
    // ======================================

    setTimeout(function () {

        // Troquem pelo nome da tela principal
        window.location.href = "index.html";

    }, 1000);

});


// ======================================
// FUNÇÃO DE MENSAGEM
// ======================================

function mostrarMensagem(texto, tipo) {

    mensagem.textContent = texto;

    mensagem.className = tipo;

}