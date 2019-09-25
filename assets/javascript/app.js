var quizQuestion = [
    {
        question: "who is the first president of USA?",
        choices: ["George Washington", "James Madison", "john quincy Adams", "Thomas Jefferson"],
        correctAnswer: "George Washington"
    },
    {
        question: "what is the Capital city of Japan?",
        choices: ["Miyazaki", "Tokyo", "Nagoya", "kyoto"],
        correctAnswer: "Tokyo"
    },
    {
        question: "what is the Capital city of Japan?",
        choices: ["Miyazaki", "tokyo", "Nagoya", "kyoto"],
        correctAnswer: "tokyo"
    },
    {
        question: "where is the tallest Mountain in the world?",
        choices: ["Japan", "Rasia", "India", "Nepal"],
        correctAnswer: "Nepal"
    },
    {
        question: "The most popular fruit in the world?",
        choices: ["Apple", "Banana", "Tomato", "Orange"],
        correctAnswer: "Tomato"
    },
    {
        question: "what is world biggest animal?",
        choices: ["Blue whale", "Ostrich", "Saltwater Crocodile", "Whale shark"],
        correctAnswer: "Blue whale"
    },
    {
        question: "which is the largest state in US by area?",
        choices: ["Texas", "Virginia", "New york", "Alaska"],
        correctAnswer: "Alaska"
    },
    {
        question: "what is the annual inflation rate in united state?",
        choices: ["1.7%", "1.8%", "2%", "0.5%"],
        correctAnswer: "1.7%"
    },
    {
        question: "when was the first iphone introduced?",
        choices: ["June 29, 2007", "June 25, 2007", "july 01, 2008", "march 09, 2006"],
        correctAnswer: "June 29, 2007"
    },
    {
        question: "when was the space needle built?",
        choices: ["April 20, 1961", "April 10, 1962", "march 17, 1959", "April 17, 1961"],
        correctAnswer: "April 17, 1961"
    }
]
console.log(quizQuestion);
//initail values//
var counter = 30;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var timer;

console.log($);
function loadQustion() {
    const question = quizQuestion[currentQuestion].question;
    const choices = quizQuestion[currentQuestion].choices;
    $("#timer").html("timer:" + counter);
    $("#Game").html("<h4>" + question + "</h4>");
    var $choicesElements = $(loadChoices(choices));
    $("#Game").append($choicesElements);
    console.log(loadQustion);
}

function loadChoices(choices) {
    var result = " ";
    for (var i = 0; i < choices.length; i++) {
        result += '<p class ="choice" data-answer="' + choices[i] + '">' + choices[i] +'</p>';
       
    }
    return result;
}
loadQustion();
loadChoices();