/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let playerHand = []
let dealerhand = []

let playerWins = 0
let dealerWins = 0

let playerTotal = 0
let dealerTotal = 0


let RoundOver = false
/*------------------------ Cached Element References ------------------------*/
const elstartbutton = document.querySelector('#start-btn')
const elhitbutton = document.querySelector('#hit-btn')
const elstandbutton = document.querySelector('#stand-btn')
const elplayagainbutton = document.querySelector('#play-again-btn')
const elresetbutton = document.querySelector('#reset-btn')

const messageEl = document.querySelector('#message')
const playerWinsEl = document.querySelector('#player-wins')
const dealerWinsEl = document.querySelector('#dealer-wins')

const playerTotalEl = document.querySelector('#player-total')
const dealerTotalEl = document.querySelector('#dealer-total')

const playercardsEl = document.querySelector('#player-cards')
const dealerCardsEl = document.querySelector('#dealer-cards')

/*----------------------------- Event Listeners -----------------------------*/
elstartbutton.addEventListener('click', roundStart)
elhitbutton.addEventListener('click', hitCards)
elstandbutton.addEventListener('click', standCards)
elplayagainbutton.addEventListener('click', playgameagain)
elresetbutton.addEventListener('click', resetthegame)
/*-------------------------------- Functions --------------------------------*/
function roundStart(){
    let card = dealCards()
let card2 = dealCards()
let card3 = dealCards()
let card4 = dealCards()
playerHand.push(card)
playerHand.push(card2)
dealerhand.push(card3)
dealerhand.push(card4)
console.log(playerHand)
console.log(dealerhand)
}
function dealCards(){ 
    let randomIndex = Math.floor(Math.random() * deck.length)
    return deck[randomIndex]
}
function hitCards(){

}
function standCards(){

}
function playgameagain(){

}
function resetthegame(){

}