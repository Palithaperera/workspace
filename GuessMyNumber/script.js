'use strict';
let secretNumber = 0
let highscore = 0
let score = 20;
//document.querySelector('.number').textContent = secretNumber

console.log(secretNumber)
let setMessage = function(message){
    document.querySelector('.message').textContent = message
}

let initialize = function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1
    setMessage('Start Guessing...')
    document.querySelector('.guess').value = ''
    document.querySelector('.score').textContent = score = 20
}

initialize();

document.querySelector('.again').addEventListener('click', function(){
    initialize();
})
document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value)

    if(!guess) {
        setMessage('⛔️ No Number!')

    } else if (guess == secretNumber){
        setMessage('🎉 Correct Number!')
        if(highscore < score) {
            highscore = score;
        }        
        document.querySelector('.highscore').textContent = highscore
    } else {    
        if( score < 1){
            setMessage('😂You lose!')
        }    
        score --;
        document.querySelector('.score').textContent = score
        
        if(guess < secretNumber) {
            setMessage('📉 Too Low!')
        } else if(guess > secretNumber) {
            setMessage('📈 Too High')
        }
    }
})