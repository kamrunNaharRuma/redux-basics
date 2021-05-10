//non functional way 
let input = "    javascript   ";
let output = "<div>" + input.trim() + "</div>";

//functional way
const trim = str => str.trim();
const wrapInDiv = str => "<div>" + str + "</div>"
const wrapInDiv2 = str => `<div> ${str} </div>`

const result = wrapInDiv(trim(input));

console.log(result);