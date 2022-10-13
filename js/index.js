import { inputAmount, inputCurrency, outputCurrency, switchButton } from "./doms.js";
import { handleCalculate, handleSwitch } from "./handlers.js";
import { handleUpdateHistoryTable } from "./memory.js";

document.addEventListener("DOMContentLoaded", function () {
    // trigger switch button click
    switchButton.addEventListener("click", handleSwitch);

    // trigger input currency change
    inputCurrency.addEventListener("change", handleCalculate);

    // trigger output currency change
    outputCurrency.addEventListener("change", handleCalculate)

    // trigger input amount change
    inputAmount.addEventListener("keyup", handleCalculate);

    // update history table
    handleUpdateHistoryTable()

});