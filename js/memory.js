import { currenciesHistoryKey } from "./config.js"
import { inputAmount, inputCurrency, outputAmount, outputCurrency } from "./doms.js"

/**
 * handle persist data in localstorage
 * we will store the data in localstorage
 * 
 */
export const handlePersist = () => {
    const currentData = {
        inputCurrency: inputCurrency.value,
        inputAmount: inputAmount.value,
        outputCurrency: outputCurrency.value,
        outputAmount: outputAmount.value
    }
    const currenciesHistory = localStorage.getItem(currenciesHistoryKey)
    if (currenciesHistory) {
        const currenciesHistoryObj = JSON.parse(currenciesHistory)
        currenciesHistoryObj.push(currentData)
        localStorage.setItem(currenciesHistoryKey, JSON.stringify(currenciesHistoryObj))
    } else localStorage.setItem(currenciesHistoryKey, JSON.stringify([currentData]))
}

/**
 * update history table
 */
export const handleUpdateHistoryTable = () => {
    const currenciesHistory = localStorage.getItem(currenciesHistoryKey)
    if (currenciesHistory) {
        const currenciesHistoryObj = JSON.parse(currenciesHistory)
        const tableBody = historyTable.querySelector("tbody")
        tableBody.innerHTML = ""
        currenciesHistoryObj.reverse().forEach(data => {
            const row = document.createElement("tr")

            const inputAmountCell = document.createElement("td")
            inputAmountCell.innerText = data.inputAmount
            const inputCurrencyCell = document.createElement("td")
            inputCurrencyCell.innerText = data.inputCurrency

            const outputAmountCell = document.createElement("td")
            outputAmountCell.innerText = data.outputAmount
            const outputCurrencyCell = document.createElement("td")
            outputCurrencyCell.innerText = data.outputCurrency

            row.appendChild(inputAmountCell)
            row.appendChild(inputCurrencyCell)
            row.appendChild(outputAmountCell)
            row.appendChild(outputCurrencyCell)
            tableBody.appendChild(row)

        })
    }
}