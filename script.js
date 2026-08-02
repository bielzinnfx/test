/* =====================================================
   CONFIGURAÇÃO
===================================================== */

/*
   COLOQUE SEU NÚMERO DO WHATSAPP AQUI.

   Exemplo:
   5548991234567

   Regras:
   - Começa com 55
   - Depois DDD
   - Depois número
   - NÃO coloque +
   - NÃO coloque espaços
   - NÃO coloque parênteses
   - NÃO coloque traços
*/

const MEU_NUMERO = "SEU_NUMERO_AQUI";


/* =====================================================
   ENTRADA
===================================================== */

function entrar() {

    const campo = document.getElementById("nome");
    const mensagem = document.getElementById("mensagem");

    if (!campo) return;

    const nome = campo.value.trim();

    if (nome === "") {

        if (mensagem) {
            mensagem.innerText =
                "Ei 😂 primeiro coloca seu nome! ❤️";
        }

        return;
    }

    localStorage.setItem("nomeEspecial", nome);

    window.location.href = "index.html";
}


/* =====================================================
   BOTÃO NÃO FUGINDO
===================================================== */

function fugir() {

    const botao = document.getElementById("nao");

    if (!botao) return;

    const largura =
        window.innerWidth - botao.offsetWidth - 20;

    const altura =
        window.innerHeight - botao.offsetHeight - 20;

    const x =
        Math.max(10, Math.random() * largura);

    const y =
        Math.max(10, Math.random() * altura);

    botao.style.position = "fixed";
    botao.style.left = x + "px";
    botao.style.top = y + "px";
    botao.style.zIndex = "999";
}


/* =====================================================
   PEGAR NOME SALVO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const nome =
            localStorage.getItem("nomeEspecial");

        const display =
            document.getElementById("nomeDisplay");

        if (nome && display) {
            display.innerText = nome;
        }

    }
);


/* =====================================================
   FUNÇÃO PRINCIPAL DO WHATSAPP
===================================================== */

function mandarParaWhatsApp(tipo, escolha) {

    if (MEU_NUMERO === "SEU_NUMERO_AQUI") {

        alert(
            "Você ainda não colocou seu número no script.js ❤️"
        );

        return;
    }

    const nome =
        localStorage.getItem("nomeEspecial") || "Ela";


    const mensagem =
`❤️ NOSSO MATCH ❤️

👩 Nome: ${nome}

${tipo}: ${escolha}

✨ Ela acabou de fazer uma escolha no site.`;


    const link =
        "https://wa.me/" +
        MEU_NUMERO +
        "?text=" +
        encodeURIComponent(mensagem);


    window.open(link, "_blank");
}


/* =====================================================
   ESCOLHER FILME
===================================================== */

function escolherFilme(filme) {

    const resultado =
        document.getElementById("resultado");

    if (resultado) {

        resultado.innerHTML =
            `
            🎬 Você escolheu
            <strong>${filme}</strong>! ❤️
            <br><br>
            Agora é só preparar a pipoca 🍿
            `;

        resultado.classList.add("show");
    }


    // MANDA A ESCOLHA PARA SEU WHATSAPP

    mandarParaWhatsApp(
        "🎬 Filme escolhido",
        filme
    );
}


/* =====================================================
   ESCOLHER JOGO
===================================================== */

function escolherJogo(jogo) {

    const resultado =
        document.getElementById("resultadoJogo");

    if (resultado) {

        resultado.innerHTML =
            `
            🎮 Você escolheu
            <strong>${jogo}</strong>! ❤️
            <br><br>
            Então bora jogar! 🔥
            `;

        resultado.classList.add("show");
    }


    // MANDA A ESCOLHA PARA SEU WHATSAPP

    mandarParaWhatsApp(
        "🎮 Jogo escolhido",
        jogo
    );
}


/* =====================================================
   ENVIAR MENSAGEM PELO WHATSAPP
===================================================== */

function enviarWhatsApp() {

    const campo =
        document.getElementById("mensagemContato");

    const aviso =
        document.getElementById("aviso");

    if (!campo) return;

    const mensagem =
        campo.value.trim();


    if (mensagem === "") {

        if (aviso) {

            aviso.innerText =
                "Escreve alguma coisinha primeiro 🥺❤️";
        }

        return;
    }


    if (MEU_NUMERO === "SEU_NUMERO_AQUI") {

        if (aviso) {

            aviso.innerText =
                "Você precisa colocar seu número no script.js ❤️";
        }

        return;
    }


    const nome =
        localStorage.getItem("nomeEspecial") || "Ela";


    const texto =
`💌 MENSAGEM DO NOSSO MATCH 💌

👩 ${nome} escreveu:

"${mensagem}"

❤️ Mensagem enviada pelo site.`;


    const link =
        "https://wa.me/" +
        MEU_NUMERO +
        "?text=" +
        encodeURIComponent(texto);


    window.open(link, "_blank");


    if (aviso) {

        aviso.innerText =
            "WhatsApp aberto! Agora é só enviar ❤️";
    }
}


/* =====================================================
   MODAL ROMÂNTICO
===================================================== */

function mostrarAmor() {

    const modal =
        document.getElementById("modal");

    if (modal) {
        modal.classList.add("show");
    }
}


function fecharModal() {

    const modal =
        document.getElementById("modal");

    if (modal) {
        modal.classList.remove("show");
    }
}


/* =====================================================
   FECHAR MODAL CLICANDO FORA
===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById("modal");

        if (
            modal &&
            event.target === modal
        ) {

            modal.classList.remove("show");
        }

    }
);