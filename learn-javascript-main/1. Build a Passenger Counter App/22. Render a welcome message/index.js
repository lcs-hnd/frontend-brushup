// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")
// Create two variables (name & greeting) that contains your name
let name = "Lucas"
let greeting = "Welcome back "  
// and the greeting we want to render on the page
let welcomeBack = greeting + name + "."
// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = welcomeBack
