'use strict'

const fibonacci = () => {
    let listFibonacci = [0,1]
    let i = 0
    while(listFibonacci[i] <= 350){
        listFibonacci.push(listFibonacci[i] + listFibonacci[i + 1])
        console.log(listFibonacci[i])
        i++
    }
}

const isFibonnaci = (num) => {
    
}

module.exports = {
    fibonacci,
    isFibonnaci
}


fibonacci()

