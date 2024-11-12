// // grab the count-el element, store it in a countEl variable
// let count = 0

// function increment() {
//     count = count + 1
//     // set countEl's innerText to the count
// }

let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}

