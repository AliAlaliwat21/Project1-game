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
    playerHand = []
    dealerhand = []
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
render()
}
function dealCards(){ 
    let randomIndex = Math.floor(Math.random() * deck.length)
    return deck[randomIndex]
}
function render(){
    console.log('render')
    playercardsEl.textContent = ''
    dealerCardsEl.textContent = ''

    playerHand.forEach(function(element){
        playercardsEl.textContent += element.name + ' '
    })
    dealerhand.forEach(function(element){
        dealerCardsEl.textContent += element.name + ' '
    })
    playerTotal = getTotal(playerHand)
    dealerTotal = getTotal(dealerhand)

    playerTotalEl.textContent = playerTotal
    dealerTotalEl.textContent = dealerTotal
}

function getTotal(hand){
    let total = 0

    hand.forEach(function(element){
      total = total + element.value
    })
    return total
}
function hitCards(){
let card = dealCards()
playerHand.push(card)
render()

if (playerTotal > 21){
    messageEl.textContent ='you lose, dealer wins'
    dealerWins = dealerWins + 1
    dealerWinsEl.textContent = (dealerWins)
}
}
function standCards(){

}
function playgameagain(){

}
function resetthegame(){

}