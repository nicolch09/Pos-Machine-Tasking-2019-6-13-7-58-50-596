const add = require('../main');

it ('Receipt with 4 barcodes', () => {
    let expectedResult = 'Receipts\n' +
    '------------------------------------------------------------\n' +
    'Coca Cola                       3          1\n' +
    'Pepsi-Cola                      5          2\n' +
    'Dr Pepper                       7          1\n' + 
    '------------------------------------------------------------\n' +
    'Price: 20'
    expect(add(['0001', '0003', '0005', '0003'])).toBe(expectedResult);
});

it ('Receipt with 4 barcodes', () => {
    let expectedResult = 'Receipts\n' +
    '------------------------------------------------------------\n' +
    'Mountain Dew                    6          1\n' +
    'Sprite                          8          2\n' +
    'Fanta                           12         2\n' + 
    '------------------------------------------------------------\n' +
    'Price: 46'
    expect(add(['0010', '0010', '0006', '0006', '0004'])).toBe(expectedResult);
});

it ('Check barcodes if one of it has an invalid value', () => {
    let expectedResult = null;
    expect(add(['00101', '0010', '0006', '0006', '0004'])).toBe(expectedResult);
});