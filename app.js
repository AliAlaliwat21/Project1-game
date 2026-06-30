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
   messageEl.textContent='choose hit or stand'
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
//function which randomizes the order of cards given to you from the array in data.js
function dealCards(){ 
    let randomIndex = Math.floor(Math.random() * deck.length)
    return deck[randomIndex]
}
//render function is used to display the cards on the playercardsel variable and display the name of the cards by the element.name and get total is called at the end of the function to calculate the total.
function render(){
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
//calculates the total of the cards values that are placed in the array by taking the element.value
function getTotal(hand){
    let total = 0

    hand.forEach(function(element){
      total = total + element.value
    })
    return total
}
//conditions written for hit cards so that if user or dealer go below 21 one of them loses and an else condition for a tie with the render function to display it
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
while (dealerTotal < 17){
    let card = dealCards()
    dealerhand.push(card)
    render()
}
checkWinner()
}
//checkwinner function is made for functions to specifically check if the dealer or player went over 21 and check and display who won while tracking the score
function checkWinner(){
    if (dealerTotal > 21){
        messageEl.textContent= 'Dealer went over 21. You win'
        playerWins = playerWins + 1
        playerWinsEl.textContent = (playerWins)
    } else if (playerTotal > dealerTotal){
        messageEl.textContent = 'You had a higher number. You win.'
        playerWins = playerWins + 1
        playerWinsEl.textContent = (playerWins)
    }
    else if (dealerTotal > playerTotal){
       messageEl.textContent = 'Dealer had a higher number. Dealer wins.'
        dealerWins = dealerWins + 1 
    dealerWinsEl.textContent = (dealerWins)
    }
    else(messageEl.textContent = 'Its a tie.')
}
function playgameagain(){

}
function resetthegame(){

}