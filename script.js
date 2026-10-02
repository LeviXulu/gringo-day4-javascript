const productName = "Northstar Performance T-Shirt";
let price = 220;
let stock = 5;
const onSale = true;

function processOrder(quantity) {

    if (stock >= quantity) {
        let total = price * quantity;

        stock = stock - quantity;

        console.log("Purchase successful.");
        console.log(`${quantity} shirts cost K${total}`);
        console.log(`Remaining stock: ${stock}`);

    } else {
        console.log("Purchase failed.");
        console.log(`Only ${stock} items are available.`);
    }
}

const products = [
    {
        name: "Northstar Performance T-Shirt",
        price: 220,
        stock: 5,
    },
    {
        name: "Running Shoes",
        price: 650,
        stock: 3
    },
    {
        name: "Baseball Cap",
        price: 150,
        stock: 0
    }
];

console.log(products);

for (let product of products) {
    if (product.stock > 0) {
        console.log(`${product.name} is available.`);
    } else {
        console.log(`${product.name} is out of stock`);
    }
}

const productSelect = document.getElementById("product-select");
const stockMessage = document.getElementById("stock-message");
const checkStockButton = document.getElementById("check-stock");

checkStockButton.addEventListener("click", function() {

    const selectedIndex = productSelect.value;

    const selectedProduct = products[selectedIndex];

    console.log("Selected product:", selectedProduct);

    if (selectedProduct.stock > 0) {
        stockMessage.textContent =
            `${selectedProduct.name} costs K${selectedProduct.price} and has ${selectedProduct.stock} items in stock.`;
    } else {
        stockMessage.textContent =
            `${selectedProduct.name} is currently out of stock.`;
    }

});