function vowels(str) {
    console.log(str);
    let count = 0
    let unli = 'AOUEIyaoueiy'

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < unli.length; j++) {
            if (str[i] == unli[j]) {
                count++
                console.log(count);
            }
        }
    }
    return count
}
