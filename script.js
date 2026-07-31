// ========================================
// COLOQUE SEU NÚMERO AQUI
// ========================================

// Exemplo: 5548999999999
// Sem +, espaços, parênteses ou traços.

const MEU_NUMERO = "5549999308964";


// ========================================
// ENTRAR NO SITE
// ========================================

function entrar() {

    const nome = document.getElementById("nome");
    const mensagem = document.getElementById("mensagem");

    if (!nome.value.trim()) {

        mensagem.innerText =
            "Ei 😭 primeiro coloca seu nome! ❤️";

        return;
    }

    localStorage.setItem(
        "nomeEspecial",
        nome.value.trim()
    );

    window.location.href = "index.html";
}


// ========================================
// BOTÃO NÃO FUGINDO
// ========================================

function fugir() {

    const botao = document.getElementById("nao");

    if (!botao) return;

    const maxX =
        window.innerWidth - botao.offsetWidth - 20;

    const maxY =
        window.innerHeight - botao.offsetHeight - 20;

    const x = Math.max(10, Math.random() * maxX);
    const y = Math.max(10, Math.random() * maxY);

    botao.style.position = "fixed";
    botao.style.left = x + "px";
    botao.style.top = y + "px";
}


// ========================================
// MOSTRAR NOME NA PÁGINA INICIAL
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const nome =
        localStorage.getItem("nomeEspecial");

    const saudacao =
        document.getElementById("saudacao");

    if (nome && saudacao) {

        saudacao.innerHTML =
            `Oi, <strong>${nome}</strong> ❤️<br>
            Preparei esse cantinho especialmente para você.`;
    }

});


// ========================================
// FUNÇÃO PARA MANDAR ESCOLHA AO WHATSAPP
// ========================================

function mandarEscolha(tipo, escolha) {

    const nome =
        localStorage.getItem("nomeEspecial") || "Ela";

    const texto =
        `❤️ *Nosso Match*%0A%0A` +
        `👩 ${nome}%0A` +
        `${tipo}: *${escolha}*%0A%0A` +
        `Ela acabou de fazer uma escolha no site 😍`;

    const link =
        `https://wa.me/${MEU_NUMERO}?text=${texto}`;

    window.open(link, "_blank");
}


// ========================================
// ESCOLHA DE FILME
// ========================================

function escolherFilme(filme) {

    const resultado =
        document.getElementById("resultado");

    if (resultado) {

        resultado.innerHTML =
            `🎬 Você escolheu <strong>${filme}</strong>! ❤️<br><br>
             Agora é só preparar a pipoca 🍿`;

        resultado.style.display = "block";
    }

    // MANDA PARA SEU WHATSAPP
    mandarEscolha("🎬 Filme", filme);
}


// ========================================
// ESCOLHA DE JOGO
// ========================================

function escolherJogo(jogo) {

    const resultado =
        document.getElementById("resultadoJogo");

    if (resultado) {

        resultado.innerHTML =
            `🎮 Você escolheu <strong>${jogo}</strong>! ❤️<br><br>
             Então bora jogar! 🔥`;

        resultado.style.display = "block";
    }

    // MANDA PARA SEU WHATSAPP
    mandarEscolha("🎮 Jogo", jogo);
}


// ========================================
// MENSAGEM DA PÁGINA DE CONTATO
// ========================================

function enviarWhatsApp() {

    const campo =
        document.getElementById("mensagemContato");

    const aviso =
        document.getElementById("aviso");

    const mensagem =
        campo.value.trim();

    if (!mensagem) {

        aviso.innerText =
            "Escreve alguma coisinha primeiro 🥺❤️";

        return;
    }

    const nome =
        localStorage.getItem("nomeEspecial") || "Ela";

    const texto =
        `❤️ *Mensagem do Nosso Match*%0A%0A` +
        `👩 ${nome} escreveu:%0A%0A` +
        `"${mensagem}"`;

    const link =
        `https://wa.me/${MEU_NUMERO}?text=${texto}`;

    window.open(link, "_blank");

    aviso.innerText =
        "Mensagem preparada para enviar ❤️";
}
