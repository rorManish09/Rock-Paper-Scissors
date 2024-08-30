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

function getHumanChoice(){

  userInput = prompt("Enter Your Choice in Numbers:\n Rock:1 Paper:2 Scissors:3")

    const ChoiceObject ={
      1:"Rock",
      2:"Paper",
      3:"Scissors"
    }
    
    var valueChoice = Number(userInput)
      
  return ChoiceObject[valueChoice]
 }

 
 var humanScore = 0;
 var computerScore = 0;
 
 function playRound(humanSelection,computerSelection){

 
  if(humanSelection == computerSelection){

    
    return "Draw! Play Again. "
  }
  else if (humanSelection == "Rock" & computerSelection == "Scissors" | humanSelection=='Paper' & computerSelection=="Rock" | humanSelection=="Scissors" & computerSelection=="Paper"){
    
    humanScore+=1
    return "Human Score: "+ humanScore
  }
  else{
    
    computerScore+=1
    return "Computer Score: " + computerScore
 }
 
 }


 const playGame = () =>{

  for(let i =0; i<5; i++){

    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    var play= playRound(humanSelection,computerSelection)

   console.log(play)
    
  }

 }

playGame()

