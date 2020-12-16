const MathUtil = require(".");
const MathError = require("./mathError");

describe('MathUtil', () => {
    let a, b, mathUtil;
    beforeEach(() => {
        a = 15;
        b = 10;
        mathUtil = new MathUtil();
    });

    it ('adds two numbers a and b', () => {
        let sum = mathUtil.add(a, b);
        expect(sum).toEqual(25);
    });

    it ('subtracts two numbers a and b', () => {
        let difference = mathUtil.subtract(a, b);
        expect(difference).toEqual(5);
    });

    it ('multiplies two numbers a and b', () => {
        let product = mathUtil.multiply(a, b);
        expect(product).toEqual(150);
    });

    it ('integer divides two numbers a and b', () => {
        let quotient = mathUtil.intDivide(a, b);
        expect(quotient).toEqual(1);
    });

    it ('throws an error when we try to divide to 0', () => {
        expect(() => mathUtil.intDivide(a, 0)).toThrow(MathError);
    });
});