class CalculatorUi {
  constructor() {
    this.calculatorEng = new CalculatorEngine();
  }
  clickButtons(e) {
    let number = e.target.dataset.number;
    var val = this.calculatorEng.appendNumber(number);
    this.showDisplay(val);
  }

  clickoperation(e) {
    let operand = e.getAttribute("data-operation");
    let oper = this.calculatorEng.chooseOperation(operand);
    this.showDisplay(oper);
  }

  onClearClick(){
    let clear = this.calculatorEng.clear();
    this.showDisplay("");
  }


  onEqualsClick(){
    let val = this.calculatorEng.compute();
    this.showDisplay(val);
  }

  showDisplay(input) {
    this.DisplayDivnum.innerText = input;
  }
  init() {

    this.DisplayDivnum = document.getElementsByClassName("DisplayDiv")[0];
    const numberButtons = document.getElementsByClassName("number-button");

    for (let i = 0; i < numberButtons.length; i++) {
      numberButtons[i].addEventListener("click", this.clickButtons);
    }
      const operationButtons = document.getElementsByClassName("operation");
      for (let i = 0; i < operationButtons.length; i++) {
        const element = operationButtons[i];
        element.addEventListener("click", this.clickoperation);
      }

      const equalsButton = document.getElementsByClassName("equals")[0];
      equalsButton.addEventListener("click", onEqualsClick);

      const allClearButton = document.getElementsByClassName("clear")[0];

      allClearButton.addEventListener("click",  onClearClick);
    }
  
 }
class CalculatorEngine {
  constructor() {
    this.firstNumber = "";
    this.secondNumber = "";
    this.operation = undefined;
    this.isfirstNum = false;
  }

  appendNumber(number) {
    if (this.isfirstNum) {
      this.firstNumber += number;
      return this.firstNumber;
    }
    else {
      this.secondNumber += number;
      return this.secondNumber;
    }
  }
  chooseOperation(operation) {
    this.isfirstNum = false;
    this.operation = operation;
    return operation;
  }

  compute() {
    let result=0; 

    const firstNum = parseFloat(this.firstNumber);
    const secondNum = parseFloat(this.secondNumber);
    if (firstNum !== null)
      switch (this.operation) {
        case "+":
          result = firstNum + secondNum;

          break;
        case "-":
          result = firstNum - secondNum;

          break;
        case "*":
          result = firstNum * secondNum;

          break;
        case "÷":
          result = firstNum / secondNum;

          break;
        default:
          return;
      }
    return result;
  }
  clear() {
    this.firstNumber = "";
    this.secondNumber = "";
    this.operation = undefined;
    this.isfirstNum = true;
    
  }
}
var Ui = new CalculatorUi();
document.addEventListener("DOMContentLoaded", Ui.init());


