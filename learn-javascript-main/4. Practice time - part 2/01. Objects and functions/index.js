// Create a person object that contains three keys: name, age, and county.
let person = {
    name: "Lucas",
    age: 23,
    country: "USA"
}
// Use yourself as an example to set the values for name, age, and country
// Create a function, logData(), that uses the person object to create a
function logData() {
    string = person.name + " is " + person.age + " years old and lives in " + person.country + "." 
    return string
}
// string in the following format: 
// "Per is 35 years old and lives in Norway"
console.log(logData())
// Call the logData() function to verify that it works