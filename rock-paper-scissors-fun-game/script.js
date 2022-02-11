let cards = document.querySelectorAll('.card');
let results = document.querySelector('.results');
let items = ['Rock','Paper','Scissors'];
let getRandomChoice = (items)=>items[Math.floor(Math.random()*items.length)];

let gameScores = [];
cards.forEach(card=>{
    card.addEventListener('click',e=>{
        e.preventDefault();
        let gameScore = calculateScore(e);
        gameScores.push(gameScore);
        console.log(gameScore);
    });
})

let calculateScore = (e)=>{
        let usersChoice = e.target.textContent;
        let computersChoice = getRandomChoice(items);
        let outputData = {};
        if(usersChoice === 'Rock') {
            if(computersChoice === 'Rock') {
                results.textContent = "Game is draw...";
                outputData.status = 0;
        }
            if(computersChoice === 'Paper') {
                results.textContent = "computer won the Game...";
                outputData.status = -1;

        }
            if(computersChoice === 'Scissors') {
                results.textContent = "You won the Game...";
                outputData.status = 1;

        }
        }
        if(usersChoice === 'Paper') {
            if(computersChoice === 'Rock') {
                results.textContent = "You won the Game...";
                outputData.status = 1
            }
            if(computersChoice === 'Paper') {
                results.textContent = "Game is draw...";
                outputData.status = 0
            }
            if(computersChoice === 'Scissors') {
                results.textContent = "Computer won the Game...";
                outputData.status = -1
            }
        }
        if(usersChoice === 'Scissors') {
            if(computersChoice === 'Rock') {
                results.textContent = "Computer won the Game...";
                outputData.status = -1
            }
            if(computersChoice === 'Paper') {
                results.textContent = "You won the Game...";
                outputData.status = 1;
            }
            if(computersChoice === 'Scissors') {
                results.textContent = "Game is draw...";
                outputData.status = 0;
            }
        }

        return outputData;
}
