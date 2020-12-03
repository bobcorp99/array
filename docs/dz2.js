let arr = []
for (let i = 0; i < Infinity; i++) {
    let clientAnswer = prompt('Komandani kiriting')
    if (clientAnswer == 'stop') {
        break;
    }

    console.log(clientAnswer = clientAnswer.split(', '));
    console.log(clientAnswer, clientAnswer[0]);
    if (clientAnswer[0] == 'add') {
        arr.push(clientAnswer[1])
    } else if (clientAnswer[0] == 'del') {
        for (let j = 0; j < arr.length; j++){
            if(clientAnswer[1] == arr[j])
            arr.splice(j, 1)
        }
    }
    console.log(arr);
}
console.log(arr);