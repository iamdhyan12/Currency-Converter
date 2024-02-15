let compScore = 0;
let userScore = 0;

const choices = document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");
const uscore=document.querySelector("#user");
const cscore=document.querySelector("#comp");



const drawGame=()=>{
    console.log("Game is Drawn");
    msg.innerText="Game Drawn. Play Again!";
    msg.style.backgroundColor="#081b31";
}
const generateChoice=()=>{
    const options=["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomChoice = options[randomIndex];
    return randomChoice;
    

};
const checkFinalWinner = () => {
    if (userScore === 3 || compScore === 3) {
        const winner = userScore === 3 ? 'You' : 'Computer';
        alert(winner + ' won the game!');
        // Reset scores
        userScore = 0;
        compScore = 0;
        uscore.innerText = userScore;
        cscore.innerText = compScore;
        // Update message for a new game
        msg.innerText = "Play your move";
        msg.style.backgroundColor = "#081b31";
    }
};
const showWinner=(userwin)=>{
    if(userwin){
        userScore++;
        uscore.innerText=userScore;
        msg.innerText="You have won!";
        msg.style.backgroundColor="green";
        console.log("User has won the game");
    }
    else{
        compScore++;
        cscore.innerText=compScore;
        msg.innerText="Computer has won!";
        msg.style.backgroundColor="red";
        console.log("Computer has won the game");
    }
    checkFinalWinner();
}

const playGame =(userId)=>{
    console.log("user choice =",userId);

    const compId=generateChoice();
    console.log("Computer selected",compId);

    if(userId===compId){
        drawGame();
    }
    else{
        let userwin=true;
        if(userId==="rock"){
            if(compId==="scissors"){userwin=true;}
            else{
                userwin=false;
            }
        }
        else if(userId==="scissors"){
            if(compId==="paper"){userwin=true;}
            else{userwin=false;}
        }
        else if(userId==="paper"){
            if(compId==="rock"){userwin=true;}
            else{userwin=false;}
        }
        showWinner(userwin);
        checkFinalWinner();

    }


};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userId = choice.id;
        console.log("choice was selected", userId);
        playGame(userId);
    });
});