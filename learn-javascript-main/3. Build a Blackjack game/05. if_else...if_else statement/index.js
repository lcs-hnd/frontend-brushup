// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age === 100) {
    console.log("Here is your birthday card from the King!")
} else if (age < 100){
    console.log("Not elegible!")
} else {
    console.log("You've already gotten one ya scoundrel!")
}

// the triple "===" is strict and only works with the information you pass it
// if you pass a string then it will only take said string and not an integer