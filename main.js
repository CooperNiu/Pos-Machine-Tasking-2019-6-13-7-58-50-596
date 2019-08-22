const db = [
    { "id": "0001", "name": "Coca Cola", "price": 3 },
    { "id": "0002", "name": "Diet Coke", "price": 4 },
    { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
    { "id": "0004", "name": "Mountain Dew", "price": 6 },
    { "id": "0005", "name": "Dr Pepper", "price": 7 },
    { "id": "0006", "name": "Sprite", "price": 8 },
    { "id": "0007", "name": "Diet Pepsi", "price": 9 },
    { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
    { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
    { "id": "0010", "name": "Fanta", "price": 12 }
]

function countProduts(codes) {
    var map = new Map()
    for (let index = 0; index < codes.length; index++) {
        const code = codes[index];
        // 遍历
        if (!map.has(code)) {
            // 存在就为1
            var item = {
                code: code,
                count: 1
            }
            map.set(code, item);
        } else {
            // 再次出现计数+1
            var item = map.get(code);
            item.count++;
            map.set(code, item);
        }
    }

    var items = [];
    map.forEach(function(item) {
        console.log(item);
        items.push(item);
    })

    return items;
}

function fetchProduct(code) {
    for (let index = 0; index < db.length; index++) {
        // console.log(db[index]);
        if (db[index].id === code) {
            return {
                price: db[index].price,
                name: db[index].name
            }
        }
    }
}

function generateReceiptItems(codes) {
    var countedProducts = countProduts(codes);
    var products = [];
    for (let index = 0; index < countedProducts.length; index++) {
        var countedProduct = countedProducts[index];
        var fetchedProduct = fetchProduct(countedProduct.code);
        // console.log(fetchedProduct);
        var product = {
            name: fetchedProduct.name,
            price: fetchedProduct.price,
            count: countedProduct.count
        }

        products.push(product);
        console.log(product);
    }

    return products;
}

function countTotalPrice(codes) {
    var products = generateReceiptItems(codes);
    var result = 0;
    for (let index = 0; index < products.length; index++) {
        result += products[index].price * products[index].count;
    }
    return result;
}

function printReceipt(codes) {
    var head = 'Receipt\n';
    var line = '----------------------------------\n'
    var items = generateReceiptItems(codes);
    var result = countTotalPrice(codes);
    var tail = line + 'Price:  ' + result;
    var itemstring = '';
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        itemstring += element.name + '\t' + element.count + '\t' + element.price + '\n';
        console.log(itemstring);
    }

    var receipt = head + line + itemstring + tail;


    console.log(receipt);
}

module.exports = {
    countProduts,
    fetchProduct,
    generateReceiptItems,
    countTotalPrice,
    printReceipt
};