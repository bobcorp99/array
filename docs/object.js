let obj = {}
let user = 'Foydalanuvchi'

for (let i = 1; i <= 10; i++) {
    obj[i] = {}
    obj[i].name = prompt('Ismingiz:', 'Name')
    obj[i].age = +prompt('Yoshingiz:', 'Age')
}

console.log(obj);

let count = 1
for (let key in obj) {
    for (keyID in obj[key]) {
        if (keyID == 'name') {
            console.log(user, count, '\n', 'Ismi ', obj[key][keyID])
        } else if (keyID == 'age') {
            console.log('Yoshi ', obj[key][keyID]);
        }
    }
    count++
}

console.log(obj);

// console.log(obj);

// let ish = 'man ishliman'
// console.log(`${ish} `);