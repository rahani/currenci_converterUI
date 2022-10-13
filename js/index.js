import { inputAmount, inputCurrency, outputCurrency, switchButton } from "./doms.js";
import { handleCalculate, handleSwitch } from "./handlers.js";

document.addEventListener("DOMContentLoaded", function () {
    // trigger switch button click
    switchButton.addEventListener("click", handleSwitch);

    // trigger input currency change
    inputCurrency.addEventListener("change", handleCalculate);

    // trigger output currency change
    outputCurrency.addEventListener("change", handleCalculate)

    // trigger input amount change
    inputAmount.addEventListener("input", handleCalculate)

    // trigger enter key press in input box
    inputAmount.addEventListener("keyup", handleCalculate);
});