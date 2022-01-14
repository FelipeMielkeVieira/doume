kaboom({
    global: true,
    fullscreen: true,
    scale: 1.5,
    debug: true,
    clearColor: [0, 0, 0, 0]
})

localStorage.setItem('player1', '')
localStorage.setItem('player2', '')

loadSprite('oi', 'https://i.ibb.co/FxPBdnt/New-Piskel-4.png')
loadSprite('chao', 'https://i.ibb.co/XzwXz89/New-Piskel-5.png')

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

    const gameLevel = addLevel(map, levelCfg)
})

start("game")

loadSprite('kenzo', 'https://i.ibb.co/FxPBdnt/New-Piskel-4.png')
loadSprite('kenzo2', 'https://i.ibb.co/7yMrLZH/New-Piskel-4-3.png')

function personagem(nome, p) {

    if (nome == 'Maria') {

        if (p == 1) {

            if (localStorage.getItem('player1') == '') {

                localStorage.setItem('player1', nome);

                const player = add([
                    sprite('kenzo'), solid(),
                    scale(1.5),
                    pos(350, 100),
                    body()
                ])
            }
        } else {

            if (localStorage.getItem('player2') == '') {

                localStorage.setItem('player2', nome);

                const player = add([
                    sprite('kenzo2'), solid(),
                    scale(1.5),
                    pos(550, 100),
                    body()
                ])
            }
        }

        start("game");
    }
    if (nome == 'Letícia') {

        if (p == 1) {

            if (localStorage.getItem('player1') == '') {

                localStorage.setItem('player1', nome);

                const player = add([
                    sprite('kenzo'), solid(),
                    scale(1.5),
                    pos(350, 100),
                    body()
                ])
            }
        } else {

            if (localStorage.getItem('player2') == '') {

                localStorage.setItem('player2', nome);

                const player = add([
                    sprite('kenzo2'), solid(),
                    scale(1.5),
                    pos(550, 100),
                    body()
                ])
            }
        }
    }
    if (nome == 'João') {

        if (p == 1) {

            if (localStorage.getItem('player1') == '') {

                localStorage.setItem('player1', nome);

                const player = add([
                    sprite('kenzo'), solid(),
                    scale(1.5),
                    pos(350, 100),
                    body()
                ])
            }
        } else {

            if (localStorage.getItem('player2') == '') {

                localStorage.setItem('player2', nome);

                const player = add([
                    sprite('kenzo2'), solid(),
                    scale(1.5),
                    pos(550, 100),
                    body()
                ])
            }
        }
    }
    if (nome == 'Felipe') {

        if (p == 1) {

            if (localStorage.getItem('player1') == '') {

                localStorage.setItem('player1', nome);

                const player = add([
                    sprite('kenzo'), solid(),
                    scale(1.5),
                    pos(350, 100),
                    body()
                ])
            }
        } else {

            if (localStorage.getItem('player2') == '') {

                localStorage.setItem('player2', nome);

                const player = add([
                    sprite('kenzo2'), solid(),
                    scale(1.5),
                    pos(550, 100),
                    body()
                ])
            }
        }
    }
    if (nome == 'Kenzo') {

        if (p == 1) {

            if (localStorage.getItem('player1') == '') {

                localStorage.setItem('player1', nome);

                const player = add([
                    sprite('kenzo'), solid(),
                    scale(1.5),
                    pos(350, 100),
                    body()
                ])
            }
        } else {

            if (localStorage.getItem('player2') == '') {

                localStorage.setItem('player2', nome);

                const player = add([
                    sprite('kenzo2'), solid(),
                    scale(1.5),
                    pos(550, 100),
                    body()
                ])
            }
        }

        start("game");
    }
}

function comecar() {
    if(localStorage.getItem('player1') != '' && localStorage.getItem('player2') != '') {
        window.location.href = "./batalha/index.html"
    }
}