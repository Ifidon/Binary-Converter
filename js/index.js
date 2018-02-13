function converter() {
var input = document.getElementById("deci").value
var decimal = input*2;
var bits = [];
while (decimal >1) { 
  decimal = Math.floor(decimal/2);
  bits.unshift(decimal%2);
}
  output = parseInt(bits.join("")); 
  document.getElementById("answer").innerHTML = "The binary number is: " + output;
}