intToRome = function(num) {
    const rome = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    const parse = (digString, index) => {
        const digit = parseInt(digString)
        const [A,B,C] = rome.splice(index);

        if (digit === 9) {
            return A + C;
        }
        if (digit > 4 && x < 8) {
            return B + A.repeat(-5 + digit);
        }
        if (digit === 4) {
            return A + B;
        }
        if (digit < 4) {
            return A.repeat(digit);
        }
    }
    return num.toString().split('').reverse().map((item, i) => parse(item, i * 2)).reverse().join('')
}


romeToInt = function(romeNum) {
    const rome = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

    return romeNum.split('')
        .map(r => rome.findIndex(s => s === r))
        .map(
          (x, i, a) => {
            return {
                index: x,
                sign: (a[i + 1] > x ? -1 : 1)
            }
        })
        .map(
          ({index, sign}) =>{ 
            return sign * Math.pow(10, ~~(index / 2)) * (Math.pow(5, index % 2))
          })
        .reduce((p, q) => p + q, 0);
}
