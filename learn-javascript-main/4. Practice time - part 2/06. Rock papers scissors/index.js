let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function arraySelector() {
    number = Math.floor(Math.random() * 3)
    return hands[number]
}

console.log(arraySelector())