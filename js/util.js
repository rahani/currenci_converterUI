
// check is number
export const isNumber = (value) => (!isNaN(value) && parseFloat(Number(value)) === value && !isNaN(parseInt(value, 10)))