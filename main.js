'use strict';

function loadAllItems() {
  return [
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
  ];
}

function getItemList(inputs){
  var list = {}; 
  for(var i= 0, l = inputs.length; i< l; i++){ 
      var item = inputs[i]; 
      list[item] = (list[item] +1 ) || 1; 
  } 
  return list; 
}

function calBlankNums(item){
  let blank = '';
  let blankLength = 0
  if(isNaN(item)){
    blankLength = 32 - item.length;
  }else{
    blankLength = 11 - item.toString().length;
  }
  for(var i= 0; i< blankLength; i++){ 
    blank = blank.concat(' ')
  } 
  return blank; 
}
function getBill(itemList,allItems){

  let receipt = 'Receipts\n' + '------------------------------------------------------------\n';
  let total = 0;
  let bool = false;
  for(let key in itemList){
    for(let j = 0 ; j <allItems.length;j++ ){
        if(key == allItems[j].id ){
            receipt = receipt.concat(allItems[j].name + calBlankNums(allItems[j].name) + allItems[j].price +calBlankNums(allItems[j].price)+ itemList[key] + '\n');
            total += allItems[j].price * itemList[key]
            bool = true;
        }
    }
    if(!bool){
      return "[ERROR]: There is not exist this item";
    }
  }  
  receipt = receipt.concat('------------------------------------------------------------\n' + 'Price: '+ total);
  return receipt
}

function printReceipt(inputs) {
  if(!(inputs instanceof Array)){
    return '[ERROR]: There is not an array';
  }else{
    let allItems = loadAllItems()
    let itemList = getItemList(inputs)
    let receipt = getBill(itemList,allItems);
    console.log(receipt);
    return receipt;
  }
 
}
  module.exports = printReceipt;