/*Ex 1*/
function checkNum (a , b) {
    if (a === 50 || b === 50 || a + b === 50) {
        return true
    }
    else {
        return false
    }
}

const result = checkNum(29 , 21)
//console.log(result)

/*Ex 2*/
function removeCh (c , d) {
    const string = c.split('')
    const remove = string.slice(d)

    return remove
}

const result2 = removeCh('ciao Lorenzo',(1) )
//console.log(result2)

/*Ex 3*/
function checkNumb(num) {
    if (num >= 40 && num <= 60 || num >= 70 && num <= 100) {
        return true
    }
    else {
        return false
    }
}

const check = checkNumb(39)
//console.log(check)


/*Ex 4*/
function nameCity (a) {
    if (a.startsWith('New')){
        return a 
    }
    if (a.startsWith('Los')){
        return a 
    }
    else {return false
    }
}

const startwith = nameCity('LosSantos')
//console.log(startwith)

/*Ex 5*/
const myArray = [
    'pera',
    'mela',
    'kiwi',
    'pesca',
    '1',
    '3',
    
]
function arraySum (e) {
    let sum = ''
    for (let i = 0 ; i < e.length ; i++) {
        sum += e[i]
    }
    return sum
}

const sumArray = arraySum(myArray)
//console.log(sumArray)

/*Ex 6*/
function checkNotNum (f) {
    if (f.includes('1') || f.includes('3')) {
    return false 
    }
    else {return true
    }
}

const search = checkNotNum(myArray)
//console.log(search)

/*Ex 7*/
function angleType (g) {
    if (g < 90) {return "acuto"}
    if (g > 90 && g < 180) {return "ottuso"}
    if (g === 90) {return "retto"}
    if (g === 180) {return "piatto"}
}

const myAngle = angleType( 180)
//console.log(myAngle)

/*Ex 8*/
function FIAT (h) {
    let words = h.split(' ')
    let result = ''
    for ( let i = 0; i < words.length; i++) {
        let word = words[i]
        result += word.charAt(0)
    }
    return result.toUpperCase()
} 

const myFIAT = FIAT('you only live once')
console.log(myFIAT)


