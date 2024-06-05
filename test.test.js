const Calculator = require('./Calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('addition', () => {
        expect(calculator.add(5, 3)).toBe(8);
        expect(calculator.add(-5, 3)).toBe(-2);
        expect(calculator.add(0, 0)).toBe(0);
    });

    test('subtraction', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(5, -3)).toBe(8);
        expect(calculator.subtract(0, 0)).toBe(0);
    });

    test('multiplication', () => {
        expect(calculator.multiply(5, 3)).toBe(15);
        expect(calculator.multiply(-5, 3)).toBe(-15);
        expect(calculator.multiply(0, 5)).toBe(0);
    });

    test('division', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(5, 2)).toBe(2.5);
        expect(calculator.divide(0, 5)).toBe(0);
        expect(calculator.divide(5, 0)).toBe(Infinity);
    });
});