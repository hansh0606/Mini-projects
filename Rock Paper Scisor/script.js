// console.log('Hanshvee')
const totalscores = {computerScore: 0 , playerScore:0 }

function getComputerChoice() {
  let rps = ['Rock' , 'Paper' , 'Scissor'];
  let randomNum = Math.floor(Math.random()*3);
  return rps[randomNum];
  
}


function getResult(playerChoice, computerChoice) {
  
  let score;
  
  if(playerChoice===computerChoice)
  {
    score = 0;
  }

  else if(playerChoice==='Scissor' && computerChoice==='Paper')
  {
    score=1;
  }

  else if(playerChoice==='Paper' && computerChoice==='Rock'){
    score = 1;
  }

  else if(playerChoice==='Rock' && computerChoice==='Scissor'){
    score = 1;
  }

  else{
   score = -1;
  } 

 return score;
  
  
}

function showResult(score, playerChoice, computerChoice) {

  const resultdiv = document.getElementById('result')
  const handsdiv = document.getElementById('hands')
  const playerScorediv = document.getElementById('player-score')
  if(score==-1)
  {
    resultdiv.innerText = 'You Lose!'
  }

  else if(score == 1)
  {
    resultdiv.innerText = 'You Win!'
  }

  else 
  {
    resultdiv.innerText = 'Draw!'
  }

  handsdiv.innerText = `🧑🏽${playerChoice} vs 🖥️${computerChoice}`

  playerScorediv.innerText = `Your Score is : ${totalscores['playerScore']}`

}


function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()

  const score =  getResult(playerChoice,computerChoice);
  if(score == 1){
    totalscores['playerScore'] += score
  }
  else if(score == -1){
    
    totalscores['computerScore'] -= score
  }
  console.log(score)
  showResult(score,playerChoice,computerChoice);
}


function playGame() {
 


  let buttons = document.querySelectorAll('.rpsButton');
  console.log(buttons)
  buttons.forEach(button => {
    button.onclick = () => onClickRPS(button.value)} )
    endButton = document.getElementById('endGameButton')
    endButton.onclick = () => { console.log("clicked"); 
    endGame();
    }
      
  console.log("play")
}

playGame()

function endGame(){
  let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    s1 = "Your Score is : ";
    s2 = totalscores['playerScore'];
    s3 = "Computer Score is: ";
    s4 = totalscores['computerScore'];
    result2 = s1.concat(s2);
    result3 = s3.concat(s4)
    if(totalscores.computerScore <= totalscores.playerScore){
      winner = "You are King";
    }
    else{
      winner = "Even a Computer is Better Than you"
    }
    playerScore.innerHTML = winner
    hands.innerHTML =   `${result2} <br> ${result3}`
    result.innerHTML = " "
    
    
    
     
}
