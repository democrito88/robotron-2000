const botoes = document.querySelectorAll(".controle-ajuste");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const cores = document.querySelectorAll(".botao");
const imagem = document.querySelectorAll(".robo")[0];

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

botoes.forEach((botao) => {
    botao.addEventListener("click", (e) => {
        if(botao.textContent === "+"){
            botao.parentNode.childNodes[3].value = parseInt(botao.parentNode.childNodes[3].value) + 1;
        }
        if(botao.textContent === "-" && botao.parentNode.childNodes[3].value > 0){
            botao.parentNode.childNodes[3].value = parseInt(botao.parentNode.childNodes[3].value) - 1;
        }

        atualizaEstatisticas(e.target.dataset.peca);
    });
});

function atualizaEstatisticas(peca){
    estatisticas.forEach((estatistica) => {
        estatistica.textContent = parseInt(estatistica.textContent) + pecas[peca][estatistica.dataset.estatistica]
    });
}

cores.forEach((cor) => {
    cor.addEventListener("click", (e) => {
        let corRobo = e.target.dataset.cor;
        imagem.setAttribute("src", "img/extra/Robotron 2000 - "+corRobo+"/Robotron 2000 - "+corRobo+".png");
    })
});