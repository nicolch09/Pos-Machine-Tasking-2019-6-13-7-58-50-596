const productDatabase = [
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

function add (barcodes) {
    return printReceipt(barcodes);
}
module.exports = add;

function printReceipt(barcodes){
    if(checkBarcodes(barcodes)){
        return generateReceipt(barcodes);
    }
}

function checkBarcodes(barcodes){
    for(var x = 0; x < barcodes.length; x++){
        if(productDatabase.filter(result => result.id == barcodes[x]).length == null){
            return false;
        }
    }
    return true;
}

function generateReceipt(barcodes){
    var barcodeCollections = [];
    var currentBarcode = '';
    for(var x = 0; x < barcodes.length; x++){
        if(currentBarcode == ''){
            currentBarcode = barcodes[x];
            
        }
    }
}
