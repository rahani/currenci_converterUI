import { apikey, apiUrl } from "./config.js";
import { inputAmount, inputCurrency, outputCurrency } from "./doms.js";
import { handlePersist, handleUpdateHistoryTable } from "./memory.js";

/**
 * @returns header options
 */
export const getRequestOptions = () => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", apikey);
    return {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
}

/**
 * handle api request
 */
export const handleRequest = () => {
    fetch(`${apiUrl}?to=${outputCurrency.value}&from=${inputCurrency.value}&amount=${inputAmount.value}`, getRequestOptions())
        .then(response => response.text())
        .then(resultText => JSON.parse(resultText))
        .then(result => { outputAmount.value = Number.parseFloat(result.result).toFixed(3) })
        .then(() => { handlePersist(); handleUpdateHistoryTable() })
        .catch(error => console.log('error', error));
}