const printReceipt = require('../main')
/**
 * 1.
given i hava number list: 0001, 0003, 0005, 0003

when i should print a receipt 

then  i can  print a receipt  such as 
Receipts
------------------------------------------------------------
Coca Cola                       3          1
Pepsi-Cola                      5          2
Dr Pepper                       7          1
------------------------------------------------------------
Price: 20
 */
it ('should create printReceipt', () => {
    expect(printReceipt(['0001', '0003', '0005', '0003'])).toBe('Receipts\n' + '------------------------------------------------------------\n' 
    +'Coca Cola                       3          1\n' 
    + 'Pepsi-Cola                      5          2\n' 
    + 'Dr Pepper                       7          1\n' 
    + '------------------------------------------------------------\n' 
    + 'Price: 20');
});

it ('should create printReceipt', () => {
    expect(printReceipt(['000152', '0003', '0005', '0003'])).toBe('[ERROR]: There is not exist this item');
});

it ('should create printReceipt', () => {
    expect(printReceipt(null)).toBe('[ERROR]: There is not an array');
});