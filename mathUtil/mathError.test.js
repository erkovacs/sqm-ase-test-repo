const MathError = require("./mathError");

describe('MathError', () => {

    let message, error;

    beforeEach(() => {
        message = 'Test message';
        error = new MathError(message);
    });

    it ('logs the message it was constructed with', () => {
        expect(error.toString()).toEqual(`Error: ${message}`);
    });
    
    it ('is throwable', () => {
        expect(() => { throw error; }).toThrow(MathError);
    });

    it ('can be caught in a trycatch', () => {
        const nonThrowingFunction = () => {
            try {
                throw error;
            } catch (e) {
                return e;
            }
        };
        expect(nonThrowingFunction()).toEqual(error);
    });
});