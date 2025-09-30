const flashcards = [
    {
        question: "O que é JavaScript?",
        answer: "JavaScript é uma linguagem de programação que permite criar páginas web interativas e dinâmicas."
    },
    {
        question: "Qual é o tipo de dado de 'Olá'?",
        answer: "É uma string, usada para representar textos em JavaScript."
    },
    {
        question: "Qual é o tipo de dado de true ou false?",
        answer: "É um boolean, que representa verdadeiro ou falso, útil para decisões no código."
    },
    {
        question: "Para que servem variáveis?",
        answer: "Variáveis guardam informações que podem mudar durante a execução do programa, como números, textos ou valores booleanos."
    },
    {
        question: "O que é hoisting em JavaScript?",
        answer: "Hoisting é quando variáveis e funções são 'movidas' para o topo do escopo antes do código rodar."
    },
    {
        question: "Como criamos uma função em JavaScript?",
        answer: "Usamos 'function' para criar um bloco de código que pode ser reutilizado. Exemplo: function saudacao() { console.log('Olá!'); }"
    },
    {
        question: "O que é um array?",
        answer: "Um array é uma lista de valores armazenados juntos em uma única variável. Exemplo: let cores = ['vermelho', 'verde', 'azul'];"
    },
    {
        question: "Como acessamos um elemento do array?",
        answer: "Usamos o índice do elemento entre colchetes, começando do 0. Exemplo: cores[0] retorna 'vermelho'."
    },
    {
        question: "Para que serve o operador '+'?",
        answer: "O '+' pode somar números ou juntar strings. Exemplo: 5 + 3 = 8; 'Olá' +' Mundo' = 'Olá Mundo'."
    },
    {
        question: "O que é uma condição if?",
        answer: "O if permite executar um bloco de código apenas se uma condição for verdadeira. Exemplo: if(idade >= 18) { console.log('Adulto'); }"
    },
];

const flashcardContainer = document.getElementById('flashcard-container');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const cardCounterEl = document.getElementById('card-counter');
const nextButton = document.getElementById('next-button');

let currentCardIndex = 0;

function showCard() {
    const card = flashcards[currentCardIndex];
    questionEl.textContent = card.question;
    answerEl.textContent = card.answer;
    cardCounterEl.textContent = `Card ${currentCardIndex + 1} de ${flashcards.length}`;
    
    flashcardContainer.classList.remove('is-flipped');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    showCard();
}

flashcardContainer.addEventListener('click', () => {
    flashcardContainer.classList.toggle('is-flipped');
});

nextButton.addEventListener('click', nextCard);

showCard();