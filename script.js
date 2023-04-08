var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

function calculatorLogic() {
  var value = this.getAttribute('data-value');
  // wheather an operator is clicked here.
  if (value == '+' || value == '-' || value == "*" || value == "/" || value == "%") {
    operator = value;
    operand1 = parseFloat(display.textContent);
    display.innerText = '';
  } else if (value == '=') {
    operand2 = parseFloat(display.textContent);
    // use eval to get result
    var result = eval(operand1 + " " + operator + " " +operand2);
    if (isNaN(result)) {
      result = "Please Pass Valid Values";
    }
    // show result on display
    display.innerText = result;
  } else if (value == 'AC') {
    operand1 = 0;
    operand2 = null;
    operator = null;
    display.innerText = '';
  }
  else if (value == '+/-') {
    var currentValue = display.textContent;
    if (currentValue[0] == '-') {
      display.innerText = currentValue.substring(1);
    } else {
      display.innerText = "-" + currentValue;
    }
  }
  else {
    display.innerText += value;
  }
}


for (var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', calculatorLogic);
}