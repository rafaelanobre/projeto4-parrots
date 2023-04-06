function startGame(){
    var ncards = prompt("Quantas cartas você quer jogar? Escolha um número entre 4 e 14");

    if (4<=ncards && ncards<=14 && ncards % 2 == 0) {
        renderCards();
        timer();
    }

    else{
        startGame();
    }
}
startGame();

function renderCards(){
    var container = document.getElementById("container")

    container.innerHTML += '<div class=cards> cartinha 1 </div>';
    container.innerHTML += '<div class=cards> cartinha 2 </div>';
    container.innerHTML += '<div class=cards> cartinha 3 </div>';
    container.innerHTML += '<div class=cards> cartinha 4 </div>';
    container.innerHTML += '<div class=cards> cartinha 5 </div>';
    container.innerHTML += '<div class=cards> cartinha 6 </div>';

    for (let i = 0; i < ncards; i++) {
        

        
    }
        
    //verificar quantas quartas a pessoa disse
    //renderiza em pares o número de cartas dividido por dois
    //distribui aleatoriamente dentro do container com innerhtml
}

function jogando(){
    //no clique a carta vira
    //no segundo clique outra carta vira
    //cartas viradas não podem ser desviradas no clique
    //só deixa clicar em duas cartas por vez

    //verificar se as duas cartas são iguais com boleano

    //se as cartas forem par elas congelam

    //se as cartas forem diferentes
    //espera 2 seg e vira novamente


    //quando uma carta é clicada conta uma jogada
    //quando o jogo termina exibe o número do contador no alert
    //quando o jogo recomeça o contador é zerado

    //quando todas as cartas estiverem congeladas
    //chama a função wingame
}

function timer(){
    //contar os segundos
    //começa quando a função startGame chama
    //termina quando começa a função winGame 
}

function winGame(){
    //se todas as cartas tiverem pares

    //parar o cronometro

    //exibir alert vitória: Você ganhou em X jogadas. A duração do jogo foi de Y segundos!

    //chamar a função de reiniciar o jogo
}

function restartGame(){
    //prompt quer reiniciar o jogo

    //se a reposta for sim
    //chamar a função startGame

    //se a reposta for não
    //fechar o prompt e manter as cartas lá

    //se a resposta for quanlquer outra
    //recomeçar essa função
}

