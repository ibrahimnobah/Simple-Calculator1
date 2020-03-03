class Calculator {
  
  constructor() {
    this.firstNumber = "";
    this.secondNumber = "";
    this.operation = undefined;
    this.isfirstNum = true;
    this.DisplayDivnum = null;
  }

  appendNumber(e) {
 
    let number = e.target.dataset.number;

      
    if (calculator.isfirstNum) 
    {
      calculator.firstNumber += number;
      calculator.showDisplay(calculator.firstNumber);
    } 
    else {
      calculator.secondNumber += number;
      calculator.showDisplay(calculator.secondNumber);
    }
  }

  chooseOperation(operation) {
var x=this;
console.log(x);
    this.isfirstNum = false;
    this.operation = operation;
    this.showDisplay(operation);
  }

  compute() {
    let result;
    const firstNum = parseFloat(this.firstNumber);
    const secondNum = parseFloat(this.secondNumber);
if(firstNum!==null)
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
    this.showDisplay("");
  }

  showDisplay(input) {
    this.DisplayDivnum.innerText = input;
  }

  init() {
    this.DisplayDivnum = document.getElementsByClassName("DisplayDiv")[0];
    // console.log(this.DisplayDivnum[0]);

    const numberButtons = document.getElementsByClassName("number-button");

    for (let i = 0; i < numberButtons.length; i++) {
      const element = numberButtons[i];
      element.addEventListener("click",this.appendNumber);
    }

    const operationButtons = document.getElementsByClassName("operation");

    for (let i = 0; i < operationButtons.length; i++) {
      const element = operationButtons[i];
      element.addEventListener("click", () => {
        let operand = element.getAttribute("data-operation");
        this.chooseOperation(operand);
      });
    }
    const equalsButton = document.getElementsByClassName("equals")[0];

    equalsButton.addEventListener("click", () => {
      let val= this.compute();
      this.showDisplay(val);
    });

    const allClearButton = document.getElementsByClassName("clear")[0];

    allClearButton.addEventListener("click", () => {
      this.clear();
    });
  }
}

var calculator = new Calculator();
document.addEventListener("DOMContentLoaded",calculator.init());
calculator.init();
