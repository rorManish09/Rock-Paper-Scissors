function getComputerChoice(){

  i = Math.floor(Math.random() *  3)

  switch(i){
    case 0:
      return "Rock";
    case 1:
      return "Paper"
    case 2:
      return "Scissors"
  }
}

var humanScore = 0;
var computerScore = 0;

 function playRound(humanSelection,computerSelection){
  
  if(humanSelection == computerSelection){
   
    return "Draw! Play Again."
  }
  else if (humanSelection == "Rock" & computerSelection == "Scissors" | humanSelection=='Paper' & computerSelection=="Rock" | humanSelection=="Scissors" & computerSelection=="Paper"){
    
    humanScore+=1
    return humanScore
  }
  else{    
    computerScore+=1
    return computerScore
 }

 }

function winnerAnounce(){

  
  if(humanScore > computerScore){
      return "Human Wins!"
  }
  else if(humanScore == computerScore  ){
    return "Its a Draw."
  }
  else{
    return 'Computer Wins!'
  }
}

  
function drawLogic(input){

  
  if (input === "Draw! Play Again."){
    return "Draw! Play Again."
  }
  else {
    return ''
  }    
}


const buttons = document.querySelectorAll('button');
const hScore = document.getElementById('hScore');
const cScore = document.getElementById('cScore');
const roundNumber = document.getElementById('roundNum');
const draw = document.getElementById('Draw')
const winner = document.getElementById('winner-display')

round = 1;
buttons.forEach((buttons) => {
buttons.addEventListener('click',() =>{
    var newHumanSelection = buttons.id
    if(newHumanSelection ){
      
      if(round>0 & round<=5){  
        const computerSelection = getComputerChoice();
        var play= playRound(newHumanSelection,computerSelection);
        
        draw.innerText = drawLogic(play)

        hScore.innerText = humanScore;
        cScore.innerText = computerScore;      
        round++;
        
        
      }
      
    }
    
    if(round<=5){
      roundNumber.innerText = round;
    }
    else{
      roundNumber.innerText = 5;
      winner.innerText = winnerAnounce()
    }
  })
})
