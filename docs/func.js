function yourAge(name, year, yearBorn) {
    name = prompt('Ismingizni kiriting')
    year = +prompt('Hozirgi yilni kiriting')
    yearBorn = +prompt('Tugilgan yilingizni kiriting')
    return name + ',' + ' yoshingiz ' + (year - yearBorn)
}

let answer = yourAge()
console.log(answer);