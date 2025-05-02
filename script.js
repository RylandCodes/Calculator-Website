const buttons = document.querySelectorAll('.calculator-button');
const resultText = document.querySelector('.result-text');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value == "AC") {
        currentInput = '';
        resultText.textContent = '0';
        resultDisplayed = false;
        return;
    }

    if (value == "=") {
        try {
            const evalued = eval(currentInput);
            resultText.textContent = evalued;
            currentInput = evalued.toString();
            resultDisplayed = false;
        } catch {
            resultText.textContent = "Error";
            currentInput = "";
            resultDisplayed = false;
        }
        return;
    }

    if (resultDisplayed) {
        if (/[0-9]/.test(value)) {
            currentInput = value;
            resultText.textContent = currentInput;
            resultDisplayed = false;
            return;
        } else {
            resultDisplayed = false;
        }
    }

    currentInput += value;
    resultText.textContent = currentInput;
  });
});
