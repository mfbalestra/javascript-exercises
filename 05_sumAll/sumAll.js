const sumAll = function(number1, number2) {
    /* If one of the arguments is not a number it fails */
    if (typeof(number1) === 'number' && typeof(number2) === 'number') {
        /* If one of the arguments is negative, it fails */
        if (number1 < 0 || number2 < 0) {
            return 'ERROR'
        }
        
        let sum = 0;
        /* Check wich argument is bigger than the other */
        if (number1 < number2) {
            for (let i = number1; i <= number2; i++) {
                sum += i;
            }
        } else {
            for (let i = number2; i <= number1; i++) {
                sum += i;
            }
        }

        return sum;
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
