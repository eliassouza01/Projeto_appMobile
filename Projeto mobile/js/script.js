document.addEventListener("DOMContentLoaded", () => {

    const nome_login = localStorage.getItem("nomeUsuario");

    const nomeElemento = document.querySelector("#nome_login strong");

    if (nome_login && nomeElemento) {
        nomeElemento.textContent = nome_login;
    }

   
    if (nome_login) {
        alert(`Olá ${nome_login}! Bem-vindo ao Cuidar!`);
    }


    document.querySelectorAll(".nav-item[data-page]").forEach((item) => {

        item.addEventListener("click", () => {

            const page = item.dataset.page;

            if (page) {
                window.location.href = page;
            }

        });

    });


    // ======================================
    // FEEDBACK AO CONFIRMAR UMA DOSE
    // ======================================

    const confirmButton = document.querySelector(".confirm");

    if (confirmButton) {

        confirmButton.addEventListener("click", () => {

            confirmButton.textContent = "✓  Dose confirmada!";

            confirmButton.style.background = "#087f65";

        });

    }


    // ======================================
    // BOTÃO DE CADASTRAR REMÉDIO
    // ======================================

    const addButton = document.querySelector(".add-button");

    if (addButton) {

        addButton.addEventListener("click", () => {

            alert("Aqui você pode abrir o formulário para cadastrar um novo remédio.");

        });

    }

});