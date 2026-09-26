// Rock , Paper ,Sicer Game

let User =confirm("Shell We Play Rock , Paper , scissors");
if(User){
    let PlayerChoice = prompt("Please Enter rock  , paper , scissors");

    if(PlayerChoice){
      if(PlayerChoice === "rock" || PlayerChoice === "paper" ||  PlayerChoice ==="scissors"){
        let ComputerChoice = Math.floor(Math.random()*3 + 1) 
        
        let computer = ComputerChoice === 1 ? "rock" : ComputerChoice === 2 ? "paper" :  "Scissers" ;


        let result = PlayerChoice  === computer ? "Tie Game !!" 
        : computer === "rock" && PlayerChoice === "paper" ?  `PlayerOne 
        : ${ PlayerChoice} \nComputerOne :${computer}  \nComputer wins !` : 
         computer === "paper" && PlayerChoice === "scissors" ?  `PlayerOne 
        : ${ PlayerChoice} \n ComputerOne :${computer}  \nComputer wins !`
        :  computer === "scissors" && PlayerChoice === "rock" ?  `PlayerOne 
        : ${ PlayerChoice} \nComputerOne :${computer}  \nComputer wins !` : `${ PlayerChoice} \n ComputerOne :${computer}  \n Player wins !` 
   
              alert(`${result}`)
    }
else{
        alert("may be i guess your mind not ready for this time")
    }
}

else{

    alert("You did not chose one of below answer");

}
   

}

else{
          alert("Shall we start Later")
}







