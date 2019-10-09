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
        return createReceipt(barcodes);
    }
    return null;
}

function checkBarcodes(barcodes){
    for(var x = 0; x < barcodes.length; x++){
        if(productDatabase.filter(result => result.id == barcodes[x]).length == 0){   
            return false;
        }
    }
    return true;
}

function createReceipt(barcodes){
    var barcodeCollections = [];
    var countedBarcodes = [];
    var currentBarcode = '';
    var product = '';
    var price = 0;
    var total = 0;
    var receipt = '';
    for(var x = 0; x < barcodes.length; x++){
        currentBarcode = barcodes[x];
        if(countedBarcodes.indexOf(currentBarcode) == -1){
            productDatabase.forEach(element => {
                if(element.id == currentBarcode){
                    product = element.name;
                    price = element.price;
                }
            });
            barcodeCollections.push({barcode: currentBarcode, productName: product, priceValue: price, count: countBarcodesPresented(barcodes, currentBarcode)});
            countedBarcodes.push(currentBarcode);
        }
    }
    barcodeCollections.sort((a, b) => (a.barcode > b.barcode) ? 1 : -1)
    receipt = 'Receipts\n' + 
    '------------------------------------------------------------\n';
    for(var y = 0; y < barcodeCollections.length; y++){
        receipt += setProductLine(barcodeCollections[y].productName, barcodeCollections[y].priceValue, barcodeCollections[y].count) + '\n';
        total += barcodeCollections[y].priceValue * barcodeCollections[y].count;
    }
    receipt += '------------------------------------------------------------\n' +
    'Price: ' + total;
    return receipt;
}

function countBarcodesPresented(barcodes, currentBarcode){
    return barcodes.filter(result => result == currentBarcode).length;
}

function setProductLine(productName, price, count){
    var productLine = productName;
    for(var x = 0; x <= 31 - productName.length; x++){
        productLine += ' ';
    }
    productLine += price;
    for(x = productLine.length; x < 43; x++){
        productLine += ' ';
    }
    productLine += count;
    
    return productLine;
}
