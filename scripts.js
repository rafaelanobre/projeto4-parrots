var parrotsimages = [
    'images/unicornparrot.gif',
    'images/tripletsparrot.gif',
    'images/revertitparrot.gif',
    'images/metalparrot.gif',
    'images/fiestaparrot.gif',
    'images/explodyparrot.gif',
    'images/bobrossparrot.gif'
];

var gamecards = [];
var gametime
var gamemoves
var time
var ncards = 0;
let carta1 ="";
let carta2 ="";
let firstcard
let secondcard
let cartasviradas = 0;
let pairsFound = 0;

function startGame(){
    //pergunta com quantas cartas quer jogar
    ncards = prompt("Quantas cartas você quer jogar? Escolha um número entre 4 e 14");

    //verifica se o número é par, entre 4 e 14
        //chama a função de dar as cartas
        //chama a função do cronometro
    if (4<=ncards && ncards<=14 && ncards % 2 == 0) {
        gametime = setInterval(timer, 1000);
        time = 0;
        gamemoves = 0;
        pairsFound = 0;
        cartasviradas = 0;
        carta1 ="";
        carta2 ="";
        renderCards();
        timer();
    }

    //se não for, recomeça a função
    else{
        startGame();
    }
}
startGame();

function sortearCards(){
    gamecards = [];

    for(let i = 0; i < ncards/2; i++){
        gamecards.push(parrotsimages[i]);
        gamecards.push(parrotsimages[i]);
    }
    gamecards.sort(comparador);
    
    function comparador() { 
        return Math.random() - 0.5; 
    }
}

function renderCards(){
    sortearCards();
    const container = document.querySelector(".container");
    container.innerHTML = "";

    for (let i = 0; i < ncards; i++) {
        container.innerHTML += `<div class="card" onclick="flipCard(this)" data-test="card">
            <div class="carta1 face">
                <img src="images/back.png" data-test="face-down-image">
            </div>
            <div class="carta2 back-face face">
                <img src="${gamecards[i]}" data-test="face-up-image">
            </div>
        </div>`;
    }
    
    //verificar quantas quartas a pessoa disse
    //renderiza os pares
    //distribui aleatoriamente dentro do container com innerhtml
}


function flipCard(card) {
    //no clique a carta vira
    //no segundo clique outra carta vira
    //cartas viradas não podem ser desviradas no clique
    //só deixa clicar em duas cartas por vez

    //verificar se as duas cartas são iguais


    carta1 = card.querySelector(".carta1");
    carta2 = card.querySelector(".carta2");

    if(carta1.classList.contains('front') !==true && cartasviradas === 0){

        firstcard = card.querySelector('.carta2');
        gamemoves++;
        cartasviradas++;

        carta1.classList.add("front");
        carta2.classList.add("back");
    }

    else if(carta2.classList.contains('front') !==true && cartasviradas === 1){
        secondcard = card.querySelector('.carta2');
        gamemoves++;
        cartasviradas++;
    
        carta1.classList.add("front");
        carta2.classList.add("back");

        setTimeout(compareCards, 1000, firstcard, secondcard);

        //quando todas as cartas estiverem congeladas
        //chama a função wingame

    }

    else{

    }
}

function compareCards(a,b){
    //verificar se as duas cartas são iguais com boleano

    //se as cartas forem par elas congelam
    const asrc = a.querySelector('img').src;
    const bsrc = b.querySelector('img').src;

    //se as cartas forem par elas congelam
    if(asrc===bsrc){
        pairsFound++;

        cartasviradas = 0;
        firstcard = 0;
        secondcard = 0;

        winGame();
    }

    //se as cartas forem diferentes
    //remove as classes e vira novamente
    else if(asrc !== bsrc){
        a.classList.remove('back');
        b.classList.remove('back');

        const aParent = firstcard.parentNode.querySelector('.carta1');
        const bParent = secondcard.parentNode.querySelector('.carta1');

        aParent.classList.remove('front');
        bParent.classList.remove('front');


        cartasviradas = 0;
        firstcard = 0;
        secondcard = 0;
    }

}

function timer(){
    //contar os segundos
    //exibir na tela
    const timer = document.querySelector(".timer");
    time++
    timer.innerHTML = `${time}`
    
    //começa quando a função startGame chama
    //termina quando começa a função winGame 
}

function winGame(){
    //se todas as cartas tiverem pares
    //quando o jogo termina exibe o número do contador no alert
    //quando o jogo termina exibe o timer no alert
    if(pairsFound === ncards/2){
        //exibir alert vitória: Você ganhou em X jogadas. A duração do jogo foi de Y segundos!
        alert("Você ganhou em " + gamemoves + " jogadas! A duração do jogo foi de " + time + " segundos!");

        //chamar a função de reiniciar o jogo
        restartGame();
    }

    else{
    }
}

function restartGame(){
    //prompt quer reiniciar o jogo
    var restart = prompt("Gostaria de jogar de novo? Responda sim ou não");

    //se a reposta for sim
    //chamar a função startGame
    if (restart == "sim") {
        startGame();
    }

    //se a reposta for não
    //fechar o prompt e manter as cartas lá
    else if (restart == "não") {
        
    }

    //se a resposta for quanlquer outra
    //recomeçar essa função
    else{
        restartGame();
    }
}

