const main = require('../main');

const countProduts = main.countProduts;
const fetchProduct = main.fetchProduct;
const generateReceiptItems = main.generateReceiptItems;
const countTotalPrice = main.countTotalPrice;
const printReceipt = main.printReceipt;
// it('结果验证', () => {
//     // 集成
//     // var codes = generateReceiptItems(['0003', '0003', '0001']);
//     // console.log("generateReceiptItems:", codes);

//     //
// })

it('结果验证', () => {
    // 集成
    var result = countTotalPrice(['0003', '0003', '0001']);
    console.log("countTotalPrice:", result);
})

it('print receipt', () => {
    printReceipt(['0003', '0003', '0001']);
})






















// it('should count codes', () => {
//     // given 
//     const codes = ['0003', '0003', '0001'];

//     // when
//     const countedCodes = countProduts(codes);
//     console.log(countedCodes);

//     // then
//     // expect(countedCodes[0].count).toBe(2);
// });

// it('should fetch product', () => {
//     // given 
//     const db = [
//         { "id": "0001", "name": "Coca Cola", "price": 3 },
//         { "id": "0002", "name": "Diet Coke", "price": 4 }
//     ];

//     const code = '0001';

//     // when
//     const product = fetchProduct(code, db);
//     console.log(product);

//     // then
//     // expect(product).toBe({ "price": 3, "name": "Coca Cola" });
// });