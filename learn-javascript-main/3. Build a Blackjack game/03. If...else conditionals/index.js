let firstCard = 6
let secondCard = 5
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a card?")
} else if (sum === 21) {
       console.log("Blackjack.") 
} else {
    console.log("Bust.")
}
