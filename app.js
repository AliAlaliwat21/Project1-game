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

/*-------------------------------- Functions --------------------------------*/