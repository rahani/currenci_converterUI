import { currenciesMap } from "./config.js"
import { inputSign, outputSign, inputCurrency, outputCurrency, inputAmount, outputAmount } from "./doms.js"
import { handleRequest } from "./request.js"
import { isNumber } from "./util.js"

/**
 * update signs text
 */
export const handleUpdateSigns = () => {
    inputSign.innerText = currenciesMap.get(inputCurrency.value)
    outputSign.innerText = currenciesMap.get(outputCurrency.value)
}

/**
 * handle switch boxs data
 */
export const handleSwapp = () => {
    let tempCurrency = inputCurrency.value
    let tempAmount = inputAmount.value
    inputCurrency.value = outputCurrency.value
    inputAmount.value = outputAmount.value
    outputCurrency.value = tempCurrency
    outputAmount.value = tempAmount
}

/**
 * handle switch button click
 */
export const handleSwitch = () => {
    handleSwapp();
    handleUpdateSigns();
}

/**
 * handle validate input data
 * @returns {boolean} true if input amount is number
 */
export const handleValidation = () => {
    // currencies should not be equal
    if (outputCurrency.value == inputCurrency.value) {
        outputAmount.value = inputAmount.value
        return false
    }

    // input amount should be number
    if (!isNumber(+inputAmount.value) || +inputAmount.value <= 0) {
        outputAmount.value = 0
        return false
    }
    return true
}

/**
 * handle calculate with api request
 */
export const handleCalculate = () => {
    handleUpdateSigns()
    const validate = handleValidation()
    if (!validate) return;

    // prepare to sending request
    outputAmount.value = ""
    handleRequest()
}
