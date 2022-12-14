class Calculator {

    constructor(previousOperandTectElement,currentOperandTextElement){
        this.previousOperandTectElement = previousOperandTectElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    clear(){
        this.currentOperand = "";
        this.previousOperand=""
        this.operation = undefined;
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)

    }
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString()
        

    }
    chooseOperation(operation){
        if(this.currentOperand === ' ')return
        if(this.previousOperand!== ' '){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand
        this.currentOperand = ' ';

    }
    compute(){
        let computation
        const prev =parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev)||isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                    break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev * current
                break
            default:
                return
            }
            this.currentOperand = computation
            this.operation = undefined
            this.previousOperand = "";
          
            
    }
    updateDisplay(){
        
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTectElement.innerText = this.previousOperand;
      
   
    }
}

const numberButtons= document.querySelectorAll('[data-num]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete');
const clearButton = document.querySelector('[data-clear]');
const previousOperandTectElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTectElement,currentOperandTextElement)

numberButtons.forEach(button => {button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
})})
operationButtons.forEach(button => {button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
})})

equalsButton.addEventListener('click',function(){
    calculator.compute()
    calculator.updateDisplay()

})
clearButton.addEventListener('click',function(){
    calculator.clear()
    calculator.updateDisplay()

})
deleteButton.addEventListener('click',function(){
    calculator.delete()
    calculator.updateDisplay()

})