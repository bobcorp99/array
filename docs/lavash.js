function cartObj() {
    let rand = randomNumbers(1, 2)

    const priceList = {
        1: {
            'Lavash': {
                info: 'big cheese',
                price: 15000
            },
            'Hot-dog': {
                info: 'mini',
                price: 15000
            },
            'Cola': {
                info: '1.5 L',
                price: 9000
            },
        },
        2: {
            'Sushi': {
                info: 'max-roll',
                price: 32000
            },
            'Soya': {
                info: '200ml',
                price: 5000
            },
        }
    }

    return priceList[rand]
}

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const obj = cartObj()
let menu = '',
    menuPrice = 0,
    deliveryPrice = 9000

for (key in obj) {
    menu += key
    for (insideKey in obj[key]) {
        if (insideKey == 'info') {
            menu += ` ${obj[key][insideKey]}, `
        }else if(insideKey == 'price'){
            menuPrice += obj[key][insideKey]
        }
    }
}

console.log(`Sizning buyurtmangiz: ${menu}  | yetqazib berish xizmati
bilan bo'lgan narx ${menuPrice + deliveryPrice} yetkazish xaqqi (${deliveryPrice})`);