/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer,game;

init();

document.querySelector('.btn-roll').addEventListener('click',   function(){
    if(game){
        // 1. Rnadom Number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result

        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-'+dice+'.png';

        //

        if (dice > 1) {
                //Add Score
            roundScore += dice;
            document.getElementById('current-'+activePlayer).innerHTML = roundScore;
        }else{

            nextPlayer();
        }
    }
});


document.querySelector('.btn-hold').addEventListener('click',function(){
    if(game){
        //Add current score to GLOBAL score

        scores[activePlayer] += roundScore;

        //Update the UI 

        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];


        //CHECK IF player won

        if (scores[activePlayer] >= 20){
            console.log('WIIIIIIIN')
            document.querySelector('#name-'+activePlayer).textContent = "Winner!";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            
            game = false;
        }else{
    
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click',init);


function nextPlayer(){
    activePlayer  === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    document.getElementById('current-0').innerHTML = '0';
    document.getElementById('current-1').innerHTML = '0';
    
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

}



function init(){

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0; 
    game = true;


    document.getElementById('score-0').innerHTML = '0';
    document.getElementById('score-1').innerHTML = '0';
    document.getElementById('current-0').innerHTML = '0';
    document.getElementById('current-1').innerHTML = '0';
    document.querySelector('.dice').style.display = 'none';

}