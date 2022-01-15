kaboom({
    global: true,
    fullscreen: true,
    scale: 1.5,
    debug: true,
    clearColor: [0, 0, 0, 0]
})

let vida1
let vida2

loadSprite('kenzo', 'https://i.ibb.co/FxPBdnt/New-Piskel-4.png')
loadSprite('kenzo2', 'https://i.ibb.co/7yMrLZH/New-Piskel-4-3.png')

loadSprite('chao', 'https://i.ibb.co/XzwXz89/New-Piskel-5.png')

const movespeed = 120
const jumpforce = 360

scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const map = [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',
    ]

    const levelCfg = {
        width: 20,
        height: 20,
        ',': [sprite('chao'), solid(), scale(2)]
    }

    adicionarJogador();

    const gameLevel = addLevel(map, levelCfg)
})

function adicionarJogador() {

    let jogador1 = localStorage.getItem('player1');
    let jogador2 = localStorage.getItem('player2');

    if (jogador1 == 'Maria') {

        vida1 = 50

        const player = add([
            sprite('kenzo'), solid(),
            scale(1.5),
            pos(250, 20),
            body()
        ])
    }
    if (jogador1 == 'Letícia') {

        vida1 = 40

        const player = add([
            sprite('kenzo'), solid(),
            scale(1.5),
            pos(250, 20),
            body()
        ])
    }
    if (jogador1 == 'João') {

        vida1 = 50

        const player = add([
            sprite('kenzo'), solid(),
            scale(1.5),
            pos(250, 20),
            body()
        ])
    }
    if (jogador1 == 'Felipe') {

        vida1 = 30

        const player = add([
            sprite('kenzo'), solid(),
            scale(1.5),
            pos(250, 20),
            body()
        ])
    }
    if (jogador1 == 'Kenzo') {

        vida1 = 60

        const player = add([
            sprite('kenzo'), solid(),
            scale(1.5),
            pos(250, 20),
            body()
        ])
    }

    if (jogador2 == 'Maria') {

        vida2 = 50

        const player = add([
            sprite('kenzo2'), solid(),
            scale(1.5),
            pos(600, 20),
            body()
        ])
    }
    if (jogador2 == 'Letícia') {

        vida2 = 40

        const player = add([
            sprite('kenzo2'), solid(),
            scale(1.5),
            pos(600, 20),
            body()
        ])
    }
    if (jogador2 == 'João') {

        vida2 = 50

        const player = add([
            sprite('kenzo2'), solid(),
            scale(1.5),
            pos(600, 20),
            body()
        ])
    }
    if (jogador2 == 'Felipe') {

        vida2 = 30

        const player = add([
            sprite('kenzo2'), solid(),
            scale(1.5),
            pos(600, 20),
            body()
        ])
    }
    if (jogador2 == 'Kenzo') {

        vida2 = 60

        const player = add([
            sprite('kenzo2'), solid(),
            scale(1.5),
            pos(600, 20),
            body()
        ])
    }

    iniciarJogo(jogador1, jogador2);
}

let pronto
let pronto2
let varPronto1 = 0;
let varPronto2 = 0;
let botaoComecar

let linhaInst
let instrucao1
let instrucao2

function iniciarJogo(p1, p2) {

    botaoComecar = document.createElement('button');
    botaoComecar.className = 'botaoComecar'
    botaoComecar.innerText = 'Começar'
    botaoComecar.onclick = comecarJogo

    linhaInst = document.createElement('div');
    linhaInst.className = 'instrucao'

    instrucao1 = document.createElement('div');
    instrucao1.className = 'inst';

    instrucao2 = document.createElement('div');
    instrucao2.className = 'inst';

    instrucao1.style.borderRight = '1px solid black'

    document.body.appendChild(linhaInst);
    document.body.appendChild(botaoComecar)
    linhaInst.appendChild(instrucao1)
    linhaInst.appendChild(instrucao2)

    criarInstrucao1(p1, instrucao1);
    criarInstrucao2(p2, instrucao2);
}

function criarInstrucao1(p, div) {

    let personagem = document.createElement('h1');
    personagem.innerText = p + " - Player 1"

    let ataque1 = document.createElement('div');
    ataque1.className = 'ataques'

    let ataque2 = document.createElement('div');
    ataque2.className = 'ataques'

    let ataque3 = document.createElement('div');
    ataque3.className = 'ataques'

    let ataque4 = document.createElement('div');
    ataque4.className = 'ataques'

    let ataque5 = document.createElement('div');
    ataque5.className = 'ataques'

    let vida = document.createElement('div');
    vida.className = 'vida'

    pronto = document.createElement('button');
    pronto.className = 'pronto'
    pronto.innerText = 'Pronto'
    pronto.onclick = botaoPronto

    funcaoVida(p, vida);
    funcaoAtq1(p, ataque1);
    funcaoAtq2(p, ataque2);
    funcaoAtq3(p, ataque3);
    funcaoAtq4(p, ataque4);
    funcaoAtq5(p, ataque5);

    div.appendChild(personagem);
    div.appendChild(vida)
    div.appendChild(pronto)

    let divAtaques = document.createElement('div');
    divAtaques.className = 'divAtaques'

    divAtaques.appendChild(ataque1)
    divAtaques.appendChild(ataque2)
    divAtaques.appendChild(ataque3)
    divAtaques.appendChild(ataque4)
    divAtaques.appendChild(ataque5)
    div.appendChild(divAtaques)
}

function criarInstrucao2(p, div) {

    let personagem = document.createElement('h1');
    personagem.innerText = p + " - Player 2"

    let ataque1 = document.createElement('div');
    ataque1.className = 'ataques'

    let ataque2 = document.createElement('div');
    ataque2.className = 'ataques'

    let ataque3 = document.createElement('div');
    ataque3.className = 'ataques'

    let ataque4 = document.createElement('div');
    ataque4.className = 'ataques'

    let ataque5 = document.createElement('div');
    ataque5.className = 'ataques'

    let vida = document.createElement('div');
    vida.className = 'vida'

    pronto2 = document.createElement('button');
    pronto2.className = 'pronto2'
    pronto2.innerText = 'Pronto'
    pronto2.onclick = botaoPronto2

    funcaoVida(p, vida);
    funcaoAtq1(p, ataque1);
    funcaoAtq2(p, ataque2);
    funcaoAtq3(p, ataque3);
    funcaoAtq4(p, ataque4);
    funcaoAtq5(p, ataque5);

    div.appendChild(personagem);
    div.appendChild(vida)
    div.appendChild(pronto2)

    let divAtaques = document.createElement('div');
    divAtaques.className = 'divAtaques'

    divAtaques.appendChild(ataque1)
    divAtaques.appendChild(ataque2)
    divAtaques.appendChild(ataque3)
    divAtaques.appendChild(ataque4)
    divAtaques.appendChild(ataque5)
    div.appendChild(divAtaques)
}

function botaoPronto() {

    if (varPronto1 == 0) {
        pronto.style.backgroundColor = 'green';
        varPronto1 = 1;
    } else {
        pronto.style.backgroundColor = 'red';
        varPronto1 = 0;
    }
}

function botaoPronto2() {

    if (varPronto2 == 0) {
        pronto2.style.backgroundColor = 'green';
        varPronto2 = 1;
    } else {
        pronto2.style.backgroundColor = 'red';
        varPronto2 = 0;
    }
}

function funcaoVida(p, div) {

    if (p == "Maria") {
        div.innerText = "Vida: 50"
    }
    if (p == "Letícia") {
        div.innerText = 'Vida: 40'
    }
    if (p == "João") {
        div.innerText = 'Vida: 50'
    }
    if (p == "Felipe") {
        div.innerText = 'Vida: 30'
    }
    if (p == "Kenzo") {
        div.innerText = 'Vida: 60'
    }
}

function funcaoAtq1(p, div) {

    if (p == "Maria") {
        div.innerText = 'Soco = golpeia o inimigo causando 5 de dano'
    }
    if (p == "Letícia") {
        div.innerText = 'Soco = golpeia o inimigo causando 6 de dano'
    }
    if (p == "João") {
        div.innerText = 'Soco = golpeia o inimigo causando 6 de dano'
    }
    if (p == "Felipe") {
        div.innerText = 'Soco = golpeia o inimigo causando 6 de dano'
    }
    if (p == "Kenzo") {
        div.innerText = 'Soco = golpeia o inimigo causando 6 de dano'
    }
}

function funcaoAtq2(p, div) {

    if (p == "Maria") {
        div.innerText = 'Puxada de cabelo = puxa o cabelo do inimigo, causando 8 de dano, porém levando 2 de dano'
    }
    if (p == "Letícia") {
        div.innerText = 'Calma = Sua mente calma te deixa focada, causando 4 de dano ao inimigo e curando 4 de vida'
    }
    if (p == "João") {
        div.innerText = 'Pensar = Você observa calmamente seu inimigo e descobre seu ponto fraco, o curando em 3 de vida, e ganhando +4 de dano na próxima rodada'
    }
    if (p == "Felipe") {
        div.innerText = 'Preguiça = Sua preguiça é contagiante, o que deixa o inimigo causando -20% de dano nas próximas 5 rodadas, e o curando em +5'
    }
    if (p == "Kenzo") {
        div.innerText = 'Frio = Sua fraqueza ao frio te faz perder 12 de vida, porém fazendo o inimigo perder 2 rodadas'
    }
}
function funcaoAtq3(p, div) {

    if (p == "Maria") {
        div.innerText = 'Fofoca = Você exclui o seu inimigo das fofocas, fazendo-o perder uma rodada'
    }
    if (p == "Letícia") {
        div.innerText = 'Jogar casaco = Um casaco pode ser mortal, dando 3 de dano ao inimigo e te deixando sem levar dano por 1 rodada'
    }
    if (p == "João") {
        div.innerText = 'Grosseria = Sua boca suja deixa seu inimigo triste, causando 4 de dano, e reduzindo o ataque do oponente na próxima rodada em -4'
    }
    if (p == "Felipe") {
        div.innerText = 'Rinite = Tossir na cara do inimigo sempre é uma opção, o que dá 5 de dano e o faz levar o dobro de dano na próxima rodada'
    }
    if (p == "Kenzo") {
        div.innerText = 'Líder = Suas habilidades ruins em liderança espantam o inimigo, o fazendo dar 50% menos dano na próxima rodada, além de ganhar +3 de dano'
    }
}
function funcaoAtq4(p, div) {

    if (p == "Maria") {
        div.innerText = 'Tapa = Você dá um tapa bem lento na cara do inimigo, fazendo-o perder 10 de vida, porém perdendo uma rodada.'
    }
    if (p == "Letícia") {
        div.innerText = 'Cabeçada = Você bate sua cabeça no inimigo, o que causa 7 de dano'
    }
    if (p == "João") {
        div.innerText = 'Se jogar = Ser sem vergonha tem seus pontos positivos, o que o faz se jogar em cima do seu inimigo, causando 8 de dano, porém inferindo -2 de dano na próxima rodada'
    }
    if (p == "Felipe") {
        div.innerText = 'Tirar aparelho = Aparelhos doem, então tirar eles te deixa forte. Você ganha +5 de dano nas próximas 2 rodadas'
    }
    if (p == "Kenzo") {
        div.innerText = 'Xingamento = Você intimida o inimigo com apenas um xingamento, causando 8 de dano'
    }
}
function funcaoAtq5(p, div) {

    if (p == "Maria") {
        div.innerText = 'Ultimate: Pintar cabelo = Suas mechas recém-pintadas revigoram e tranformam sua vida, ganhando mais 30 de vida (disponível a partir da rodada 8)'
    }
    if (p == "Letícia") {
        div.innerText = 'Ultimate: Devoradora de Livros = Sua grande habilidade de leitura é levada à vida real, dando 5 de dano ao inimigo e ganhando 2 rodadas extras (disponível a partir da rodada 12)'
    }
    if (p == "João") {
        div.innerText = 'Ultimate: Matemática = De alguma forma, você calcula o seu inimigo, tirando 30% da sua vida (disponível a partir da rodada 10)'
    }
    if (p == "Felipe") {
        div.innerText = 'Ultimate: Simulação = Você é expert em jogos de simulação, o suficiente para você mudar o próprio jogo em que você está. Os dois jogadores voltam à seu estado inicial, e você ganha +3 rodadas (disponível a partir da rodada 6)'
    }
    if (p == "Kenzo") {
        div.innerText = 'Ultimate: Fã clube número 1 = Você é parte do melhor fã clube do mundo, o que faz o inimigo ter medo de você, levando 40 de dano (disponível a partir da rodada 20)'
    }
}

function comecarJogo() {

    if (varPronto1 == 1 && varPronto2 == 1) {
        linhaInst.removeChild(instrucao1)
        linhaInst.removeChild(instrucao2)
        document.body.removeChild(botaoComecar)

        criarInterface();
    }
}

let rodada = 1;
let vidaP1, vidaP2
let numeroRodada

function criarInterface() {

    numeroRodada = document.createElement('span')
    numeroRodada.className = 'numeroRodada'
    numeroRodada.innerText = "Rodada " + rodada

    let iconeP1 = document.createElement('div');
    iconeP1.className = 'icone'

    let nomePlayer1 = document.createElement('div');
    nomePlayer1.className = 'nomePlayer'
    nomePlayer1.innerText = "Player 1"

    let personagem1 = document.createElement('div');
    personagem1.className = 'personagemPlayer'
    personagem1.innerText = localStorage.getItem('player1')

    vidaP2 = document.createElement('div')
    vidaP2.className = 'VidaP'
    vidaP2.innerText = vida2

    let iconeP2 = document.createElement('div');
    iconeP2.className = 'icone2'

    let nomePlayer2 = document.createElement('div');
    nomePlayer2.className = 'nomePlayer'
    nomePlayer2.innerText = "Player 2"

    let personagem2 = document.createElement('div');
    personagem2.className = 'personagemPlayer'
    personagem2.innerText = localStorage.getItem('player2')

    vidaP1 = document.createElement('div')
    vidaP1.className = 'VidaP'
    vidaP1.innerText = vida1

    iconeP1.appendChild(nomePlayer1)
    iconeP1.appendChild(personagem1)
    iconeP1.appendChild(vidaP1)

    iconeP2.appendChild(nomePlayer2)
    iconeP2.appendChild(personagem2)
    iconeP2.appendChild(vidaP2)

    document.body.appendChild(iconeP2)
    document.body.appendChild(iconeP1)
    document.body.appendChild(numeroRodada)

    jogo();
}

let varContinuar = 0;

function jogo() {

    mostrarRodada();

}

let botaoContinuar
let divRodada
let ataqueAnterior
let ataqueAnterior2

function mostrarRodada() {

    efeitoRodada()

    divRodada = document.createElement('div')
    divRodada.className = 'divRodada'

    if (rodada % 2 != 0) {
        divRodada.innerText = "Rodada de " + localStorage.getItem('player1') + " (player 1)"
    } else {
        divRodada.innerText = "Rodada de " + localStorage.getItem('player2') + " (player 2)"
    }

    botaoContinuar = document.createElement('button')
    botaoContinuar.className = 'botaoContinuar'
    botaoContinuar.innerText = 'Continuar'
    botaoContinuar.onclick = removerRodada

    linhaInst.appendChild(divRodada)
    linhaInst.appendChild(botaoContinuar)
    varContinuar = 1;
}

function removerRodada() {

    if (botaoContinuar) {
        linhaInst.removeChild(botaoContinuar);
    }
    if (divRodada) {
        linhaInst.removeChild(divRodada);
    }

    escolhaAtaques();
}

let linhaAtk1
let linhaAtk2
let Ult
let atk1
let atk2
let atk3
let atk4
let atk5

function escolhaAtaques() {

    linhaInst.style.display = 'block'
    linhaInst.style.paddingTop = '35px'
    let nomeP

    if (rodada % 2 != 0) {
        nomeP = localStorage.getItem('player1')
    } else {
        nomeP = localStorage.getItem('player2')
    }

    linhaAtk1 = document.createElement('div');
    linhaAtk1.className = 'linhaAtk';

    linhaAtk2 = document.createElement('div');
    linhaAtk2.className = 'linhaAtk';

    atk1 = document.createElement('button');
    atk1.className = 'botoesAtk'

    atk2 = document.createElement('button');
    atk2.className = 'botoesAtk'
    atk2.style.marginLeft = '15px'

    atk3 = document.createElement('button');
    atk3.className = 'botoesAtk'

    atk4 = document.createElement('button');
    atk4.className = 'botoesAtk'
    atk4.style.marginLeft = '15px'

    atk5 = document.createElement('button');
    atk5.className = 'botoesAtk'

    Ult = document.createElement('div');
    Ult.className = 'ult';

    funcaoUltimate(nomeP, atk5);

    atq1(nomeP, atk1);
    atq2(nomeP, atk2);
    atq3(nomeP, atk3);
    atq4(nomeP, atk4);
    atq5(nomeP, atk5);

    linhaAtk1.appendChild(atk1)
    linhaAtk1.appendChild(atk2)
    linhaAtk2.appendChild(atk3)
    linhaAtk2.appendChild(atk4)
    Ult.appendChild(atk5)

    linhaInst.appendChild(linhaAtk1)
    linhaInst.appendChild(linhaAtk2)
    linhaInst.appendChild(Ult)

    atk1.onclick = fAtk1;
    atk2.onclick = fAtk2;
    atk3.onclick = fAtk3;
    atk4.onclick = fAtk4;
    atk5.onclick = fAtk5;
}

function variaveis() {

    if (rodada == rodadacasaco) {
        vida1 = hpcasaco
    }
    if (rodada == rodadacasaco2) {
        vida2 = hpcasaco2
    }
    if (fator >= 1 && fator <= 6) {
        hppreguiça = vida1
        fator = fator + 1
    }
    if (fator >= 1 && fator <= 6) {
        dano = (hppreguiça - hp1) * 0.8
        hp1 = hppreguiça - dano
    }
    if (fator2 >= 1 && fator2 <= 6) {
        hppreguiça2 = hp2
        fator2 = fator2 + 1
    }
    if (fator2 >= 1 && fator2 <= 6) {
        dano2 = (hppreguiça2 - vida2) * 0.8
        vida2 = hppreguiça2 - dano2
    }
    if (rodada == rodadarinite) {
        y = (rodadahprinite - vida2) * 2
        vida2 = rodadahprinite - y
    }
    if (rodada == rodadarinite2) {
        y2 = (rodadahprinite2 - vida1) * 2
        vida1 = rodadahprinite2 - y2
    }
    if (rodada == rodadalider) {
        x = (rodadahplider - vida1) / 2
        vida1 = rodadahplider - x
    }
    if (rodada == rodadalider2) {
        x2 = (rodadahplider2 - vida2) / 2
        vida2 = rodadahplider2 - x2
    }
}

function funcaoUltimate(p, botao) {

    if (p == "Maria") {

        if (rodada > 7) {
            botao.style.backgroundColor = 'green'
        } else {
            botao.style.backgroundColor = 'red'
        }
    }
    if (p == "Letícia") {

        if (rodada > 11) {
            botao.style.backgroundColor = 'green'
        } else {
            botao.style.backgroundColor = 'red'
        }
    }
    if (p == "João") {

        if (rodada > 9) {
            botao.style.backgroundColor = 'green'
        } else {
            botao.style.backgroundColor = 'red'
        }
    }
    if (p == "Felipe") {

        if (rodada > 5) {
            botao.style.backgroundColor = 'green'
        } else {
            botao.style.backgroundColor = 'red'
        }
    }
    if (p == "Kenzo") {

        if (rodada > 19) {
            botao.style.backgroundColor = 'green'
        } else {
            botao.style.backgroundColor = 'red'
        }
    }
}

function atq1(p, div) {

    if (p == "Maria") {
        div.innerText = 'Soco'
    }
    if (p == "Letícia") {
        div.innerText = 'Soco'
    }
    if (p == "João") {
        div.innerText = 'Soco'
    }
    if (p == "Felipe") {
        div.innerText = 'Soco'
    }
    if (p == "Kenzo") {
        div.innerText = 'Soco'
    }
}

function atq2(p, div) {

    if (p == "Maria") {
        div.innerText = 'Puxada de cabelo'
    }
    if (p == "Letícia") {
        div.innerText = 'Calma'
    }
    if (p == "João") {
        div.innerText = 'Pensar'
    }
    if (p == "Felipe") {
        div.innerText = 'Preguiça'
    }
    if (p == "Kenzo") {
        div.innerText = 'Frio'
    }
}
function atq3(p, div) {

    if (p == "Maria") {
        div.innerText = 'Fofoca'
    }
    if (p == "Letícia") {
        div.innerText = 'Jogar casaco'
    }
    if (p == "João") {
        div.innerText = 'Grosseria'
    }
    if (p == "Felipe") {
        div.innerText = 'Rinite'
    }
    if (p == "Kenzo") {
        div.innerText = 'Líder'
    }
}
function atq4(p, div) {

    if (p == "Maria") {
        div.innerText = 'Tapa'
    }
    if (p == "Letícia") {
        div.innerText = 'Cabeçada'
    }
    if (p == "João") {
        div.innerText = 'Se jogar'
    }
    if (p == "Felipe") {
        div.innerText = 'Tirar aparelho'
    }
    if (p == "Kenzo") {
        div.innerText = 'Xingamento'
    }
}
function atq5(p, div) {

    if (p == "Maria") {
        div.innerText = 'Ultimate: Pintar cabelo'
    }
    if (p == "Letícia") {
        div.innerText = 'Ultimate: Devoradora de Livros'
    }
    if (p == "João") {
        div.innerText = 'Ultimate: Matemática'
    }
    if (p == "Felipe") {
        div.innerText = 'Ultimate: Simulação'
    }
    if (p == "Kenzo") {
        div.innerText = 'Ultimate: Fã clube número 1'
    }
}



function fAtk1() {

    console.log('oi')

    let p

    if (rodada % 2 != 0) {
        p = localStorage.getItem('player1')
    } else {
        p = localStorage.getItem('player2')
    }

    if (rodada % 2 != 0) {

        if(ataqueAnterior != "Soco") {

            if (p == "Maria") {
                vida2 = vida2 - 5
            }
            if (p == "Letícia") {
                vida2 = vida2 - 6
            }
            if (p == "João") {
                vida2 = vida2 - 6
            }
            if (p == "Felipe") {
                vida2 = vida2 - 6
            }
            if (p == "Kenzo") {
                vida2 = vida2 - 6
            }
            ataqueAnterior = "Soco"
            variaveis()
            tirarAtaques()
        } else {
            alert("O mesmo ataque não pode ser usado duas vezes seguidas!")
        }

    } else {

        if(ataqueAnterior2 != "Soco") {

            if (p == "Maria") {
                vida1 -= 5
            }
            if (p == "Letícia") {
                vida1 -= 6
            }
            if (p == "João") {
                vida1 -= 6
            }
            if (p == "Felipe") {
                vida1 -= 6
            }
            if (p == "Kenzo") {
                vida1 -= 6
            }

            ataqueAnterior2 = "Soco"
            variaveis()
            tirarAtaques()
        } else {
            alert("O mesmo ataque não pode ser usado duas vezes seguidas!")
        }
    }
}

function fAtk2() {

    let p

    if (rodada % 2 != 0) {
        p = localStorage.getItem('player1')
    } else {
        p = localStorage.getItem('player2')
    }

    if (rodada % 2 != 0) {

        if (p == "Maria") {

            if(ataqueAnterior != "Puxada de Cabelo") {

                vida2 -= 8
                vida1 -= 2
                ataqueAnterior = "Puxada de Cabelo"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Letícia") {

            if(ataqueAnterior != "Calma") {

                vida2 -= 4
                vida1 += 4
                ataqueAnterior = "Calma"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "João") {

            if(ataqueAnterior != "Pensar") {

                vida1 += 3
                rodadaPensar = rodada + 2
                ataqueAnterior = "Pensar"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Felipe") {

            if(ataqueAnterior != "Preguiça") {

                vida1 += 5
                fator = 1
                ataqueAnterior = "Preguiça"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Kenzo") {

            if(ataqueAnterior != "Frio") {

                vida1 -= 12
                rodadafrio1 = rodada + 1
                rodadafrio2 = rodada + 3
                ataqueAnterior = "Frio"
                variaveis()
                tirarAtaques()
            }
        }

    } else {

        if (p == "Maria") {

            if(ataqueAnterior2 != "Puxada de Cabelo") {

                vida1 -= 8
                vida2 -= 2
                ataqueAnterior2 = "Puxada de Cabelo"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Letícia") {

            if(ataqueAnterior2 != "Calma") {

                vida1 -= 4
                vida2 += 4
                ataqueAnterior2 = "Calma"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "João") {

            if(ataqueAnterior2 != "Pensar") {

                vida2 += 3
                rodadaPensar2 = rodada + 2
                ataqueAnterior2 = "Pensar"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Felipe") {

            if(ataqueAnterior2 != "Preguiça") {

                vida2 += 5
                fator2 = 1
                ataqueAnterior2 = "Preguiça"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Kenzo") {

            if(ataqueAnterior2 != "Frio") {

                vida2 -= 12
                rodadafrio11 = rodada + 1
                rodadafrio22 = rodada + 3
                ataqueAnterior2 = "Frio"
                variaveis()
                tirarAtaques()
            }
        }
    }
}
function fAtk3() {

    let p

    if (rodada % 2 != 0) {
        p = localStorage.getItem('player1')
    } else {
        p = localStorage.getItem('player2')
    }

    if (rodada % 2 != 0) {

        if (p == "Maria") {

            if(ataqueAnterior != "Fofoca") {

                rodada = rodada + 1
                ataqueAnterior = "Fofoca"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Letícia") {

            if(ataqueAnterior != "Jogar Casaco") {

                vida2 = vida2 - 3
                rodadacasaco = rodada + 1
                ataqueAnterior = "Jogar Casaco"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "João") {

            if(ataqueAnterior != "Grosseria") {

                vida2 = vida2 - 4
                rodadagrossria = rodada + 1
                ataqueAnterior = "Grosseria"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Felipe") {

            if(ataqueAnterior != "Rinite") {

                vida2 = vida2 - 5
                rodadarinite = rodada + 2
                rodadahprinite = vida2
                ataqueAnterior = "Rinite"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Kenzo") {

            if(ataqueAnterior != "Líder") {

                rodadalider = rodada + 1
                rodadadanolider = rodada + 2
                rodadahplider = vida1
                ataqueAnterior = "Líder"
                variaveis()
                tirarAtaques()
            }
        }
    } else {

        if (p == "Maria") {

            if(ataqueAnterior2 != "Fofoca") {

                rodada = rodada + 1
                ataqueAnterior2 = "Fofoca"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Letícia") {

            if(ataqueAnterior2 != "Jogar Casaco") {

                vida1 = vida1 - 3
                rodadacasaco2 = rodada + 1
                ataqueAnterior2 = "Jogar Casaco"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "João") {

            if(ataqueAnterior2 != "Grosseria") {

                vida1 = vida1 - 4
                rodadagrossria2 = rodada + 1
                ataqueAnterior2 = "Grosseria"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Felipe") {

            if(ataqueAnterior2 != "Rinite") {

                vida1 = vida1 - 5
                rodadarinite2 = rodada + 2
                rodadahprinite2 = vida1
                ataqueAnterior2 = "Rinite"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Kenzo") {

            if(ataqueAnterior2 != "Líder") {

                rodadalider2 = rodada + 1
                rodadadanolider2 = rodada + 2
                rodadahplider2 = vida2
                ataqueAnterior2 = "Líder"
                variaveis()
                tirarAtaques()
            }
        }
    }
}
function fAtk4() {

    let p

    if (rodada % 2 != 0) {
        p = localStorage.getItem('player1')
    } else {
        p = localStorage.getItem('player2')
    }

    if (rodada % 2 != 0) {

        if (p == "Maria") {

            if(ataqueAnterior != "Tapa") {

                vida2 = vida2 - 10
                rodadatapa = rodada + 2
                ataqueAnterior = "Tapa"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Letícia") {
            
            if(ataqueAnterior != "Cabeçada") {

                vida2 = vida2 - 7
                ataqueAnterior = "Cabeçada"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "João") {

            if(ataqueAnterior != "Se Jogar") {

                vida2 = vida2 - 8
                rodadasejogar = rodada + 2
                ataqueAnterior = "Se Jogar"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Felipe") {

            if(ataqueAnterior != "Tirar Aparelho") {

                rodadaaparelho = rodada + 2
                rodadaaparelho2 = rodada + 4
                ataqueAnterior = "Tirar Aparelho"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Kenzo") {

            if(ataqueAnterior != "Xingamento") {

                vida2 = vida2 - 8
                ataqueAnterior = "Xingamento"
                variaveis()
                tirarAtaques()
            }
        }

    } else {

        if (p == "Maria") {

            if(ataqueAnterior2 != "Tapa") {

                vida1 = vida1 - 10
                rodadatapa2 = rodada + 2
                ataqueAnterior2 = "Tapa"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Letícia") {

            if(ataqueAnterior2 != "Cabeçada") {

                vida1 = vida1 - 7
                ataqueAnterior2 = "Cabeçada"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "João") {

            if(ataqueAnterior2 != "Se Jogar") {

                vida1 = vida1 - 8
                rodadasejogar2 = rodada + 2
                ataqueAnterior2 = "Se Jogar"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Felipe") {

            if(ataqueAnterior2 != "Tirar Aparelho") {

                rodadaaparelho11 = rodada + 2
                rodadaaparelho22 = rodada + 4
                ataqueAnterior2 = "Tirar Aparelho"
                variaveis()
                tirarAtaques()
            }
        }
        if (p == "Kenzo") {

            if(ataqueAnterior2 != "Xingamento") {

                vida1 = vida1 - 8
                ataqueAnterior2 = "Xingamento"
                variaveis()
                tirarAtaques()
            }
        }
    }
}
function fAtk5() {

    let p

    if (rodada % 2 != 0) {
        p = localStorage.getItem('player1')
    } else {
        p = localStorage.getItem('player2')
    }

    if (rodada % 2 != 0) {

        if (p == "Maria" && ultimate1 == 0 && rodada > 7) {
            vida1 = vida1 + 30
            ultimate1 = 1
            variaveis()
            tirarAtaques()
        }
        if (p == "Letícia" && ultimate1 == 0 && rodada > 11) {
            rodadadevoradoradelivros1 = rodada + 1
            rodadadevoradoradelivros2 = rodada + 3
            ultimate1 = 1
            variaveis()
            tirarAtaques()
        }
        if (p == "João" && ultimate1 == 0 && rodada > 9) {
            vida2 = vida2 * 0.70
            ultimate1 = 1
            variaveis()
            tirarAtaques()
        }
        if (p == "Felipe" && ultimate1 == 0 && rodada > 5) {

            let p1 = localStorage.getItem('player1');
            let p2 = localStorage.getItem('player2');

            if (p1 == "Maria") {
                vida1 = 50
            }
            if (p1 == "Letícia") {
                vida1 = 40
            }
            if (p1 == "João") {
                vida1 = 50
            }
            if (p1 == "Felipe") {
                vida1 = 30
            }
            if (p1 == "Kenzo") {
                vida1 = 60
            }
            if (p2 == "Maria") {
                vida2 = 50
            }
            if (p2 == "Letícia") {
                vida2 = 40
            }
            if (p2 == "João") {
                vida2 = 50
            }
            if (p2 == "Felipe") {
                vida2 = 30
            }
            if (p2 == "Kenzo") {
                vida2 = 60
            }

            ultimate1 = 1
            variaveis()
            tirarAtaques()
        }
        if (p == "Kenzo" && ultimate1 == 0 && rodada > 19) {
            vida2 = vida2 - 40
            ultimate1 = 1
            variaveis()
            tirarAtaques()
        }

    } else {

        if (p == "Maria" && ultimate2 == 0 && rodada > 7) {
            vida2 = vida2 + 30
            ultimate2 = 1
            variaveis()
            tirarAtaques()
        }
        if (p == "Letícia" && ultimate2 == 0 && rodada > 11) {
            rodadadevoradoradelivros11 = rodada + 1
            rodadadevoradoradelivros22 = rodada + 3
            ultimate2 = 1
            variaveis()
            tirarAtaques()
        }
        if (p == "João" && ultimate2 == 0 && rodada > 9) {
            vida1 = vida1 * 0.70
            ultimate2 = 1
            variaveis()
            tirarAtaques()
        }
        if (p == "Felipe" && ultimate2 == 0 && rodada > 5) {

            let p1 = localStorage.getItem('player1');
            let p2 = localStorage.getItem('player2');

            if (p1 == "Maria") {
                vida1 = 50
            }
            if (p1 == "Letícia") {
                vida1 = 40
            }
            if (p1 == "João") {
                vida1 = 50
            }
            if (p1 == "Felipe") {
                vida1 = 30
            }
            if (p1 == "Kenzo") {
                vida1 = 60
            }
            if (p2 == "Maria") {
                vida2 = 50
            }
            if (p2 == "Letícia") {
                vida2 = 40
            }
            if (p2 == "João") {
                vida2 = 50
            }
            if (p2 == "Felipe") {
                vida2 = 30
            }
            if (p2 == "Kenzo") {
                vida2 = 60
            }

            ultimate2 = 1
            variaveis()
            tirarAtaques()
        }
        if (p == "Kenzo" && ultimate2 == 0 && rodada > 19) {
            vida1 = vida1 - 40
            ultimate2 = 1
            variaveis()
            tirarAtaques()
        }

    }
}

let rodadapensar
let rodadapensar2
let fator
let fator2
let hppreguiça
let hppreguiça2
let dano2
let rodadafrio1
let rodadafrio2
let rodadafrio22
let rodadafrio11
let rodadacasaco
let rodadacasaco2
let hpcasaco
let hpcasaco2
let rodadagrossria
let rodadagrossria2
let rodadarinite
let rodadahprinite
let rodadarinite2
let rodadahprinite2
let y
let y2
let rodadalider
let rodadadanolider
let rodadahplider
let rodadalider2
let rodadadanolider2
let rodadahplider2
let x
let x2
let rodadatapa
let rodadatapa2
let rodadasejogar
let rodadasejogar2
let rodadaaparelho
let rodadaaparelho2
let rodadaaparelho22
let rodadaaparelho11
let ultimate1 = 0
let ultimate2 = 0
let rodadadevoradoradelivros1
let rodadadevoradoradelivros2
let rodadadevoradoradelivros11
let rodadadevoradoradelivros22

function efeitoRodada() {

    if (rodada == rodadapensar) {
        vida2 = vida2 - 4
    }
    if (rodada == rodadapensar2) {
        vida1 = vida1 - 4
    }
    if (rodada == rodadafrio1) {
        rodada = rodada + 1
    }
    if (rodada == rodadafrio2) {
        rodada = rodada + 1
    }
    if (rodada == rodadafrio11) {
        rodada = rodada + 1
    }
    if (rodada == rodadafrio22) {
        rodada = rodada + 1
    }
    if (rodada == rodadacasaco) {
        hpcasaco = vida1
    }
    if (rodada == rodadacasaco2) {
        hpcasaco2 = vida2
    }
    if (rodada == rodadagrossria) {
        vida1 = vida1 + 4
    }
    if (rodada == rodadagrossria2) {
        vida2 = vida2 + 4
    }
    if (rodada == rodadadanolider) {
        vida2 = vida2 - 3
    }
    if (rodada == rodadadanolider2) {
        vida1 = vida1 - 3
    }
    if (rodada == rodadatapa) {
        rodada = rodada + 1
    }
    if (rodada == rodadatapa2) {
        rodada = rodada + 1
    }
    if (rodada == rodadasejogar2) {
        vida1 = vida1 + 2
    }
    if (rodada == rodadasejogar) {
        vida2 = vida2 + 2
    }
    if (rodada == rodadaaparelho) {
        vida2 = vida2 - 5
    }
    if (rodada == rodadaaparelho2) {
        vida2 = vida2 - 5
    }
    if (rodada == rodadaaparelho11) {
        vida1 = vida1 - 5
    }
    if (rodada == rodadaaparelho22) {
        vida1 = vida1 - 5
    }
    if (rodada == rodadadevoradoradelivros1) {
        rodada = rodada + 1
    }
    if (rodada == rodadadevoradoradelivros2) {
        rodada = rodada + 1
    }
    if (rodada == rodadadevoradoradelivros11) {
        rodada = rodada + 1
    }
    if (rodada == rodadadevoradoradelivros22) {
        rodada = rodada + 1
    }
}

let divVida
let divVida2
let botaoContinuar2

function tirarAtaques() {

    let p1 = localStorage.getItem('player1')
    let p2 = localStorage.getItem('player2')

    vidaP1.innerText = vida1
    vidaP2.innerText = vida2

    linhaInst.removeChild(linhaAtk1)
    linhaInst.removeChild(linhaAtk2)
    linhaInst.removeChild(Ult)

    linhaInst.style.display = 'flex'
    linhaInst.style.flexDirection = 'column'
    linhaInst.style.justifyContent = 'center'
    linhaInst.style.paddingTop = '0'

    divVida = document.createElement('div')
    divVida.className = 'divRodada'

    divVida2 = document.createElement('div')
    divVida2.className = 'divRodada'

    numeroRodada.innerText = "Rodada " + rodada

    divVida.innerText = p1 + " (player 1) está com " + vida1 + " de vida"
    divVida2.innerText = p2 + " (player 2) está com " + vida2 + " de vida"

    botaoContinuar2 = document.createElement('button')
    botaoContinuar2.className = 'botaoContinuar'
    botaoContinuar2.innerText = 'Continuar'
    botaoContinuar2.onclick = funcaoVerificacao

    linhaInst.appendChild(divVida)
    linhaInst.appendChild(divVida2)
    linhaInst.appendChild(botaoContinuar2)
}

function funcaoVerificacao() {

    linhaInst.removeChild(divVida)
    linhaInst.removeChild(divVida2)
    linhaInst.removeChild(botaoContinuar2)

    if (vida1 <= 0) {
        derrota1();
    } else if (vida2 <= 0) {
        derrota2();
    } else {
        rodada++
        mostrarRodada()
    }
}

let botaoContinuar3

function derrota1() {

    let p1 = localStorage.getItem('player1')
    let p2 = localStorage.getItem('player2')

    let divDerrota = document.createElement('div')
    divDerrota.className = 'divRodada'

    divDerrota.innerText = "Vitória de " + p2 + " (player 2)"

    botaoContinuar3 = document.createElement('button')
    botaoContinuar3.className = 'botaoContinuar'
    botaoContinuar3.innerText = "Voltar"
    botaoContinuar3.onclick = function () {
        window.location.href = "../index.html"
    }

    linhaInst.appendChild(divDerrota)
    linhaInst.appendChild(botaoContinuar3)
}

function derrota2() {

    let p1 = localStorage.getItem('player1')
    let p2 = localStorage.getItem('player2')

    let divDerrota = document.createElement('div')
    divDerrota.className = 'divRodada'

    divDerrota.innerText = "Vitória de " + p1 + " (player 1)"

    botaoContinuar3 = document.createElement('button')
    botaoContinuar3.className = 'botaoContinuar'
    botaoContinuar3.innerText = "Voltar"
    botaoContinuar3.onclick = function () {
        window.location.href = "../index.html"
    }

    linhaInst.appendChild(divDerrota)
    linhaInst.appendChild(botaoContinuar3)
}

start("game")