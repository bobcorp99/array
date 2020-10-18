let number = +prompt("Ishlamoqchi bo'lgan misollar miqdorini kiriting:")

for (let i = 0; i < number; i++) {
    randomMath()
}

function randomNum() {
    return Math.floor(Math.random()*10)+1
}

function randomMath() {
    let num1 = randomNum()
    let num2 = randomNum()
    let rand = randomNum()
    if(rand == 1 || rand == 3 || rand == 7) {
        let expression = num1 + ' + ' + num2 + ' = ? '
        let clientAnswer = +prompt(expression)
        let answer = num1 + num2
        console.log(expression, (clientAnswer == answer) ? 'Siz tori topdiz: ' + clientAnswer : 'Siz notori topdiz : ' + clientAnswer + 'tori javob: ' + answer); 
    } else if(rand == 4 || rand == 6) {
        let expression = num1 + ' - ' + num2 + ' = ? '
        let clientAnswer = +prompt(expression)
        let answer = num1 - num2
        console.log(expression, (clientAnswer == answer) ? 'Siz tori topdiz: ' + clientAnswer : 'Siz notori topdiz : ' + clientAnswer + 'tori javob: ' + answer); 
    } else if (rand == 5 || rand == 2) {
        let expression = num1 + ' / ' + num2 + ' = ? '
        let clientAnswer = +prompt(expression)
        let answer = num1 / num2
        console.log(expression, (clientAnswer == answer) ? 'Siz tori topdiz: ' + clientAnswer : 'Siz notori topdiz : ' + clientAnswer + 'tori javob: ' + answer);
    } else {
        let expression = num1 + ' * ' + num2 + ' = ? '
        let clientAnswer = +prompt(expression)
        let answer = num1 * num2
        console.log(expression, (clientAnswer == answer) ? 'Siz tori topdiz: ' + clientAnswer : 'Siz notori topdiz : ' + clientAnswer + 'tori javob: ' + answer); 
    }

}