let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(function(button){

button.addEventListener("click", function(){

let value = button.innerText;

if(value === "="){

try{
currentInput = eval(currentInput);
display.value = currentInput;
}
catch{
display.value = "Error";
}

}
else{
currentInput += value;
display.value = currentInput;
}

});

});