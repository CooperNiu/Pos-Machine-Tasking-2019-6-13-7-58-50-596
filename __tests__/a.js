// const { countProducts, fetchProduct } = require('../main');

// it('should count codes', () => {
//     //given
//     const codes = ['0003', '0005', '0003'];
//     //when
//     const countedCodes = countProducts(codes);
//     console.log(countedCodes)
//         //then
//     expect(countedCodes[0].count).toBe(2);
// });

// it('should fetch product', () => {
//     //given
//     const db = [
//         { "id": "0001", "name": "Coca Cola", "price": 3 },
//         { "id": "0002", "name": "Diet Coke", "price": 4 },
//     ]
//     const code = "0001";
//     //when

//     const product = fetchProduct(code, db);
//     console.log(product)
//         //then
//     expect(product.price).toBe(3);
// });



// function countProducts(codes) {
//     let map = new Map();
//     for (let index = 0; index < codes.length; index++) {
//         let code = codes[index];
//         if (!map.has(code)) {
//             map.set(code, {
//                 code: code,
//                 count: 1
//             })
//         } else {
//             let item = map.get(code);
//             item.count++;
//             map.set(code, item);
//         }
//     }
//     let items = [];
//     map.forEach(function(item) {
//         items.push(item);
//     })
//     return items;
// }

// function fetchProduct(code, db) {
//     for (let index = 0; index < db.length; index++) {
//         console.log(db[index])
//         if (db[index].id === code) {
//             return {
//                 price: db[index].price,
//                 name: db[index].name
//             }
//         }
//     }
// }

// module.exports = { countProducts, fetchProduct };