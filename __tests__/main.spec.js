const add = require('../main');

it ('should add two numbers', () => {
    let expectedResult = 'Receipts\n' +
    '------------------------------------------------------------\n' +
    'Coca Cola                       3          1\n' +
    'Pepsi-Cola                      5          2\n' +
    'Dr Pepper                       7          1\n' + 
    '------------------------------------------------------------\n' +
    'Price: 20'
    expect(add(['0001', '0003', '0005', '0003'])).toBe(expectedResult);
});