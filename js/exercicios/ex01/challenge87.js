// Create a var that stores the name that user enters via prompt. This

var name = prompt('Whats your name?')

//Capitalize the first etter of their name

// a isolate the first char
var firstChar = name.slice(0,1)

//b turn the first char to upper case
var upperCaseFirstChar = name.slice(1, name.length)

//c isolate the rest of the name
restOfName = restOfName.toLowerCase()

//e concacnate the first char and the rest of the char
var capitalisedName = upperCaseFirstChar + restOfName

//2 We use capitalised version of their name to greet then using an alert
alert("Hello, " + capitalisedName)



