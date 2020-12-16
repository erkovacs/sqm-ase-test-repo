const MathError = require('./mathError');

class MathUtil {
    add (a, b) {
        return a + b;
    }

    subtract (a, b) {
        return a - b;
    }

    multiply (a, b) {
        let c = 0;
        for (let i = 0; i < b; i++) {
            c = this.add(c, a);
        }
        return c;
    }

    intDivide (a, b) {
        if (b == 0) {
            throw new MathError('Cannot integer divide by zero');
        }
        if (a < 0) {
            a = -a;
        }
        if (b < 0) {
            b = -b;
        }
        let i = 0;
        while (true) {
            a = this.subtract(a, b);
            if (a < 0) break;
            i++;
        };
        return i;
    }

    raiseToPower (base, exponent) {

    }
}

module.exports = MathUtil;