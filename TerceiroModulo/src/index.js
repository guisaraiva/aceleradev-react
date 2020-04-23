'use strict'

const fibonacci = () => {
    const listFibonacci = [0,1]
    let i = 0
    while(listFibonacci[i + 1] <= 350){
        listFibonacci.push(listFibonacci[i] + listFibonacci[i + 1])
        i++
    }
    return listFibonacci
}

const isFibonnaci = (num) => fibonacci ().includes(num)
module.exports = {
    fibonacci,
    isFibonnaci
}

