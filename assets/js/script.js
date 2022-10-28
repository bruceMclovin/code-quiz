var trueBtn = document.getElementById("True");
var falseBtn = document.getElementById("False");
var userScore = document.getElementById("user-score");
var questionText = document.getElementById("question-text");
var startBtn = document.getElementById("save-initials");
var restartBtn = document.getElementById("restartBtn");
var pageContentjs = document.getElementById("page-content");

//question code?
let currentQuestion = 0;
let score = 0;

let questions = [
   {
       question: "what should you do with old car batteries?",
       answers: [
           {option: "throw them in the ocean", answer: true},
           {option: "bring it to a auto parts store", answer: false},
           {option: "take them to a hazardous waste facility", answer: false},
       ]
   },
   {
       question: "if i was a simpsons character which one would i be?",
       answers: [
           {option: "Homer", answer: false},
           {option: "duff man", answer: true},
           {option: "marge", answer: false},
       ]
   },
   {

       question: "why do they call it oven when you of in the cold food of out hot eat the food?",
       answers: [
           {option: "Morrowind", answer: false},
           {option: "coneheads the movie", answer: false},
           {option: "grrblah oooahh gmph ahhh", answer: true},
       ]
   }
]

//on click variables
function log(){
    console.log('clicked');
}
startBtn.addEventListener("click",function(event){
    event.preventDefault();
    removeHidden();
});

function removeHidden()
    {
        var hidden = document.getElementsByClassName("hide");
        var makeHidden = document.querySelector(".startPage");
        console.log(makeHidden);
        for(var i = hidden.length-1; i > -1; i--)
        {
        hidden[i].classList.remove("hide");
        }
        makeHidden.classList.add("hide");
    }


