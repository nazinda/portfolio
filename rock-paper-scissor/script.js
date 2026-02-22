let user_score = 0;
let comp_score = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user_score");
const compScorepara = document.querySelector("#comp_score");





const drawGame = () => {
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        user_score++;
        userScorepara.innerText = user_score;
    }
    else {
        msg.innerText = `You lose! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        comp_score++;
        compScorepara.innerText = comp_score;
    }
};

const generateCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*3); //range from 0-2 ----------float maya amzu floor migri ki khalis int baya 
    return options[randomIndex];
};

const playGame = (userChoice) => {
    const compChoice = generateCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userwin = compChoice === "scissors" ? false: true;
        }
        else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
