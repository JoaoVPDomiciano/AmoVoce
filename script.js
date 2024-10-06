const countdownDate = new Date("2023-11-18T00:00:00").getTime();
const contador = document.getElementById("contador");

function atualizarContador() {
    const agora = new Date().getTime();
    const distancia = agora - countdownDate; // Calcular a diferença desde a data

    const anos = Math.floor(distancia / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((distancia % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((distancia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    contador.innerHTML = `${anos} anos, ${meses} meses, ${dias} dias <br> ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

const intervalo = setInterval(atualizarContador, 1000);

// Adicionar flocos de coração
function criarFlocoDeCoracao() {
    const floco = document.createElement("img");
    floco.src = "img/coracao.png";
    floco.className = "snowHarts";
    
    // Define a posição aleatória e tamanho reduzido
    const leftPosition = Math.random() * 100; // Posição aleatória horizontal
    floco.style.left = leftPosition + "vw"; // Defina a posição aleatória
    
    floco.style.width = "74.625x"; // Defina a largura
    floco.style.height = "52.25px"; // Defina a altura
    floco.style.animationDuration = (Math.random() * 5 + 5) + "s"; // Duração da queda aleatória

    document.body.appendChild(floco);

    floco.addEventListener('animationend', () => {
        floco.remove(); // Remove o coração após a animação
    });
}

setInterval(criarFlocoDeCoracao, 1000); // Intervalo para gerar novos corações
