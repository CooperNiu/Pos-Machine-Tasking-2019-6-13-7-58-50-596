# Requirement

A cash register (POS) system is used in the store for settlement of the store. This cashier will settle and print the receipt (Receipt) according to the item(Item) in the customer's shopping cart (Cart) at the time of settlement.

We need to implement a function called printReceipt, which can input the data of the specified format as a parameter and then output the text of the receipt in the browser console.

This time, the input will be an array of barcodes (string). For example:

```js
['0001', '0003', '0005', '0003']
```

Suppose that our database is as follows:

```js
[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
]
```

Then the output should be 

```
Receipts
------------------------------------------------------------
Coca Cola                       3          1
Pepsi-Cola                      5          2
Dr Pepper                       7          1
------------------------------------------------------------
Price: 20
```

If an error happened while creating a receipt. This function should return an error message starts with `"[ERROR]:"`

# Principal

1. Please draw task diagrams on a paper.
2. Please declare all the methods according to your diagram.
3. Please write tests according to the task diagram
4. Please repeat step 3 until all functions are implemented.
